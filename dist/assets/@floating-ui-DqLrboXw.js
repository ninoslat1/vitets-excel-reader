import{r as S}from"./react-1F1He6-G.js";import{r as Ht}from"./react-dom-B7OSs1zE.js";const Nt=["top","right","bottom","left"],j=Math.min,D=Math.max,it=Math.round,nt=Math.floor,I=t=>({x:t,y:t}),Vt={left:"right",right:"left",bottom:"top",top:"bottom"},$t={start:"end",end:"start"};function at(t,e,n){return D(t,j(e,n))}function V(t,e){return typeof t=="function"?t(e):t}function $(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function dt(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes($(t))?"y":"x"}function gt(t){return dt(Q(t))}function zt(t,e,n){n===void 0&&(n=!1);const o=J(t),i=gt(t),r=mt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=rt(s)),[s,rt(s)]}function _t(t){const e=rt(t);return[ut(t),e,ut(e)]}function ut(t){return t.replace(/start|end/g,e=>$t[e])}function jt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function It(t,e,n,o){const i=J(t);let r=jt($(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ut)))),r}function rt(t){return t.replace(/left|right|bottom|top/g,e=>Vt[e])}function Yt(t){return{top:0,right:0,bottom:0,left:0,...t}}function St(t){return typeof t!="number"?Yt(t):{top:t,right:t,bottom:t,left:t}}function st(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function xt(t,e,n){let{reference:o,floating:i}=t;const r=Q(e),s=gt(e),l=mt(s),c=$(e),f=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let a;switch(c){case"top":a={x:d,y:o.y-i.height};break;case"bottom":a={x:d,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(J(e)){case"start":a[s]-=m*(n&&f?-1:1);break;case"end":a[s]+=m*(n&&f?-1:1);break}return a}const Xt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=xt(f,o,c),m=o,a={},g=0;for(let h=0;h<l.length;h++){const{name:w,fn:p}=l[h],{x,y,data:v,reset:b}=await p({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...v}},b&&g<=50&&(g++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(f=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:d,y:u}=xt(f,m,c)),h=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:a}};async function Z(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:a=0}=V(e,t),g=St(a),w=l[m?u==="floating"?"reference":"floating":u],p=st(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),x=u==="floating"?{...s.floating,x:o,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),v=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},b=st(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:y,strategy:c}):x);return{top:(p.top-b.top+g.top)/v.y,bottom:(b.bottom-p.bottom+g.bottom)/v.y,left:(p.left-b.left+g.left)/v.x,right:(b.right-p.right+g.right)/v.x}}const qt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=V(t,e)||{};if(f==null)return{};const u=St(d),m={x:n,y:o},a=gt(i),g=mt(a),h=await s.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",v=r.reference[g]+r.reference[a]-m[a]-r.floating[g],b=m[a]-r.reference[a],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let O=A?A[y]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=l.floating[y]||r.floating[g]);const T=v/2-b/2,F=O/2-h[g]/2-1,B=j(u[p],F),H=j(u[x],F),C=B,N=O-h[g]-H,L=O/2-h[g]/2+T,E=at(C,L,N),P=!c.arrow&&J(i)!=null&&L!==E&&r.reference[g]/2-(L<C?B:H)-h[g]/2<0,R=P?L<C?L-C:L-N:0;return{[a]:m[a]+R,data:{[a]:E,centerOffset:L-E-R,...P&&{alignmentOffset:R}},reset:P}}}),Ut=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=V(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=$(i),x=$(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(f.floating)),v=m||(x||!h?[rt(l)]:_t(l));!m&&g!=="none"&&v.push(...It(l,h,g,y));const b=[l,...v],A=await Z(e,w),O=[];let T=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&O.push(A[p]),u){const C=zt(i,s,y);O.push(A[C[0]],A[C[1]])}if(T=[...T,{placement:i,overflows:O}],!O.every(C=>C<=0)){var F,B;const C=(((F=r.flip)==null?void 0:F.index)||0)+1,N=b[C];if(N)return{data:{index:C,overflows:T},reset:{placement:N}};let L=(B=T.filter(E=>E.overflows[0]<=0).sort((E,P)=>E.overflows[1]-P.overflows[1])[0])==null?void 0:B.placement;if(!L)switch(a){case"bestFit":{var H;const E=(H=T.map(P=>[P.placement,P.overflows.filter(R=>R>0).reduce((R,q)=>R+q,0)]).sort((P,R)=>P[1]-R[1])[0])==null?void 0:H[0];E&&(L=E);break}case"initialPlacement":L=l;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function yt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function vt(t){return Nt.some(e=>t[e]>=0)}const Kt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=V(t,e);switch(o){case"referenceHidden":{const r=await Z(e,{...i,elementContext:"reference"}),s=yt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:vt(s)}}}case"escaped":{const r=await Z(e,{...i,altBoundary:!0}),s=yt(r,n.floating);return{data:{escapedOffsets:s,escaped:vt(s)}}}default:return{}}}}};async function Gt(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=$(n),l=J(n),c=Q(n)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=V(e,t);let{mainAxis:m,crossAxis:a,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof g=="number"&&(a=l==="end"?g*-1:g),c?{x:a*d,y:m*f}:{x:m*f,y:a*d}}const be=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Gt(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Jt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...c}=V(t,e),f={x:n,y:o},d=await Z(e,c),u=Q($(i)),m=dt(u);let a=f[m],g=f[u];if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=at(x,a,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=g+d[w],y=g-d[p];g=at(x,g,y)}const h=l.fn({...e,[m]:a,[u]:g});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Qt=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=V(t,e),d={x:n,y:o},u=Q(i),m=dt(u);let a=d[m],g=d[u];const h=V(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const y=m==="y"?"height":"width",v=r.reference[m]-r.floating[y]+w.mainAxis,b=r.reference[m]+r.reference[y]-w.mainAxis;a<v?a=v:a>b&&(a=b)}if(f){var p,x;const y=m==="y"?"width":"height",v=["top","left"].includes($(i)),b=r.reference[u]-r.floating[y]+(v&&((p=s.offset)==null?void 0:p[u])||0)+(v?0:w.crossAxis),A=r.reference[u]+r.reference[y]+(v?0:((x=s.offset)==null?void 0:x[u])||0)-(v?w.crossAxis:0);g<b?g=b:g>A&&(g=A)}return{[m]:a,[u]:g}}}},Zt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=V(t,e),c=await Z(e,l),f=$(n),d=J(n),u=Q(n)==="y",{width:m,height:a}=o.floating;let g,h;f==="top"||f==="bottom"?(g=f,h=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=f,g=d==="end"?"top":"bottom");const w=a-c[g],p=m-c[h],x=!e.middlewareData.shift;let y=w,v=p;if(u){const A=m-c.left-c.right;v=d||x?j(p,A):A}else{const A=a-c.top-c.bottom;y=d||x?j(w,A):A}if(x&&!d){const A=D(c.left,0),O=D(c.right,0),T=D(c.top,0),F=D(c.bottom,0);u?v=m-2*(A!==0||O!==0?A+O:D(c.left,c.right)):y=a-2*(T!==0||F!==0?T+F:D(c.top,c.bottom))}await s({...e,availableWidth:v,availableHeight:y});const b=await i.getDimensions(r.floating);return m!==b.width||a!==b.height?{reset:{rects:!0}}:{}}}};function Y(t){return Lt(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(Lt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Lt(t){return t instanceof Node||t instanceof M(t).Node}function z(t){return t instanceof Element||t instanceof M(t).Element}function W(t){return t instanceof HTMLElement||t instanceof M(t).HTMLElement}function bt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function te(t){return["table","td","th"].includes(Y(t))}function ht(t){const e=pt(),n=k(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ee(t){let e=G(t);for(;W(e)&&!lt(e);){if(ht(e))return e;e=G(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(Y(t))}function k(t){return M(t).getComputedStyle(t)}function ft(t){return z(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){if(Y(t)==="html")return t;const e=t.assignedSlot||t.parentNode||bt(t)&&t.host||_(t);return bt(e)?e.host:e}function Tt(t){const e=G(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&et(e)?e:Tt(e)}function tt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Tt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=M(i);return r?e.concat(s,s.visualViewport||[],et(i)?i:[],s.frameElement&&n?tt(s.frameElement):[]):e.concat(i,tt(i,[],n))}function Pt(t){const e=k(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=W(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=it(n)!==r||it(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function wt(t){return z(t)?t:t.contextElement}function K(t){const e=wt(t);if(!W(e))return I(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Pt(e);let s=(r?it(n.width):n.width)/o,l=(r?it(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ne=I(0);function Dt(t){const e=M(t);return!pt()||!e.visualViewport?ne:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function oe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==M(t)?!1:e}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=wt(t);let s=I(1);e&&(o?z(o)&&(s=K(o)):s=K(t));const l=oe(r,n,o)?Dt(r):I(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=M(r),a=o&&z(o)?M(o):o;let g=m,h=g.frameElement;for(;h&&o&&a!==g;){const w=K(h),p=h.getBoundingClientRect(),x=k(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,v=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;c*=w.x,f*=w.y,d*=w.x,u*=w.y,c+=y,f+=v,g=M(h),h=g.frameElement}}return st({width:d,height:u,x:c,y:f})}const ie=[":popover-open",":modal"];function Mt(t){return ie.some(e=>{try{return t.matches(e)}catch{return!1}})}function re(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=_(o),l=e?Mt(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},f=I(1);const d=I(0),u=W(o);if((u||!u&&!r)&&((Y(o)!=="body"||et(s))&&(c=ft(o)),W(o))){const m=X(o);f=K(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+d.x,y:n.y*f.y-c.scrollTop*f.y+d.y}}function se(t){return Array.from(t.getClientRects())}function kt(t){return X(_(t)).left+ft(t).scrollLeft}function ce(t){const e=_(t),n=ft(t),o=t.ownerDocument.body,i=D(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=D(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+kt(t);const l=-n.scrollTop;return k(o).direction==="rtl"&&(s+=D(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function le(t,e){const n=M(t),o=_(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=pt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function fe(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=W(t)?K(t):I(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=o*r.y;return{width:s,height:l,x:c,y:f}}function At(t,e,n){let o;if(e==="viewport")o=le(t,n);else if(e==="document")o=ce(_(t));else if(z(e))o=fe(e,n);else{const i=Dt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return st(o)}function Ft(t,e){const n=G(t);return n===e||!z(n)||lt(n)?!1:k(n).position==="fixed"||Ft(n,e)}function ae(t,e){const n=e.get(t);if(n)return n;let o=tt(t,[],!1).filter(l=>z(l)&&Y(l)!=="body"),i=null;const r=k(t).position==="fixed";let s=r?G(t):t;for(;z(s)&&!lt(s);){const l=k(s),c=ht(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||et(s)&&!c&&Ft(t,s))?o=o.filter(d=>d!==s):i=l,s=G(s)}return e.set(t,o),o}function ue(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ae(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,d)=>{const u=At(e,d,i);return f.top=D(u.top,f.top),f.right=j(u.right,f.right),f.bottom=j(u.bottom,f.bottom),f.left=D(u.left,f.left),f},At(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function de(t){const{width:e,height:n}=Pt(t);return{width:e,height:n}}function me(t,e,n){const o=W(e),i=_(e),r=n==="fixed",s=X(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=I(0);if(o||!o&&!r)if((Y(e)!=="body"||et(i))&&(l=ft(e)),o){const u=X(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=kt(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function Rt(t,e){return!W(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wt(t,e){const n=M(t);if(!W(t)||Mt(t))return n;let o=Rt(t,e);for(;o&&te(o)&&k(o).position==="static";)o=Rt(o,e);return o&&(Y(o)==="html"||Y(o)==="body"&&k(o).position==="static"&&!ht(o))?n:o||ee(t)||n}const ge=async function(t){const e=this.getOffsetParent||Wt,n=this.getDimensions;return{reference:me(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function he(t){return k(t).direction==="rtl"}const pe={convertOffsetParentRelativeRectToViewportRelativeRect:re,getDocumentElement:_,getClippingRect:ue,getOffsetParent:Wt,getElementRects:ge,getClientRects:se,getDimensions:de,getScale:K,isElement:z,isRTL:he};function we(t,e){let n=null,o;const i=_(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const a=nt(d),g=nt(i.clientWidth-(f+u)),h=nt(i.clientHeight-(d+m)),w=nt(f),x={rootMargin:-a+"px "+-g+"px "+-h+"px "+-w+"px",threshold:D(0,j(1,c))||1};let y=!0;function v(b){const A=b[0].intersectionRatio;if(A!==c){if(!y)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(v,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,x)}n.observe(t)}return s(!0),r}function Ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=wt(t),d=i||r?[...f?tt(f):[],...tt(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=f&&l?we(f,n):null;let m=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let g,h=c?X(t):null;c&&w();function w(){const p=X(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,g=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const Re=Jt,Oe=Ut,Ce=Zt,Ee=Kt,Ot=qt,Se=Qt,xe=(t,e,n)=>{const o=new Map,i={platform:pe,...n},r={...i.platform,_c:o};return Xt(t,e,{...i,platform:r})},Le=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Ot({element:o.current,padding:i}).fn(n):{}:o?Ot({element:o,padding:i}).fn(n):{}}}};var ot=typeof document<"u"?S.useLayoutEffect:S.useEffect;function ct(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!ct(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!ct(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Bt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Ct(t,e){const n=Bt(t);return Math.round(e*n)/n}function Et(t){const e=S.useRef(t);return ot(()=>{e.current=t}),e}function Te(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=t,[d,u]=S.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,a]=S.useState(o);ct(m,o)||a(o);const[g,h]=S.useState(null),[w,p]=S.useState(null),x=S.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),y=S.useCallback(R=>{R!==O.current&&(O.current=R,p(R))},[]),v=r||g,b=s||w,A=S.useRef(null),O=S.useRef(null),T=S.useRef(d),F=c!=null,B=Et(c),H=Et(i),C=S.useCallback(()=>{if(!A.current||!O.current)return;const R={placement:e,strategy:n,middleware:m};H.current&&(R.platform=H.current),xe(A.current,O.current,R).then(q=>{const U={...q,isPositioned:!0};N.current&&!ct(T.current,U)&&(T.current=U,Ht.flushSync(()=>{u(U)}))})},[m,e,n,H]);ot(()=>{f===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[f]);const N=S.useRef(!1);ot(()=>(N.current=!0,()=>{N.current=!1}),[]),ot(()=>{if(v&&(A.current=v),b&&(O.current=b),v&&b){if(B.current)return B.current(v,b,C);C()}},[v,b,C,B,F]);const L=S.useMemo(()=>({reference:A,floating:O,setReference:x,setFloating:y}),[x,y]),E=S.useMemo(()=>({reference:v,floating:b}),[v,b]),P=S.useMemo(()=>{const R={position:n,left:0,top:0};if(!E.floating)return R;const q=Ct(E.floating,d.x),U=Ct(E.floating,d.y);return l?{...R,transform:"translate("+q+"px, "+U+"px)",...Bt(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:q,top:U}},[n,l,E.floating,d.x,d.y]);return S.useMemo(()=>({...d,update:C,refs:L,elements:E,floatingStyles:P}),[d,C,L,E,P])}export{Ae as a,Ce as b,Le as c,Oe as f,Ee as h,Se as l,be as o,Re as s,Te as u};
