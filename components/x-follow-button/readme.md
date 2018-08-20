# x-follow-button

This module provides a template for myFT follow button component.

(and will potentially replace `{{> n-myft-ui/components/follow-button/follow-button}}`)

## Installation

This module is compatible with Node 6+ and is distributed on npm.

```bash
npm install --save @financial-times/x-follow-button
```

[engine]: https://github.com/Financial-Times/x-dash/tree/master/packages/x-engine

## Knobs

- Text (allows to play with the text on the button, and text inside of accompanied HTML)
- Extra Classes (they won't change anything in the storybook, but you can explore how your component's structure would be affected)
- Flags (what would change if you change the flag)
- Status (is the button selected or not)

## Usage

Component provided by this module expects a map of [follow button properties](#properties). They can be used with vanilla JavaScript or JSX (if you are not familiar check out [WTF is JSX][jsx-wtf] first). For example if you were writing your application using React you could use the component like this:

```jsx
import React from 'react';
import { FollowButton } from '@financial-times/x-follow-button';

// A == B == C
const a = FollowButton(props);
const b = <FollowButton {...props} />;
const c = React.createElement(FollowButton, props);
```

All `x-` components are designed to be compatible with a variety of runtimes, not just React. Check out the [`x-engine`][engine] documentation for a list of recommended libraries and frameworks.

[jsx-wtf]: https://jasonformat.com/wtf-is-jsx/

### Example: how to use with handlebars
(step-by-step guide)

1. Install `x-hadlebars`
```
$ npm install -S @financial-times/x-hadlebars
```

2. Add `x-hadlebars` to helpers of `n-ui` express app
```
const xHandlebars = require('@financial-times/x-handlebars');

const app = express({
	helpers: {
		x: xHandlebars()
	}
});
```

3. Add `x-follow-button` to `package.json`
```
$ npm install -S @financial-times/x-follow-button
```
or add `"@financial-times/x-follow-button": "file:../x-dash/components/x-follow-button"` if you want to link it to your local version (note that the path is a path to your local `x-dash` folder)

4. Specify to `package.json` that you are using "hyperons" engine
```
"x-dash": {
    "engine": {
        "server": "hyperons"
    }
}
```

5. Add your button to wherever you want to use it; this is a very basic example, feel free to play with other props
```
{{{
    x local="../x-dash/components/x-follow-button"
    component="FollowButton"
    conceptId="{conceptId}"
}}}
```

6. Add `x-dash` CSS used by this component
```
@import "x-follow-button/dist/FollowButton";
```

And all is ready to go!

Note: we assume that client side JavaScript is handled separately

## List of all properties (props)

Feature                   | Type    | Default value             | Knob
--------------------------|---------|---------------------------|------
`altButtonText`           | String  | 'Added'                   | yes
`buttonText`              | String  | 'Add to myFT'             | yes
`conceptId`               | String  | '00000-0000-00000-00000'  |
`csrfToken`               | String  | 'testTokenValue'          |
`extraButtonClasses`      | String  | null                      | yes
`followPlusDigestEmail`   | Boolean | true                      | yes
`isSelected`              | Boolean | false                     | yes
`name`                    | String  | 'Test Name'               | yes
`switchFollowDigestEmail` | Boolean | false                     |
`variant`                 | String  | null                      | yes