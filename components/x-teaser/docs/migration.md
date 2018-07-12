# Migration from n-teaser

This component replaces the existing `@financial-times/n-teaser` module. The design decisions behind `x-teaser` are quite different to `n-teaser` and so the available options and data structures required are different too. However, we have taken great care to ensure that migrating an app to `x-teaser` can be done quickly.

## Differences

The `n-teaser` module provides a set of [Handlebars] templates to be loaded by the existing Handlebars setup provided by `n-ui`. It includes several [GraphQL] fragments to fetch a range of data from [Next API]. Presenter classes called from inside the templates include logic to find and format this data.

The `x-teaser` module provides a single configurable component written in [JSX] which may be rendered by any runtime, in The App or FT.com. The component contains very little logic and expects the data provided to be consumable without any transformation.

[Handlebars]: https://handlebarsjs.com/
[GraphQL]: https://graphql.org/
[Next API]: https://github.com/Financial-Times/next-api
[JSX]: https://jasonformat.com/wtf-is-jsx/

## Guide

### 1. Install dependencies

In addition to the `x-teaser` package you will also need to install the [`x-handlebars`][x-handlebars] package which enables `x-` compatible components to be rendered inside your existing templates.

```diff
  "dependencies" {
-     "@financial-times/n-teaser": "^4.10.0",
+     "@financial-times/x-handlebars": "^1.0.0",
+     "@financial-times/x-teaser": "^1.0.0",
  },
```

[x-handlebars]: https://github.com/Financial-Times/x-dash/tree/master/packages/x-handlebars


### 2. Install and configure a runtime

There are a number of frameworks and libraries which can render components written with JSX. If you are already using a framework in your application then you should continue to use that where possible, otherwise we recommend installing the [Hyperons](https://www.npmjs.com/package/hyperons) package which is small and very fast.

The `x-handlebars` and `x-teaser` packages depend on a library called [`x-engine`][x-engine]. This is a consolidation library that provides your chosen runtime to `x-` compatible components. The configuration for `x-engine` needs to be added to your package manifest now to tell it to load your runtime.

```diff
  "dependencies" {
+     "hyperons": "^0.4.0",
  },
+  "x-dash": {
+    "engine": {
+      "server": "hyperons"
+    }
+  }
```

[x-engine]: https://github.com/Financial-Times/x-dash/tree/master/packages/x-handlebars

### 3. Load Handlebars helpers

User facing FT.com applications use an Express server provided by [n-ui]. As part of the server initialisation any Handlebars helpers can be loaded and made available to your templates.

The `n-teaser` module uses this functionality to load its internal helper functions and the `x-handlebars` helpers are loaded in the same way.

```diff
  helpers: {
-    nTeaserPresenter: require('@financial-times/n-teaser').presenter
+    ...require('@financial-times/x-handlebars')
  }
```

[n-ui]: https://github.com/Financial-Times/n-ui

### 4. Fetching the right data

The data required to render teasers can now be fetched preformatted ready for use. Whether your application fetches its data from Next API (using GraphQL queries) or directly from [Elasticsearch] we have reduced the number of fields required and size of the payload to be transferred.

[Elasticsearch]: https://github.com/Financial-Times/next-es-interface/

#### Changes to GraphQL queries

With GraphQL every field and sub-field to be retrieved must be explicitly specified. For convenience the `n-teaser` package provides a range of GraphQL fragments to generate this list of fields for each teaser type. To avoid maintaining this long list we have made teaser data available as a single JSON field.

```diff
- const { fragments } = require('@financial-times/n-teaser');

module.exports = `
-  ${fragments.teaserExtraLight}
-  ${fragments.teaserLight}
-  ${fragments.teaserStandard}
-  ${fragments.teaserHeavy}
-  ${fragments.teaserTopStory}
+  teaser
`;
```

#### Changes to Elasticsearch queries

Wherever you specify a list of source fields to retrieve you may replace this with a single entry.

```diff
fields: [
-   'id',
-   'url',
-   'relativeUrl',
-   'type',
-
-   'title',
-   'alternativeTitles.promotionalTitle',
-   'alternativeTitles.promotionalTitleVariant',
-
-   'standfirst',
-   'alternativeStandfirsts.promotionalStandfirst',
-   'alternativeStandfirsts.promotionalStandfirstVariant',
-
-   'publishedDate',
-   'firstPublishedDate',
-
-   'mainImage.*',
-   'alternativeImages.promotionalImage.*',

-   'displayConcept.*',
-   'brandConcept.*',
-   'genreConcept.*',
-   'authorConcepts.*',
-
+   'teaser.*'
];
```

### 5. Update template includes

The `n-teaser` package provides separate templates for each teaser layout. In contrast the `x-handlebars` package is generic and allows you to render any installed `x-` packages or local components in your view.

Teaser layouts and options may be configured by providing further attributes. Common use cases are provided via [presets](../readme.md#presets) and may be implemented using the `preset` attribute.

```diff
- {{>n-teaser/templates/heavy mods=(array 'small') widths="[160]" }}
+ {{{x package="x-teaser" component="Teaser" preset="SmallHeavy"}}}
```