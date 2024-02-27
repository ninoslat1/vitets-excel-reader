import{r as d}from"./react-1F1He6-G.js";import{s}from"./react-style-singleton-jvMCV41A.js";var l="right-scroll-bar-position",g="width-before-scroll-bar",p="with-scroll-bars-hidden",h="--removed-body-scroll-bar-size",u={left:0,top:0,right:0,gap:0},f=function(n){return parseInt(n||"",10)||0},m=function(n){var a=window.getComputedStyle(document.body),o=a[n==="padding"?"paddingLeft":"marginLeft"],t=a[n==="padding"?"paddingTop":"marginTop"],r=a[n==="padding"?"paddingRight":"marginRight"];return[f(o),f(t),f(r)]},b=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return u;var a=m(n),o=document.documentElement.clientWidth,t=window.innerWidth;return{left:a[0],top:a[1],right:a[2],gap:Math.max(0,t-o+a[2]-a[0])}},w=s(),e="data-scroll-locked",x=function(n,a,o,t){var r=n.left,i=n.top,v=n.right,c=n.gap;return o===void 0&&(o="margin"),`
  .`.concat(p,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(c,"px ").concat(t,`;
  }
  body[`).concat(e,`] {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([a&&"position: relative ".concat(t,";"),o==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(v,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(t,`;
    `),o==="padding"&&"padding-right: ".concat(c,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(l,` {
    right: `).concat(c,"px ").concat(t,`;
  }
  
  .`).concat(g,` {
    margin-right: `).concat(c,"px ").concat(t,`;
  }
  
  .`).concat(l," .").concat(l,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(g," .").concat(g,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body[`).concat(e,`] {
    `).concat(h,": ").concat(c,`px;
  }
`)},S=function(n){var a=n.noRelative,o=n.noImportant,t=n.gapMode,r=t===void 0?"margin":t,i=d.useMemo(function(){return b(r)},[r]);return d.useEffect(function(){return document.body.setAttribute(e,""),function(){document.body.removeAttribute(e)}},[]),d.createElement(w,{styles:x(i,!a,r,o?"":"!important")})};export{S as R,g as f,l as z};
