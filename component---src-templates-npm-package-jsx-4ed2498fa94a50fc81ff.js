(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,u,t){"use strict";t.r(u);var D=t(0),a=t.n(D),n=t(120),r=t(124),s=t(125),i=t(114);const c={rel:"noopener noreferrer",target:"_blank"};var l=e=>{let u=e.name,t=e.manifest,D=e.storybook;return a.a.createElement("div",{className:"tertiary-menu"},a.a.createElement("p",{className:"tertiary-menu__heading"},"Quick links:"),a.a.createElement("ul",{className:"tertiary-menu__list"},a.a.createElement("li",{className:"tertiary-menu__item"},a.a.createElement("a",Object.assign({href:`https://www.npmjs.com/package/${t.name}`},c),"NPM")),a.a.createElement("li",{className:"tertiary-menu__item"},a.a.createElement("a",Object.assign({href:t.homepage},c),"GitHub")),D?a.a.createElement("li",{className:"tertiary-menu__item"},a.a.createElement(i.Link,Object.assign({to:`/storybook/index.html?selectedKind=${u}`},c),"Storybook")):null))};var o=class extends a.a.Component{constructor(e){super(e),this.state={selected:0}}onClick(e){this.state.selected!==e&&this.setState({selected:e})}render(){const e=this.props.stories[this.state.selected],u=`?selectedKind=${this.props.name}&selectedStory=${e}`,t=Object(i.withPrefix)(`/storybook/iframe.html${u}`),D=Object(i.withPrefix)(`/storybook/index.html${u}`);return a.a.createElement("div",{id:"component-demos",className:"story-viewer"},a.a.createElement("h2",{className:"story-viewer__heading"},"Component demos"),a.a.createElement("ul",{className:"story-viewer__list",role:"tablist"},this.props.stories.map((e,u)=>a.a.createElement("li",{key:`story-${u}`,className:"story-viewer__item"},a.a.createElement("button",{role:"tab",className:"story-viewer__button","aria-selected":this.state.selected===u,onClick:this.onClick.bind(this,u)},e)))),a.a.createElement("div",{className:"story-viewer__panel",role:"tabpanel"},a.a.createElement("iframe",{title:`${e} demo`,src:t})),a.a.createElement("p",{className:"story-viewer__footer"},a.a.createElement("a",{href:D},"View in Storybook")))}};t.d(u,"pageQuery",function(){return m});u.default=(e=>{let u=e.pageContext,t=e.data,D=e.location;return a.a.createElement(n.a,{title:u.title,sidebar:a.a.createElement(r.a,{heading:u.source,items:t.modules.edges,location:D.pathname})},a.a.createElement("div",{className:"content-layout"},a.a.createElement("main",{className:"content-layout__main",role:"main"},a.a.createElement("div",{className:"content-layout__main-inner"},a.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t.markdown.html}}),t.storybook?a.a.createElement(o,{name:u.title,stories:t.storybook.stories}):null)),a.a.createElement("div",{className:"content-layout__tertiary"},a.a.createElement("div",{className:"content-layout__tertiary-inner"},a.a.createElement(l,{name:u.title,manifest:t.npm.manifest,storybook:Boolean(t.storybook)}),a.a.createElement(s.a,{items:t.markdown.headings,demos:Boolean(t.storybook)})))))});const m="2595056528"},114:function(e,u,t){"use strict";t.r(u),t.d(u,"graphql",function(){return F}),t.d(u,"StaticQueryContext",function(){return m}),t.d(u,"StaticQuery",function(){return E});var D=t(0),a=t.n(D),n=t(3),r=t.n(n),s=t(113),i=t.n(s);t.d(u,"Link",function(){return i.a}),t.d(u,"withPrefix",function(){return s.withPrefix}),t.d(u,"navigate",function(){return s.navigate}),t.d(u,"push",function(){return s.push}),t.d(u,"replace",function(){return s.replace}),t.d(u,"navigateTo",function(){return s.navigateTo});var c=t(115),l=t.n(c);t.d(u,"PageRenderer",function(){return l.a});var o=t(23);t.d(u,"parsePath",function(){return o.a});const m=a.a.createContext({}),E=e=>a.a.createElement(m.Consumer,null,u=>e.data||u[e.query]&&u[e.query].data?(e.render||e.children)(e.data?e.data.data:u[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)"));function F(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},115:function(e,u,t){e.exports=(e=>e&&e.default||e)(t(118))},117:function(e,u,t){"use strict";var D=t(0),a=t.n(D),n=t(114);u.a=(e=>{let u=e.showLogo;return a.a.createElement("header",{className:"site-header"},a.a.createElement("div",{className:"site-header__masthead"},a.a.createElement(n.Link,{to:"/"},"x-dash")),u?a.a.createElement("img",{className:"site-header__logo",src:Object(n.withPrefix)("/logo.png"),alt:""}):null,a.a.createElement("nav",{role:"navigation",className:"site-header__menu"},a.a.createElement(n.Link,{to:"/docs",activeClassName:"is-active"},"Docs"),a.a.createElement(n.Link,{to:"/components",activeClassName:"is-active"},"Components"),a.a.createElement(n.Link,{to:"/packages",activeClassName:"is-active"},"Packages")))})},118:function(e,u,t){"use strict";t.r(u);var D=t(0),a=t.n(D),n=t(3),r=t.n(n),s=t(37),i=t(2);const c=e=>{let u=e.location;const t=i.default.getResourcesForPathnameSync(u.pathname);return a.a.createElement(s.a,Object.assign({location:u,pageResources:t},t.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},u.default=c},119:function(e,u,t){"use strict";var D=t(0),a=t.n(D);const n={rel:"noopener noreferrer",target:"_blank"};u.a=(()=>a.a.createElement("footer",{className:"site-footer",role:"contentinfo"},a.a.createElement("div",{className:"site-footer__legal-links"},a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/cookies/"},n),"Cookies"),a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/"},n),"Copyright"),a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/privacy/"},n),"Privacy"),a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/terms-conditions"},n),"Terms & Conditions")),a.a.createElement("div",{className:"site-footer__related-links"},a.a.createElement("a",Object.assign({href:"https://github.com/financial-times/x-dash"},n),"x-dash on GitHub"),a.a.createElement("a",Object.assign({href:"https://slack.com/messages/x/"},n),"x-dash on Slack")),a.a.createElement("p",{className:"site-footer__small-print"},a.a.createElement("small",null,"© THE FINANCIAL TIMES LTD 2018. FT and 'Financial Times' are trademarks of The Financial Times Ltd"))))},120:function(e,u,t){"use strict";var D=t(0),a=t.n(D),n=t(123),r=t.n(n),s=t(117),i=t(119);u.a=(e=>{let u=e.title,t=e.children,D=e.sidebar;return a.a.createElement("div",{className:"basic-layout"},a.a.createElement(r.a,{title:`${u} / x-dash`}),a.a.createElement("div",{className:"basic-layout__header"},a.a.createElement(s.a,{showLogo:!0})),a.a.createElement("div",{className:"basic-layout__content"},t),a.a.createElement("div",{className:"basic-layout__sidebar"},D),a.a.createElement("div",{className:"basic-layout__footer"},a.a.createElement(i.a,null)))})},124:function(e,u,t){"use strict";var D=t(0),a=t.n(D),n=t(114);u.a=(e=>{let u=e.heading,t=e.items;return a.a.createElement("div",{className:"site-sidebar"},a.a.createElement("ul",{className:"site-sidebar__list site-sidebar__list--sticky"},a.a.createElement("li",{className:"site-sidebar__item site-sidebar__item--heading"},u),t.map((e,u)=>{let t=e.node;return a.a.createElement("li",{key:`module-menu-${u}`,className:"site-sidebar__item"},a.a.createElement(n.Link,{to:t.path,exact:!0,activeClassName:"is-active"},t.context.title))})))})},125:function(e,u,t){"use strict";var D=t(0),a=t.n(D),n=t(126),r=t.n(n);const s=e=>{return"#"+(new r.a).slug(e)},i=e=>{e.preventDefault();const u=document.querySelector(e.currentTarget.hash);u&&u.scrollIntoView({behavior:"smooth"})};u.a=(e=>{let u=e.items,t=e.demos,D=void 0!==t&&t,n=e.minDepth,r=void 0===n?2:n,c=e.maxDepth,l=void 0===c?3:c;const o=u.filter(e=>e.depth>=r&&e.depth<=l);return 0===o.length?null:a.a.createElement("div",{className:"tertiary-menu"},a.a.createElement("p",{className:"tertiary-menu__heading"},"On this page:"),a.a.createElement("ul",{className:"tertiary-menu__list"},o.map((e,u)=>a.a.createElement("li",{key:`headings-${u}`,className:"tertiary-menu__item",style:{paddingLeft:e.depth-r+"em"}},a.a.createElement("a",{href:s(e.value),onClick:i},e.value))),D?a.a.createElement("li",{className:"tertiary-menu__item"},a.a.createElement("a",{href:"#component-demos",onClick:i},"Component demos")):null))})},126:function(e,u,t){var D=t(127);e.exports=s;var a=Object.hasOwnProperty,n=/\s/g,r=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g;function s(){if(!(this instanceof s))return new s;this.reset()}s.prototype.slug=function(e,u){for(var t=function(e,u){if("string"!=typeof e)return"";u||(e=e.toLowerCase());return e.trim().replace(r,"").replace(D(),"").replace(n,"-")}(e,!0===u),s=t;a.call(this.occurrences,t);)this.occurrences[s]++,t=s+"-"+this.occurrences[s];return this.occurrences[t]=0,t},s.prototype.reset=function(){this.occurrences=Object.create(null)}},127:function(e,u){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}}}]);
//# sourceMappingURL=component---src-templates-npm-package-jsx-4ed2498fa94a50fc81ff.js.map