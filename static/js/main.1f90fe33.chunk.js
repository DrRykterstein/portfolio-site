(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{100:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),a=n(19),c=n(11),i=n(150),s=n(72),l=n(52),u=n(138),h=n(51),d=Object(s.a)({palette:{primary:{main:l.a[800],light:u.a[300]},secondary:{main:h.a[500],light:h.a[300]}},overrides:{MuiButton:{root:{textTransform:"none"}}},props:{MuiButton:{disableRipple:!0,disableElevation:!0}}}),j=n(144),b=n(13),m=n(0),p=n(2),f=Object(m.createContext)({screenWidth:0,setScreenWidth:function(){}}),g=function(e){var t=e.children,n=Object(m.useState)(window.innerWidth),r=Object(b.a)(n,2),o=r[0],a=r[1];return Object(m.useEffect)((function(){window.addEventListener("resize",(function(){a(window.innerWidth)}))}),[]),Object(p.jsx)(f.Provider,{value:{screenWidth:o,setScreenWidth:a},children:t})},O=function(){return Object(m.useContext)(f)},x=n(139),_=(n(86),function(){var e=be.DesktopMenu,t=be.MobileMenu,n=O().screenWidth;return Object(p.jsxs)(x.a,{className:"header",children:[Object(p.jsx)(a.b,{className:"header__textDecoration",to:"/",children:Object(p.jsx)("h1",{className:"header__logo",children:"Terioch"})}),n>=568?Object(p.jsx)(e,{}):Object(p.jsx)(t,{})]})}),v=function(e){var t=e.href,n=e.target,r=e.rel,o=e.className,a=e.children;return Object(p.jsx)("a",{className:o,href:t,target:n||"__blank",rel:r||"noopener noreferrer",children:a})},k=n(20),N=n(3),y=n(142),C=n(143),M=Object(y.a)((function(e){return{root:{margin:e.spacing(.5)}}})),w=function(e){var t=e.variant,n=e.color,r=e.size,o=e.children,a=Object(N.a)(e,["variant","color","size","children"]),c=M();return Object(p.jsx)(C.a,Object(k.a)(Object(k.a)({variant:t||"contained",color:n||"primary",size:r||"large"},a),{},{classes:c,children:o}))},S=Object(y.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"97%",margin:e.spacing(1)}},MuiButton:{fontSize:"18px"}}})),T=function(e){var t=e.children,n=Object(N.a)(e,["children"]),r=S();return Object(p.jsx)("form",Object(k.a)(Object(k.a)({className:r.root,autoComplete:"off"},n),{},{children:t}))},A=n(151),P=function(e){var t=e.label,n=e.multiline,r=e.rows,o=e.name,a=e.value,c=e.error,i=void 0===c?void 0:c,s=e.helperText,l=e.onChange;return Object(p.jsx)(A.a,{variant:"outlined",label:t,multiline:n,rows:r,name:o,color:"secondary",value:a,onChange:l,error:i,helperText:s})},B=n(154),I=(n(94),{AnchorLink:v,MuiButton:w,Form:T,Input:P,Popup:function(e){var t=e.children,n=e.anchor,r=e.anchorOrigin,o=e.transformOrigin,a=e.onClose;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(B.a,{open:Boolean(n),anchorEl:n,anchorOrigin:r,transformOrigin:o,onClose:a,children:t})})},SvgIcon:function(e){var t=e.width,n=e.height,r=e.className,o=e.children,a=e.onMouseEnter,c=e.onMouseLeave;return Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"25",height:n||"25",fill:"currentColor",className:r,viewBox:"0 0 16 16",onMouseEnter:a,onMouseLeave:c,children:o})}}),z=Object(y.a)((function(){return{MuiButton:{fontSize:"18px"}}})),L=function(){var e=z(),t=I.MuiButton;return Object(p.jsxs)("ul",{className:"header__menu",children:[Object(p.jsx)(a.b,{className:"header__link header__textDecoration",to:"/",children:Object(p.jsx)("li",{className:"header__linkText",children:"Portfolio"})}),Object(p.jsx)(a.b,{className:"header__link header__textDecoration",to:"/contact",children:Object(p.jsx)(t,{className:e.MuiButton,children:"Contact"})})]})},F=n(146),D=n(153),E=n(145),V=n(147),W=n(148),R=n(69),H=n.n(R),J=Object(y.a)((function(){return{drawerPaper:{backgroundColor:"#212121"},burger:{color:"white"}}})),Q=function(){var e=J(),t=Object(m.useState)(!1),n=Object(b.a)(t,2),r=n[0],o=n[1],c=function(){return o(!r)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F.a,{className:e.burger,onClick:c,children:Object(p.jsx)(H.a,{})}),Object(p.jsx)(D.a,{classes:{paper:e.drawerPaper},anchor:"right",keepMounted:!0,elevation:16,open:r,onClose:c,children:Object(p.jsxs)(E.a,{children:[Object(p.jsx)(V.a,{className:"header__mobile__item",onClick:c,children:Object(p.jsx)(a.b,{className:"header__link header__textDecoration",to:"/",children:Object(p.jsx)(W.a,{children:"Portfolio"})})}),Object(p.jsx)(V.a,{className:"header__mobile__item",onClick:c,children:Object(p.jsx)(a.b,{className:"header__link header__textDecoration",to:"/contact",children:Object(p.jsx)(W.a,{children:"Contact"})})})]})})]})},q=n(149),U={bugTracker:{title:"Bug Tracker",src:"bug-tracker.png",github:"bug-tracker",link:"https://dotnet-bug-tracker.herokuapp.com/",desc:"A bug/issue tracking application built in C# Asp.Net MVC that tracks and maintains issues in the form of tickets for a collection of projects. Includes authentication and role-based authorization with Identity."},techBlog:{title:"Technology Blog",src:"tech-blog.png",github:"tech-blog-server",link:"https://tech-blog-three.vercel.app/blog",desc:"A programming tutorial blog built in C# Asp.Net Web API and React that implements JWT authentication, claims-based authorization and entity framework data access."},bookStore:{title:"Book Store",src:"book-store.png",github:"infinite-book-store",link:"https://book-store-nine.vercel.app",desc:"A Book store built in NextJS, Typescript, and Shopify with headless integration as well as full firebase authentication. Products are fetched using GraphQL through Shopify's storefront API."},countryLibrary:{title:"Country Library",src:"country-library.png",github:"infinite-country-library",link:"https://modest-volhard-e48a9a.netlify.app",desc:"A website built in HTML, CSS and Javascript that displays information regarding a specific country based on data fetched from an external API."},todoApp:{title:"Todo App",src:"todo-app.png",github:"react-todo-app",link:"https://optimistic-poitras-267ce4.netlify.app",desc:"A Todo List application built in React and structured using class components. Includes full CRUD functionality as well as MySQL database integration and displays a background image fetched using the Unsplash REST API."}},Z=(n(99),Object(y.a)((function(e){return{MuiButton__learnMore:{borderRadius:"30px",padding:e.spacing(1.5,3),fontSize:"20px"},MuiButton__viewSite:{fontSize:"18px"},Paper:{backgroundColor:"#0F1217",cursor:"pointer",borderRadius:"15px"},Link:{textDecoration:"none"},Typography:{backgroundColor:"#e8e8e8",padding:e.spacing(1)}}}))),G=function(){var e=be.PortfolioItem,t=be.Profiles,n=I.MuiButton,r=Z(),o=O().screenWidth;return Object(p.jsxs)("main",{className:"portfolio__container",children:[Object(p.jsxs)("section",{className:"portfolio__intro__container",children:[Object(p.jsx)("h1",{className:"portfolio__intro__title",children:"Web Developer specializing in C# and ASP.NET"}),o>968&&Object(p.jsx)(t,{component:"Portfolio"}),Object(p.jsx)(a.b,{className:r.Link,to:"/contact",children:Object(p.jsx)(n,{className:r.MuiButton__learnMore,color:"secondary",children:"Learn More"})})]}),Object(p.jsxs)("section",{className:"portfolio__main__container",children:[Object(p.jsx)("h1",{className:"portfolio__main__title",children:"Portfolio"}),Object(p.jsx)(q.a,{container:!0,spacing:2,children:Object.keys(U).map((function(t,n){return Object(p.jsx)(e,{Items:U,item:t,classes:r},n)}))})]})]})};var K=function(){var e=Object(m.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1];return{anchor:n,setAnchor:r,handleAnchorOpen:function(e){return r(e.currentTarget)},handleAnchorClose:function(){return r(null)}}},$=n(53),X=function(e){var t=e.Items,n=e.item,r=e.classes,o=I.MuiButton,a=I.Popup,c=I.AnchorLink,i=I.SvgIcon,s=t[n],l=s.title,u=s.src,h=s.github,d=s.link,f=s.desc,g=K(),x=g.anchor,_=g.handleAnchorOpen,v=g.handleAnchorClose,k=O().screenWidth,N=Object(m.useState)(""),y=Object(b.a)(N,2),C=y[0],M=y[1];Object(m.useEffect)((function(){if(k>768)return M("h6");M("body1")}),[k]);return Object(p.jsx)(q.a,{item:!0,xs:12,md:6,children:Object(p.jsxs)(j.a,{className:"".concat(r.Paper," portfolio__grid__item"),children:[Object(p.jsx)("h1",{className:"portfolio__grid__title",children:l}),Object(p.jsxs)("div",{className:"portfolio__grid__imageContainer",children:[Object(p.jsx)("img",{className:"portfolio__grid__image",src:"".concat("/portfolio-site","/images/").concat(u),alt:"Loading..."}),Object(p.jsx)("div",{className:"portfolio__grid__overlay",children:Object(p.jsxs)("div",{className:"portfolio__grid__overlay__items",children:[Object(p.jsx)(c,{href:"https://github.com/Terioch/".concat(h),children:Object(p.jsx)(i,{className:"portfolio__grid__github",width:k<=414?"25":"35",height:k<=414?"25":"35",children:Object(p.jsx)("path",{d:"M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"})})}),Object(p.jsx)(c,{className:r.Link,href:d,children:Object(p.jsx)(o,{className:r.MuiButton__viewSite,size:k<=568?"medium":"large",children:"View Site"})}),k<=668||k>960&&k<1400?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)($.a,{className:"popup__link",variant:"h6",onClick:_,children:"Read App Description..."}),Object(p.jsx)(a,{open:!0,anchor:x,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:v,children:Object(p.jsx)($.a,{className:r.Typography,children:f})})]}):Object(p.jsx)($.a,{className:"portfolio__grid__text",variant:"h6"===C?"h6":"body1",children:f})]})})]})]})})},Y=Object(y.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",right:"2.5rem",top:"40%"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.8,0)}}})),ee=Object(y.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.6,1)}}})),te=function(e){var t=Y(),n=ee();return"Portfolio"===e?t:n},ne=(n(100),function(e){var t=e.component,n=I.AnchorLink,r=I.SvgIcon,o=te(t),a=o.root,c=o.icon;return Object(p.jsxs)("section",{className:"profiles__container ".concat(a),children:[Object(p.jsx)(n,{href:"https://github.com/Terioch",children:Object(p.jsx)(r,{className:"bi bi-github ".concat(c),children:Object(p.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(p.jsx)(n,{href:"https://www.linkedin.com/in/rio-stockton-774259179/",children:Object(p.jsx)(r,{className:"bi bi-linkedin ".concat(c),children:Object(p.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]})}),re=n(60),oe=n.n(re),ae=n(70),ce=n(71),ie=n.n(ce),se=n(18);var le=function(e){var t=Object(m.useState)(e),n=Object(b.a)(t,2),r=n[0],o=n[1],a=Object(m.useState)(Object(k.a)({},e)),c=Object(b.a)(a,2),i=c[0],s=c[1];return{formValues:r,setFormValues:o,formErrors:i,setFormErrors:s,handleInputChange:function(e){var t=e.target,n=t.name,a=t.value;o(Object(k.a)(Object(k.a)({},r),{},Object(se.a)({},n,a)))},resetForm:function(){o(e),s({})}}},ue=(n(104),Object(y.a)((function(){return{MuiButton:{fontSize:"18px"}}}))),he={name:"",email:"",message:""},de=function(){var e=ue(),t=I.Form,n=I.Input,r=I.MuiButton,o=le(he),a=o.formValues,c=o.formErrors,i=o.setFormErrors,s=o.handleInputChange,l=o.resetForm,u=function(){var e=Object(ae.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.a.sendForm("gmail_dit3vnl","portfolio_template",t.currentTarget,"user_KjeqDIChuQZZtV1bpVSjl");case 3:n=e.sent,console.log(n.text),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.text);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(t,{onSubmit:function(e){e.preventDefault(),function(){var e=Object(k.a)({},a);return e.name=a.name?"":"This field is required.",e.email=/$^|.+@.+..+/.test(a.email)?"":"Please provide a valid Email address.",e.message=a.message?"":"This field is required.",i(Object(k.a)({},e)),Object.values(e).every((function(e){return""===e}))}()&&(u(e),l())},children:[Object(p.jsx)("h1",{className:"contact__title",children:"Queries"}),Object(p.jsx)(q.a,{container:!0,children:Object(p.jsxs)(q.a,{item:!0,xs:12,children:[Object(p.jsx)(n,{label:"Full Name*",name:"name",value:a.name,error:!!c.name,helperText:c.name,onChange:s}),Object(p.jsx)(n,{label:"Email",name:"email",value:a.email,error:!!c.email,helperText:c.email,onChange:s}),Object(p.jsx)(n,{label:"Message*",multiline:!0,rows:5,name:"message",value:a.message,error:!!c.message,helperText:c.message,onChange:s}),Object(p.jsx)("div",{className:"contact__btn__container",children:Object(p.jsx)(r,{className:e.MuiButton,type:"submit",color:"secondary",children:"Send Message"})})]})})]})})},je=Object(y.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2.1),textAlign:"center",backgroundColor:"#212121"},text:{color:"rgba(245, 245, 245, 0.719)",margin:e.spacing(.6)}}})),be={Header:_,MobileMenu:Q,DesktopMenu:L,Portfolio:G,PortfolioItem:X,Profiles:ne,Contact:de,Footer:function(){var e=je(),t=be.Profiles;return Object(p.jsxs)("footer",{className:e.root,children:[Object(p.jsx)(t,{component:"Footer"}),Object(p.jsx)("p",{className:e.text,children:"Terioch Development | Copyright \xa9 2022"})]})}};n(105);var me=function(){var e=be.Header,t=be.Portfolio,n=be.Contact,r=be.Footer;return Object(p.jsx)(g,{children:Object(p.jsxs)("main",{className:"App",children:[Object(p.jsx)(e,{}),Object(p.jsxs)(c.c,{children:[Object(p.jsx)(c.a,{path:"/",exact:!0,component:t}),Object(p.jsx)(j.a,{className:"contact__container",children:Object(p.jsx)(c.a,{path:"/contact",component:n})})]}),Object(p.jsx)(r,{})]})})};o.a.render(Object(p.jsx)(i.a,{theme:d,children:Object(p.jsx)(a.a,{children:Object(p.jsx)(c.a,{path:"/",component:me})})}),document.getElementById("root"))},86:function(e,t,n){},94:function(e,t,n){},99:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.1f90fe33.chunk.js.map