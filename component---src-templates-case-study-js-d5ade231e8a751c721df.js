(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{how0:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vOnD").d.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-1ddwgxn-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.a=function(e){var t=e.content,a=e.aside;return r.a.createElement(i,null,r.a.createElement("section",{className:"layout__content"},t&&t),r.a.createElement("section",{className:"layout__aside"},r.a.createElement("aside",{className:"sticky__aside"},a&&a)))}},kqOb:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("vOnD"),l=a("yBb5"),o=a("vrFN"),s=a("KrdF"),c=(a("8iLm"),a("Nr1y")),m=a("oU4B"),d=(a("v7sR"),a("how0")),p=i.d.h4.withConfig({displayName:"case-studystyle__InfoTitle",componentId:"sc-1xfoi64-0"})(["color:",";display:flex;width:100%;justify-content:center;align-items:center;text-align:center;font-weight:600;font-size:16px;margin:15px 0;::after{content:'';border-top:1px solid;margin:0 0 0 10px;flex:1 0 20px;}"],(function(e){return e.theme.primaryColor})),u=i.d.section.withConfig({displayName:"case-studystyle__CaseStudyWrapper",componentId:"sc-1xfoi64-1"})(["margin-top:100px;margin-bottom:100px;li{margin:5px 0;}.case__title{margin-bottom:50px;display:flex;justify-content:space-between;align-items:center;width:70%;}.case__title h1{margin:0;}.case__links{margin:0;display:flex;}.case__links a{text-decoration:none;margin-left:20px;}}}.case__info{margin-bottom:70px;display:grid;grid-template-columns:5fr 2fr;grid-gap:1px;text-align:justify;@media ","{grid-template-columns:0.6fr 1fr;}@media ","{grid-template-columns:1fr;}}ul{list-style-type:disc;margin-left:20px;padding-left:20px;}li{margin-bottom:10px;line-height:1.5;}.case__iframe-container{width:100%;margin:10px 0;}h1{font-size:1.8rem;margin-bottom:50px;}h2,h3,h4,h5,h6{margin:20px 0;color:",";}"],(function(e){return e.theme.media.fablet}),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.primaryColor})),f=i.d.div.withConfig({displayName:"case-study__CaseStudyCard",componentId:"sc-10z126p-0"})(["display:grid;grid-template-columns:2fr;padding:16px;position:relative;box-shadow:0 4px 8px rgba(18,18,18,0.1);transition:box-shadow 0.3s ease,transform 0.3s ease;padding:20px;margin:20px auto;width:60%;&:hover{box-shadow:0 6px 12px rgba(0,0,0,0.61);transform:translateY(-5px);}"]);i.d.h2.withConfig({displayName:"case-study__Header",componentId:"sc-10z126p-1"})(["margin:0;padding:0 16px;position:relative;z-index:2;display:flex;align-items:center;span{margin-right:10px;}"]),t.default=function(e){var t=e.data,a=(t.markdownRemark.fields.slug,t.markdownRemark.frontmatter);a.info.links&&a.info.links.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e[1]},e[0]))}));return r.a.createElement(l.a,null,r.a.createElement(o.a,{slug:t.markdownRemark.fields.slug,title:a.title}),r.a.createElement(u,null,r.a.createElement(f,null,r.a.createElement(s.a,{className:"case__title",justify:"space-between",align:"center"},r.a.createElement("h1",null,a.title),r.a.createElement(m.a,{className:"case__links"},r.a.createElement(c.a,{label:"github",icon:["fab","github"],href:a.src}))),r.a.createElement("section",{className:"case__info"},r.a.createElement("div",null,r.a.createElement("aside",null,r.a.createElement(p,null,"Idea"),r.a.createElement("p",null,a.info.idea)),r.a.createElement("aside",null,r.a.createElement(p,null,"Core Technologies"),r.a.createElement("ul",null,a.info.tech.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("aside",null,r.a.createElement(p,null,"Features"),r.a.createElement("ul",null,a.info.features.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("aside",null,r.a.createElement(p,null,"Tech Stack"),r.a.createElement("div",null,a.info.techStack.map((function(e,t){return"FrontEnd"===e||"BackEnd"===e?r.a.createElement("p",{key:t},r.a.createElement("b",null,e)):r.a.createElement("ul",{key:t},r.a.createElement("li",null,e)," ")})))))),r.a.createElement(d.a,{content:r.a.createElement("article",{className:"markdown-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}})}))))}},v7sR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("IP2g");t.a=function(e){var t=e.baseSlugUrl,a=e.title,n="https://facebook.com/sharer/sharer.php?u="+t,l='http://twitter.com/share?text="'+a+'" - &url='+t,o="http://www.reddit.com/submit?url="+t+"&title="+a;return r.a.createElement("div",{className:"blog__social-share"},r.a.createElement("a",{"aria-label":"share on facebook",rel:"noopener norefferer",target:"__blank",href:n},r.a.createElement(i.a,{style:{fontSize:24},icon:["fab","facebook"]})),r.a.createElement("a",{"aria-label":"share on twitter",rel:"noopener norefferer",target:"__blank",href:l},r.a.createElement(i.a,{style:{fontSize:24},icon:["fab","twitter"]})),r.a.createElement("a",{"aria-label":"share on reddit",rel:"noopener norefferer",target:"__blank",href:o},r.a.createElement(i.a,{style:{fontSize:24},icon:["fab","reddit"]})))}}}]);
//# sourceMappingURL=component---src-templates-case-study-js-d5ade231e8a751c721df.js.map