(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return a}),n.d(t,"rightToc",function(){return l}),n.d(t,"default",function(){return u});n(0);var o=n(133);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a={title:"Indentation"},l=[],b={rightToc:l},c="wrapper";function u(e){var t=e.components,n=i(e,["components"]);return Object(o.b)(c,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Because components are often deeply nested structures, it's rarely possible to fit them on one line. We've developed some best practices for indentation unique to Components code. These rules should generally ",Object(o.b)("em",{parentName:"p"},"not")," be applied to non-Components code."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Put a newline before ",Object(o.b)("inlineCode",{parentName:"li"},"new"),", so that parameters left-align instead of aligning by semicolon."),Object(o.b)("li",{parentName:"ul"},"Put a newline after ",Object(o.b)("inlineCode",{parentName:"li"},":")," if the parameter value stretches to multiple lines."),Object(o.b)("li",{parentName:"ul"},"Consider putting a newline after ",Object(o.b)("inlineCode",{parentName:"li"},"=")," or ",Object(o.b)("inlineCode",{parentName:"li"},"return")," if it reduces nesting.")),Object(o.b)("div",{class:"note"},Object(o.b)("p",null,"These are guidelines, not ironclad rules. Feel free to ignore them on a case-by-case basis.")),Object(o.b)("p",null,"This is hard to read:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec-redhighlight"}),'HeaderComponent *header =\n  [HeaderComponent\n    newWithTitle:@"Hello world"\n    subtitleComponent:[SubtitleComponent newWithSubtitle:subtitle image:image]\n    image:image];\n')),Object(o.b)("p",null,"Much better:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec"}),'HeaderComponent *header =\n[HeaderComponent\n newWithTitle:@"Hello world"\n subtitleComponent:\n [SubtitleComponent\n  newWithSubtitle:subtitle\n  image:image]\n image:image];\n')),Object(o.b)("p",null,"Within a statement, indent by only one space."),Object(o.b)("div",{class:"note"},Object(o.b)("p",null,"You never have to indent manually. After inserting newlines as described above, use ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl-I")," (Editor ▶︎ Structure ▶︎ Re-Indent) to make Xcode do the indentation work for you.")))}u.isMDXComponent=!0}}]);