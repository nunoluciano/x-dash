webpackJsonp([0x991ba6cad54e],{401:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{id:"using-locally-installed-x-dash"},children:[{type:"element",tagName:"a",properties:{href:"#using-locally-installed-x-dash",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Using Locally-installed x-dash"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When developing an x-dash component, although we recommend using the Component Explorer to preview your component, it's sometimes useful to see it in the context of a real app."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"prerequisites"},children:[{type:"element",tagName:"a",properties:{href:"#prerequisites",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Prerequisites"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This guide assumes that:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"your app is set up according to the "},{type:"element",tagName:"a",properties:{href:"/x-dash/tools/x-docs/src/docs/guides/apps/setup.md"},children:[{type:"text",value:"app setup guide"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"you have x-dash set up for development according to the "},{type:"element",tagName:"a",properties:{href:"/x-dash/tools/x-docs/src/docs/guides/components/setup.md"},children:[{type:"text",value:"component setup guide"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"the folders for your app and x-dash are in the same parent directory"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"using-relative-code-classlanguage-textnpm-installcode"},children:[{type:"element",tagName:"a",properties:{href:"#using-relative-code-classlanguage-textnpm-installcode",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Using relative "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As an example, we'll install "},{type:"element",tagName:"a",properties:{href:"/x-dash/components/x-teaser/readme.md"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"x-teaser"}]}]},{type:"text",value:" into an app. With your app and x-dash set up as above, in the folder for your app, run "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install --save ../x-dash/components/x-teaser"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you had "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"x-teaser"}]},{type:"text",value:" previously installed from "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm"}]},{type:"text",value:", you should see that in your "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"package.json"}]},{type:"text",value:", the version specifier has changed to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"file:../x-dash/components/x-teaser"}]},{type:"text",value:". The package will have been installed into "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"node_modules"}]},{type:"text",value:" as a symbolic link to the folder within "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"x-dash"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"While the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"file:"}]},{type:"text",value:" version specifier, subsequent runs of "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install"}]},{type:"text",value:" will work as long as the folders are kept in the correct locations. Otherwise, npm will return this error:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'npm ERR! code ENOLOCAL\nnpm ERR! Could not install from "../x-dash/components/x-teaser" as it does not contain a package.json file.'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you encounter this error, ensure that x-dash is set up correctly in the parent folder of your app, or reinstall "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"x-teaser"}]},{type:"text",value:" from the npm registry using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install --save @financial-times/x-teaser"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"avoid-code-classlanguage-textnpm-linkcode"},children:[{type:"element",tagName:"a",properties:{href:"#avoid-code-classlanguage-textnpm-linkcode",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Avoid "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm link"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Usually, using a locally-installed version of a package is a use case for "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm link"}]},{type:"text",value:". In practice, we have found it to be brittle, causing problems with peer dependencies and nested transitive dependencies. Using relative "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install"}]},{type:"text",value:" treats the installed package as any other, ensuring your "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"node_modules"}]},{type:"text",value:" has the expected structure."}]}],data:{quirksMode:!1}},frontmatter:{path:"/guides/apps/local",title:"Local"},headings:[{value:"Using Locally-installed x-dash",depth:1},{value:"Prerequisites",depth:2},{value:"Using relative ",depth:2},{value:"Avoid ",depth:3}],timeToRead:2,wordCount:{words:232}}},pathContext:{sitemap:{title:"Local",breadcrumbs:["Guides","Apps","Local"],order:null}}}}});
//# sourceMappingURL=path---guides-apps-local-2dddfda7a0d4071fa758.js.map