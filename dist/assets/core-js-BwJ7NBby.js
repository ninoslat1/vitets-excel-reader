var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Gg(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function a(){return this instanceof a?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(a){var n=Object.getOwnPropertyDescriptor(r,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return r[a]}})}),t}var ir=function(r){return r&&r.Math===Math&&r},O=ir(typeof globalThis=="object"&&globalThis)||ir(typeof window=="object"&&window)||ir(typeof self=="object"&&self)||ir(typeof Er=="object"&&Er)||ir(typeof Er=="object"&&Er)||function(){return this}()||Function("return this")(),pr={},b=function(r){try{return!!r()}catch{return!0}},Di=b,C=!Di(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Li=b,qr=!Li(function(){var r=(function(){}).bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Mi=qr,Ir=Function.prototype.call,T=Mi?Ir.bind(Ir):function(){return Ir.apply(Ir,arguments)},no={},oo={}.propertyIsEnumerable,io=Object.getOwnPropertyDescriptor,Ui=io&&!oo.call({1:2},1);no.f=Ui?function(e){var t=io(this,e);return!!t&&t.enumerable}:oo;var wt=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},vo=qr,co=Function.prototype,tt=co.call,Fi=vo&&co.bind.bind(tt,tt),S=vo?Fi:function(r){return function(){return tt.apply(r,arguments)}},uo=S,Bi=uo({}.toString),Gi=uo("".slice),k=function(r){return Gi(Bi(r),8,-1)},ki=S,Ki=b,Wi=k,fe=Object,Yi=ki("".split),lo=Ki(function(){return!fe("z").propertyIsEnumerable(0)})?function(r){return Wi(r)==="String"?Yi(r,""):fe(r)}:fe,K=function(r){return r==null},Vi=K,qi=TypeError,j=function(r){if(Vi(r))throw new qi("Can't call method on "+r);return r},Hi=lo,Ji=j,yr=function(r){return Hi(Ji(r))},$e=typeof document=="object"&&document.all,E=typeof $e>"u"&&$e!==void 0?function(r){return typeof r=="function"||r===$e}:function(r){return typeof r=="function"},Xi=E,N=function(r){return typeof r=="object"?r!==null:Xi(r)},de=O,zi=E,Qi=function(r){return zi(r)?r:void 0},W=function(r,e){return arguments.length<2?Qi(de[r]):de[r]&&de[r][e]},Zi=S,Hr=Zi({}.isPrototypeOf),Jr=typeof navigator<"u"&&String(navigator.userAgent)||"",so=O,pe=Jr,la=so.process,sa=so.Deno,fa=la&&la.versions||sa&&sa.version,$a=fa&&fa.v8,w,Gr;$a&&(w=$a.split("."),Gr=w[0]>0&&w[0]<4?1:+(w[0]+w[1]));!Gr&&pe&&(w=pe.match(/Edge\/(\d+)/),(!w||w[1]>=74)&&(w=pe.match(/Chrome\/(\d+)/),w&&(Gr=+w[1])));var Ct=Gr,da=Ct,rv=b,ev=O,tv=ev.String,fo=!!Object.getOwnPropertySymbols&&!rv(function(){var r=Symbol("symbol detection");return!tv(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&da&&da<41}),av=fo,$o=av&&!Symbol.sham&&typeof Symbol.iterator=="symbol",nv=W,ov=E,iv=Hr,vv=$o,cv=Object,po=vv?function(r){return typeof r=="symbol"}:function(r){var e=nv("Symbol");return ov(e)&&iv(e.prototype,cv(r))},uv=String,Xr=function(r){try{return uv(r)}catch{return"Object"}},lv=E,sv=Xr,fv=TypeError,L=function(r){if(lv(r))return r;throw new fv(sv(r)+" is not a function")},$v=L,dv=K,ar=function(r,e){var t=r[e];return dv(t)?void 0:$v(t)},ye=T,ge=E,he=N,pv=TypeError,yv=function(r,e){var t,a;if(e==="string"&&ge(t=r.toString)&&!he(a=ye(t,r))||ge(t=r.valueOf)&&!he(a=ye(t,r))||e!=="string"&&ge(t=r.toString)&&!he(a=ye(t,r)))return a;throw new pv("Can't convert object to primitive value")},yo={exports:{}},pa=O,gv=Object.defineProperty,_t=function(r,e){try{gv(pa,r,{value:e,configurable:!0,writable:!0})}catch{pa[r]=e}return e},hv=O,Ov=_t,ya="__core-js_shared__",ga=yo.exports=hv[ya]||Ov(ya,{});(ga.versions||(ga.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var xt=yo.exports,ha=xt,jt=function(r,e){return ha[r]||(ha[r]=e||{})},bv=j,Sv=Object,zr=function(r){return Sv(bv(r))},Ev=S,Iv=zr,Tv=Ev({}.hasOwnProperty),_=Object.hasOwn||function(e,t){return Tv(Iv(e),t)},Rv=S,mv=0,Pv=Math.random(),wv=Rv(1 .toString),go=function(r){return"Symbol("+(r===void 0?"":r)+")_"+wv(++mv+Pv,36)},Cv=O,_v=jt,Oa=_,xv=go,jv=fo,Nv=$o,z=Cv.Symbol,Oe=_v("wks"),Av=Nv?z.for||z:z&&z.withoutSetter||xv,I=function(r){return Oa(Oe,r)||(Oe[r]=jv&&Oa(z,r)?z[r]:Av("Symbol."+r)),Oe[r]},Dv=T,ba=N,Sa=po,Lv=ar,Mv=yv,Uv=I,Fv=TypeError,Bv=Uv("toPrimitive"),Gv=function(r,e){if(!ba(r)||Sa(r))return r;var t=Lv(r,Bv),a;if(t){if(e===void 0&&(e="default"),a=Dv(t,r,e),!ba(a)||Sa(a))return a;throw new Fv("Can't convert object to primitive value")}return e===void 0&&(e="number"),Mv(r,e)},kv=Gv,Kv=po,ho=function(r){var e=kv(r,"string");return Kv(e)?e:e+""},Wv=O,Ea=N,at=Wv.document,Yv=Ea(at)&&Ea(at.createElement),Qr=function(r){return Yv?at.createElement(r):{}},Vv=C,qv=b,Hv=Qr,Oo=!Vv&&!qv(function(){return Object.defineProperty(Hv("div"),"a",{get:function(){return 7}}).a!==7}),Jv=C,Xv=T,zv=no,Qv=wt,Zv=yr,rc=ho,ec=_,tc=Oo,Ia=Object.getOwnPropertyDescriptor;pr.f=Jv?Ia:function(e,t){if(e=Zv(e),t=rc(t),tc)try{return Ia(e,t)}catch{}if(ec(e,t))return Qv(!Xv(zv.f,e,t),e[t])};var M={},ac=C,nc=b,bo=ac&&nc(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),oc=N,ic=String,vc=TypeError,R=function(r){if(oc(r))return r;throw new vc(ic(r)+" is not an object")},cc=C,uc=Oo,lc=bo,Tr=R,Ta=ho,sc=TypeError,be=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,Se="enumerable",Ee="configurable",Ie="writable";M.f=cc?lc?function(e,t,a){if(Tr(e),t=Ta(t),Tr(a),typeof e=="function"&&t==="prototype"&&"value"in a&&Ie in a&&!a[Ie]){var n=fc(e,t);n&&n[Ie]&&(e[t]=a.value,a={configurable:Ee in a?a[Ee]:n[Ee],enumerable:Se in a?a[Se]:n[Se],writable:!1})}return be(e,t,a)}:be:function(e,t,a){if(Tr(e),t=Ta(t),Tr(a),uc)try{return be(e,t,a)}catch{}if("get"in a||"set"in a)throw new sc("Accessors not supported");return"value"in a&&(e[t]=a.value),e};var $c=C,dc=M,pc=wt,gr=$c?function(r,e,t){return dc.f(r,e,pc(1,t))}:function(r,e,t){return r[e]=t,r},So={exports:{}},nt=C,yc=_,Eo=Function.prototype,gc=nt&&Object.getOwnPropertyDescriptor,Nt=yc(Eo,"name"),hc=Nt&&(function(){}).name==="something",Oc=Nt&&(!nt||nt&&gc(Eo,"name").configurable),Zr={EXISTS:Nt,PROPER:hc,CONFIGURABLE:Oc},bc=S,Sc=E,ot=xt,Ec=bc(Function.toString);Sc(ot.inspectSource)||(ot.inspectSource=function(r){return Ec(r)});var At=ot.inspectSource,Ic=O,Tc=E,Ra=Ic.WeakMap,Rc=Tc(Ra)&&/native code/.test(String(Ra)),mc=jt,Pc=go,ma=mc("keys"),Dt=function(r){return ma[r]||(ma[r]=Pc(r))},Lt={},wc=Rc,Io=O,Cc=N,_c=gr,Te=_,Re=xt,xc=Dt,jc=Lt,Pa="Object already initialized",it=Io.TypeError,Nc=Io.WeakMap,kr,$r,Kr,Ac=function(r){return Kr(r)?$r(r):kr(r,{})},Dc=function(r){return function(e){var t;if(!Cc(e)||(t=$r(e)).type!==r)throw new it("Incompatible receiver, "+r+" required");return t}};if(wc||Re.state){var x=Re.state||(Re.state=new Nc);x.get=x.get,x.has=x.has,x.set=x.set,kr=function(r,e){if(x.has(r))throw new it(Pa);return e.facade=r,x.set(r,e),e},$r=function(r){return x.get(r)||{}},Kr=function(r){return x.has(r)}}else{var V=xc("state");jc[V]=!0,kr=function(r,e){if(Te(r,V))throw new it(Pa);return e.facade=r,_c(r,V,e),e},$r=function(r){return Te(r,V)?r[V]:{}},Kr=function(r){return Te(r,V)}}var re={set:kr,get:$r,has:Kr,enforce:Ac,getterFor:Dc},Mt=S,Lc=b,Mc=E,Rr=_,vt=C,Uc=Zr.CONFIGURABLE,Fc=At,To=re,Bc=To.enforce,Gc=To.get,wa=String,Lr=Object.defineProperty,kc=Mt("".slice),Kc=Mt("".replace),Wc=Mt([].join),Yc=vt&&!Lc(function(){return Lr(function(){},"length",{value:8}).length!==8}),Vc=String(String).split("String"),qc=So.exports=function(r,e,t){kc(wa(e),0,7)==="Symbol("&&(e="["+Kc(wa(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Rr(r,"name")||Uc&&r.name!==e)&&(vt?Lr(r,"name",{value:e,configurable:!0}):r.name=e),Yc&&t&&Rr(t,"arity")&&r.length!==t.arity&&Lr(r,"length",{value:t.arity});try{t&&Rr(t,"constructor")&&t.constructor?vt&&Lr(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var a=Bc(r);return Rr(a,"source")||(a.source=Wc(Vc,typeof e=="string"?e:"")),r};Function.prototype.toString=qc(function(){return Mc(this)&&Gc(this).source||Fc(this)},"toString");var Ro=So.exports,Hc=E,Jc=M,Xc=Ro,zc=_t,Y=function(r,e,t,a){a||(a={});var n=a.enumerable,o=a.name!==void 0?a.name:e;if(Hc(t)&&Xc(t,o,a),a.global)n?r[e]=t:zc(e,t);else{try{a.unsafe?r[e]&&(n=!0):delete r[e]}catch{}n?r[e]=t:Jc.f(r,e,{value:t,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return r},mo={},Qc=Math.ceil,Zc=Math.floor,ru=Math.trunc||function(e){var t=+e;return(t>0?Zc:Qc)(t)},eu=ru,ee=function(r){var e=+r;return e!==e||e===0?0:eu(e)},tu=ee,au=Math.max,nu=Math.min,ou=function(r,e){var t=tu(r);return t<0?au(t+e,0):nu(t,e)},iu=ee,vu=Math.min,nr=function(r){var e=iu(r);return e>0?vu(e,9007199254740991):0},cu=nr,Ut=function(r){return cu(r.length)},uu=yr,lu=ou,su=Ut,Ca=function(r){return function(e,t,a){var n=uu(e),o=su(n);if(o===0)return!r&&-1;var i=lu(a,o),v;if(r&&t!==t){for(;o>i;)if(v=n[i++],v!==v)return!0}else for(;o>i;i++)if((r||i in n)&&n[i]===t)return r||i||0;return!r&&-1}},Po={includes:Ca(!0),indexOf:Ca(!1)},fu=S,me=_,$u=yr,du=Po.indexOf,pu=Lt,_a=fu([].push),wo=function(r,e){var t=$u(r),a=0,n=[],o;for(o in t)!me(pu,o)&&me(t,o)&&_a(n,o);for(;e.length>a;)me(t,o=e[a++])&&(~du(n,o)||_a(n,o));return n},Ft=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],yu=wo,gu=Ft,hu=gu.concat("length","prototype");mo.f=Object.getOwnPropertyNames||function(e){return yu(e,hu)};var Co={};Co.f=Object.getOwnPropertySymbols;var Ou=W,bu=S,Su=mo,Eu=Co,Iu=R,Tu=bu([].concat),Ru=Ou("Reflect","ownKeys")||function(e){var t=Su.f(Iu(e)),a=Eu.f;return a?Tu(t,a(e)):t},xa=_,mu=Ru,Pu=pr,wu=M,Cu=function(r,e,t){for(var a=mu(e),n=wu.f,o=Pu.f,i=0;i<a.length;i++){var v=a[i];!xa(r,v)&&!(t&&xa(t,v))&&n(r,v,o(e,v))}},_u=b,xu=E,ju=/#|\.prototype\./,hr=function(r,e){var t=Au[Nu(r)];return t===Lu?!0:t===Du?!1:xu(e)?_u(e):!!e},Nu=hr.normalize=function(r){return String(r).replace(ju,".").toLowerCase()},Au=hr.data={},Du=hr.NATIVE="N",Lu=hr.POLYFILL="P",_o=hr,mr=O,Mu=pr.f,Uu=gr,Fu=Y,Bu=_t,Gu=Cu,ku=_o,m=function(r,e){var t=r.target,a=r.global,n=r.stat,o,i,v,l,c,u;if(a?i=mr:n?i=mr[t]||Bu(t,{}):i=mr[t]&&mr[t].prototype,i)for(v in e){if(c=e[v],r.dontCallGetSet?(u=Mu(i,v),l=u&&u.value):l=i[v],o=ku(a?v:t+(n?".":"#")+v,r.forced),!o&&l!==void 0){if(typeof c==typeof l)continue;Gu(c,l)}(r.sham||l&&l.sham)&&Uu(c,"sham",!0),Fu(i,v,c,r)}},Ku=O,Wu=k,Or=Wu(Ku.process)==="process",Yu=S,Vu=L,qu=function(r,e,t){try{return Yu(Vu(Object.getOwnPropertyDescriptor(r,e)[t]))}catch{}},Hu=N,Ju=function(r){return Hu(r)||r===null},Xu=Ju,zu=String,Qu=TypeError,Zu=function(r){if(Xu(r))return r;throw new Qu("Can't set "+zu(r)+" as a prototype")},rl=qu,el=R,tl=Zu,xo=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=rl(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch{}return function(n,o){return el(n),tl(o),r?t(n,o):n.__proto__=o,n}}():void 0),al=M.f,nl=_,ol=I,ja=ol("toStringTag"),te=function(r,e,t){r&&!t&&(r=r.prototype),r&&!nl(r,ja)&&al(r,ja,{configurable:!0,value:e})},Na=Ro,il=M,vl=function(r,e,t){return t.get&&Na(t.get,e,{getter:!0}),t.set&&Na(t.set,e,{setter:!0}),il.f(r,e,t)},cl=W,ul=vl,ll=I,sl=C,Aa=ll("species"),fl=function(r){var e=cl(r);sl&&e&&!e[Aa]&&ul(e,Aa,{configurable:!0,get:function(){return this}})},$l=Hr,dl=TypeError,pl=function(r,e){if($l(e,r))return r;throw new dl("Incorrect invocation")},yl=I,gl=yl("toStringTag"),jo={};jo[gl]="z";var hl=String(jo)==="[object z]",Ol=hl,bl=E,Mr=k,Sl=I,El=Sl("toStringTag"),Il=Object,Tl=Mr(function(){return arguments}())==="Arguments",Rl=function(r,e){try{return r[e]}catch{}},Bt=Ol?Mr:function(r){var e,t,a;return r===void 0?"Undefined":r===null?"Null":typeof(t=Rl(e=Il(r),El))=="string"?t:Tl?Mr(e):(a=Mr(e))==="Object"&&bl(e.callee)?"Arguments":a},ml=S,Pl=b,No=E,wl=Bt,Cl=W,_l=At,Ao=function(){},Do=Cl("Reflect","construct"),Gt=/^\s*(?:class|function)\b/,xl=ml(Gt.exec),jl=!Gt.test(Ao),vr=function(e){if(!No(e))return!1;try{return Do(Ao,[],e),!0}catch{return!1}},Lo=function(e){if(!No(e))return!1;switch(wl(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return jl||!!xl(Gt,_l(e))}catch{return!0}};Lo.sham=!0;var Nl=!Do||Pl(function(){var r;return vr(vr.call)||!vr(Object)||!vr(function(){r=!0})||r})?Lo:vr,Al=Nl,Dl=Xr,Ll=TypeError,Ml=function(r){if(Al(r))return r;throw new Ll(Dl(r)+" is not a constructor")},Da=R,Ul=Ml,Fl=K,Bl=I,Gl=Bl("species"),Mo=function(r,e){var t=Da(r).constructor,a;return t===void 0||Fl(a=Da(t)[Gl])?e:Ul(a)},kl=qr,Uo=Function.prototype,La=Uo.apply,Ma=Uo.call,Fo=typeof Reflect=="object"&&Reflect.apply||(kl?Ma.bind(La):function(){return Ma.apply(La,arguments)}),Kl=k,Wl=S,ae=function(r){if(Kl(r)==="Function")return Wl(r)},Ua=ae,Yl=L,Vl=qr,ql=Ua(Ua.bind),kt=function(r,e){return Yl(r),e===void 0?r:Vl?ql(r,e):function(){return r.apply(e,arguments)}},Hl=W,Bo=Hl("document","documentElement"),Jl=S,Xl=Jl([].slice),zl=TypeError,Ql=function(r,e){if(r<e)throw new zl("Not enough arguments");return r},Zl=Jr,Go=/(?:ipad|iphone|ipod).*applewebkit/i.test(Zl),P=O,rs=Fo,es=kt,Fa=E,ts=_,ko=b,Ba=Bo,as=Xl,Ga=Qr,ns=Ql,os=Go,is=Or,ct=P.setImmediate,ut=P.clearImmediate,vs=P.process,Pe=P.Dispatch,cs=P.Function,ka=P.MessageChannel,us=P.String,we=0,sr={},Ka="onreadystatechange",dr,F,Ce,_e;ko(function(){dr=P.location});var Kt=function(r){if(ts(sr,r)){var e=sr[r];delete sr[r],e()}},xe=function(r){return function(){Kt(r)}},Wa=function(r){Kt(r.data)},Ya=function(r){P.postMessage(us(r),dr.protocol+"//"+dr.host)};(!ct||!ut)&&(ct=function(e){ns(arguments.length,1);var t=Fa(e)?e:cs(e),a=as(arguments,1);return sr[++we]=function(){rs(t,void 0,a)},F(we),we},ut=function(e){delete sr[e]},is?F=function(r){vs.nextTick(xe(r))}:Pe&&Pe.now?F=function(r){Pe.now(xe(r))}:ka&&!os?(Ce=new ka,_e=Ce.port2,Ce.port1.onmessage=Wa,F=es(_e.postMessage,_e)):P.addEventListener&&Fa(P.postMessage)&&!P.importScripts&&dr&&dr.protocol!=="file:"&&!ko(Ya)?(F=Ya,P.addEventListener("message",Wa,!1)):Ka in Ga("script")?F=function(r){Ba.appendChild(Ga("script"))[Ka]=function(){Ba.removeChild(this),Kt(r)}}:F=function(r){setTimeout(xe(r),0)});var Ko={set:ct,clear:ut},Va=O,ls=C,ss=Object.getOwnPropertyDescriptor,fs=function(r){if(!ls)return Va[r];var e=ss(Va,r);return e&&e.value},Wo=function(){this.head=null,this.tail=null};Wo.prototype={add:function(r){var e={item:r,next:null},t=this.tail;t?t.next=e:this.head=e,this.tail=e},get:function(){var r=this.head;if(r){var e=this.head=r.next;return e===null&&(this.tail=null),r.item}}};var Yo=Wo,$s=Jr,ds=/ipad|iphone|ipod/i.test($s)&&typeof Pebble<"u",ps=Jr,ys=/web0s(?!.*chrome)/i.test(ps),er=O,gs=fs,qa=kt,je=Ko.set,hs=Yo,Os=Go,bs=ds,Ss=ys,Ne=Or,Ha=er.MutationObserver||er.WebKitMutationObserver,Ja=er.document,Xa=er.process,Pr=er.Promise,lt=gs("queueMicrotask"),q,Ae,De,wr,za;if(!lt){var Cr=new hs,_r=function(){var r,e;for(Ne&&(r=Xa.domain)&&r.exit();e=Cr.get();)try{e()}catch(t){throw Cr.head&&q(),t}r&&r.enter()};!Os&&!Ne&&!Ss&&Ha&&Ja?(Ae=!0,De=Ja.createTextNode(""),new Ha(_r).observe(De,{characterData:!0}),q=function(){De.data=Ae=!Ae}):!bs&&Pr&&Pr.resolve?(wr=Pr.resolve(void 0),wr.constructor=Pr,za=qa(wr.then,wr),q=function(){za(_r)}):Ne?q=function(){Xa.nextTick(_r)}:(je=qa(je,er),q=function(){je(_r)}),lt=function(r){Cr.head||q(),Cr.add(r)}}var Es=lt,Is=function(r,e){try{arguments.length===1?console.error(r):console.error(r,e)}catch{}},Wt=function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},Ts=O,ne=Ts.Promise,Vo=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",Rs=Vo,ms=Or,Ps=!Rs&&!ms&&typeof window=="object"&&typeof document=="object",ws=O,fr=ne,Cs=E,_s=_o,xs=At,js=I,Ns=Ps,As=Vo,Le=Ct;fr&&fr.prototype;var Ds=js("species"),st=!1,qo=Cs(ws.PromiseRejectionEvent),Ls=_s("Promise",function(){var r=xs(fr),e=r!==String(fr);if(!e&&Le===66)return!0;if(!Le||Le<51||!/native code/.test(r)){var t=new fr(function(o){o(1)}),a=function(o){o(function(){},function(){})},n=t.constructor={};if(n[Ds]=a,st=t.then(function(){})instanceof a,!st)return!0}return!e&&(Ns||As)&&!qo}),br={CONSTRUCTOR:Ls,REJECTION_EVENT:qo,SUBCLASSING:st},or={},Qa=L,Ms=TypeError,Us=function(r){var e,t;this.promise=new r(function(a,n){if(e!==void 0||t!==void 0)throw new Ms("Bad Promise constructor");e=a,t=n}),this.resolve=Qa(e),this.reject=Qa(t)};or.f=function(r){return new Us(r)};var Fs=m,Wr=Or,U=O,tr=T,Za=Y,rn=xo,Bs=te,Gs=fl,ks=L,Ur=E,Ks=N,Ws=pl,Ys=Mo,Ho=Ko.set,Yt=Es,Vs=Is,qs=Wt,Hs=Yo,Jo=re,Yr=ne,Vt=br,Xo=or,oe="Promise",zo=Vt.CONSTRUCTOR,Js=Vt.REJECTION_EVENT,Xs=Vt.SUBCLASSING,Me=Jo.getterFor(oe),zs=Jo.set,X=Yr&&Yr.prototype,B=Yr,xr=X,Qo=U.TypeError,ft=U.document,qt=U.process,$t=Xo.f,Qs=$t,Zs=!!(ft&&ft.createEvent&&U.dispatchEvent),Zo="unhandledrejection",rf="rejectionhandled",en=0,ri=1,ef=2,Ht=1,ei=2,jr,tn,tf,an,ti=function(r){var e;return Ks(r)&&Ur(e=r.then)?e:!1},ai=function(r,e){var t=e.value,a=e.state===ri,n=a?r.ok:r.fail,o=r.resolve,i=r.reject,v=r.domain,l,c,u;try{n?(a||(e.rejection===ei&&nf(e),e.rejection=Ht),n===!0?l=t:(v&&v.enter(),l=n(t),v&&(v.exit(),u=!0)),l===r.promise?i(new Qo("Promise-chain cycle")):(c=ti(l))?tr(c,l,o,i):o(l)):i(t)}catch(f){v&&!u&&v.exit(),i(f)}},ni=function(r,e){r.notified||(r.notified=!0,Yt(function(){for(var t=r.reactions,a;a=t.get();)ai(a,r);r.notified=!1,e&&!r.rejection&&af(r)}))},oi=function(r,e,t){var a,n;Zs?(a=ft.createEvent("Event"),a.promise=e,a.reason=t,a.initEvent(r,!1,!0),U.dispatchEvent(a)):a={promise:e,reason:t},!Js&&(n=U["on"+r])?n(a):r===Zo&&Vs("Unhandled promise rejection",t)},af=function(r){tr(Ho,U,function(){var e=r.facade,t=r.value,a=nn(r),n;if(a&&(n=qs(function(){Wr?qt.emit("unhandledRejection",t,e):oi(Zo,e,t)}),r.rejection=Wr||nn(r)?ei:Ht,n.error))throw n.value})},nn=function(r){return r.rejection!==Ht&&!r.parent},nf=function(r){tr(Ho,U,function(){var e=r.facade;Wr?qt.emit("rejectionHandled",e):oi(rf,e,r.value)})},Q=function(r,e,t){return function(a){r(e,a,t)}},rr=function(r,e,t){r.done||(r.done=!0,t&&(r=t),r.value=e,r.state=ef,ni(r,!0))},dt=function(r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(r.facade===e)throw new Qo("Promise can't be resolved itself");var a=ti(e);a?Yt(function(){var n={done:!1};try{tr(a,e,Q(dt,n,r),Q(rr,n,r))}catch(o){rr(n,o,r)}}):(r.value=e,r.state=ri,ni(r,!1))}catch(n){rr({done:!1},n,r)}}};if(zo&&(B=function(e){Ws(this,xr),ks(e),tr(jr,this);var t=Me(this);try{e(Q(dt,t),Q(rr,t))}catch(a){rr(t,a)}},xr=B.prototype,jr=function(e){zs(this,{type:oe,done:!1,notified:!1,parent:!1,reactions:new Hs,rejection:!1,state:en,value:void 0})},jr.prototype=Za(xr,"then",function(e,t){var a=Me(this),n=$t(Ys(this,B));return a.parent=!0,n.ok=Ur(e)?e:!0,n.fail=Ur(t)&&t,n.domain=Wr?qt.domain:void 0,a.state===en?a.reactions.add(n):Yt(function(){ai(n,a)}),n.promise}),tn=function(){var r=new jr,e=Me(r);this.promise=r,this.resolve=Q(dt,e),this.reject=Q(rr,e)},Xo.f=$t=function(r){return r===B||r===tf?new tn(r):Qs(r)},Ur(Yr)&&X!==Object.prototype)){an=X.then,Xs||Za(X,"then",function(e,t){var a=this;return new B(function(n,o){tr(an,a,n,o)}).then(e,t)},{unsafe:!0});try{delete X.constructor}catch{}rn&&rn(X,xr)}Fs({global:!0,constructor:!0,wrap:!0,forced:zo},{Promise:B});Bs(B,oe,!1);Gs(oe);var Sr={},of=I,vf=Sr,cf=of("iterator"),uf=Array.prototype,lf=function(r){return r!==void 0&&(vf.Array===r||uf[cf]===r)},sf=Bt,on=ar,ff=K,$f=Sr,df=I,pf=df("iterator"),ii=function(r){if(!ff(r))return on(r,pf)||on(r,"@@iterator")||$f[sf(r)]},yf=T,gf=L,hf=R,Of=Xr,bf=ii,Sf=TypeError,Ef=function(r,e){var t=arguments.length<2?bf(r):e;if(gf(t))return hf(yf(t,r));throw new Sf(Of(r)+" is not iterable")},If=T,vn=R,Tf=ar,Rf=function(r,e,t){var a,n;vn(r);try{if(a=Tf(r,"return"),!a){if(e==="throw")throw t;return t}a=If(a,r)}catch(o){n=!0,a=o}if(e==="throw")throw t;if(n)throw a;return vn(a),t},mf=kt,Pf=T,wf=R,Cf=Xr,_f=lf,xf=Ut,cn=Hr,jf=Ef,Nf=ii,un=Rf,Af=TypeError,Fr=function(r,e){this.stopped=r,this.result=e},ln=Fr.prototype,vi=function(r,e,t){var a=t&&t.that,n=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),i=!!(t&&t.IS_ITERATOR),v=!!(t&&t.INTERRUPTED),l=mf(e,a),c,u,f,$,s,d,p,g=function(y){return c&&un(c,"normal",y),new Fr(!0,y)},h=function(y){return n?(wf(y),v?l(y[0],y[1],g):l(y[0],y[1])):v?l(y,g):l(y)};if(o)c=r.iterator;else if(i)c=r;else{if(u=Nf(r),!u)throw new Af(Cf(r)+" is not iterable");if(_f(u)){for(f=0,$=xf(r);$>f;f++)if(s=h(r[f]),s&&cn(ln,s))return s;return new Fr(!1)}c=jf(r,u)}for(d=o?r.next:c.next;!(p=Pf(d,c)).done;){try{s=h(p.value)}catch(y){un(c,"throw",y)}if(typeof s=="object"&&s&&cn(ln,s))return s}return new Fr(!1)},Df=I,ci=Df("iterator"),ui=!1;try{var Lf=0,sn={next:function(){return{done:!!Lf++}},return:function(){ui=!0}};sn[ci]=function(){return this},Array.from(sn,function(){throw 2})}catch{}var Mf=function(r,e){try{if(!e&&!ui)return!1}catch{return!1}var t=!1;try{var a={};a[ci]=function(){return{next:function(){return{done:t=!0}}}},r(a)}catch{}return t},Uf=ne,Ff=Mf,Bf=br.CONSTRUCTOR,li=Bf||!Ff(function(r){Uf.all(r).then(void 0,function(){})}),Gf=m,kf=T,Kf=L,Wf=or,Yf=Wt,Vf=vi,qf=li;Gf({target:"Promise",stat:!0,forced:qf},{all:function(e){var t=this,a=Wf.f(t),n=a.resolve,o=a.reject,i=Yf(function(){var v=Kf(t.resolve),l=[],c=0,u=1;Vf(e,function(f){var $=c++,s=!1;u++,kf(v,t,f).then(function(d){s||(s=!0,l[$]=d,--u||n(l))},o)}),--u||n(l)});return i.error&&o(i.value),a.promise}});var Hf=m,Jf=br.CONSTRUCTOR,pt=ne,Xf=W,zf=E,Qf=Y,fn=pt&&pt.prototype;Hf({target:"Promise",proto:!0,forced:Jf,real:!0},{catch:function(r){return this.then(void 0,r)}});if(zf(pt)){var $n=Xf("Promise").prototype.catch;fn.catch!==$n&&Qf(fn,"catch",$n,{unsafe:!0})}var Zf=m,r$=T,e$=L,t$=or,a$=Wt,n$=vi,o$=li;Zf({target:"Promise",stat:!0,forced:o$},{race:function(e){var t=this,a=t$.f(t),n=a.reject,o=a$(function(){var i=e$(t.resolve);n$(e,function(v){r$(i,t,v).then(a.resolve,n)})});return o.error&&n(o.value),a.promise}});var i$=m,v$=or,c$=br.CONSTRUCTOR;i$({target:"Promise",stat:!0,forced:c$},{reject:function(e){var t=v$.f(this),a=t.reject;return a(e),t.promise}});var u$=R,l$=N,s$=or,f$=function(r,e){if(u$(r),l$(e)&&e.constructor===r)return e;var t=s$.f(r),a=t.resolve;return a(e),t.promise},$$=m,d$=W,p$=br.CONSTRUCTOR,y$=f$;d$("Promise");$$({target:"Promise",stat:!0,forced:p$},{resolve:function(e){return y$(this,e)}});var g$=Bt,h$=String,A=function(r){if(g$(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return h$(r)},O$=R,si=function(){var r=O$(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},Jt=b,b$=O,Xt=b$.RegExp,zt=Jt(function(){var r=Xt("a","y");return r.lastIndex=2,r.exec("abcd")!==null}),S$=zt||Jt(function(){return!Xt("a","y").sticky}),E$=zt||Jt(function(){var r=Xt("^r","gy");return r.lastIndex=2,r.exec("str")!==null}),fi={BROKEN_CARET:E$,MISSED_STICKY:S$,UNSUPPORTED_Y:zt},$i={},I$=wo,T$=Ft,R$=Object.keys||function(e){return I$(e,T$)},m$=C,P$=bo,w$=M,C$=R,_$=yr,x$=R$;$i.f=m$&&!P$?Object.defineProperties:function(e,t){C$(e);for(var a=_$(t),n=x$(t),o=n.length,i=0,v;o>i;)w$.f(e,v=n[i++],a[v]);return e};var j$=R,N$=$i,dn=Ft,A$=Lt,D$=Bo,L$=Qr,M$=Dt,pn=">",yn="<",yt="prototype",gt="script",di=M$("IE_PROTO"),Ue=function(){},pi=function(r){return yn+gt+pn+r+yn+"/"+gt+pn},gn=function(r){r.write(pi("")),r.close();var e=r.parentWindow.Object;return r=null,e},U$=function(){var r=L$("iframe"),e="java"+gt+":",t;return r.style.display="none",D$.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(pi("document.F=Object")),t.close(),t.F},Nr,Br=function(){try{Nr=new ActiveXObject("htmlfile")}catch{}Br=typeof document<"u"?document.domain&&Nr?gn(Nr):U$():gn(Nr);for(var r=dn.length;r--;)delete Br[yt][dn[r]];return Br()};A$[di]=!0;var Qt=Object.create||function(e,t){var a;return e!==null?(Ue[yt]=j$(e),a=new Ue,Ue[yt]=null,a[di]=e):a=Br(),t===void 0?a:N$.f(a,t)},F$=b,B$=O,G$=B$.RegExp,k$=F$(function(){var r=G$(".","s");return!(r.dotAll&&r.test(`
`)&&r.flags==="s")}),K$=b,W$=O,Y$=W$.RegExp,V$=K$(function(){var r=Y$("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),Z=T,ie=S,q$=A,H$=si,J$=fi,X$=jt,z$=Qt,Q$=re.get,Z$=k$,rd=V$,ed=X$("native-string-replace",String.prototype.replace),Vr=RegExp.prototype.exec,ht=Vr,td=ie("".charAt),ad=ie("".indexOf),nd=ie("".replace),Fe=ie("".slice),Ot=function(){var r=/a/,e=/b*/g;return Z(Vr,r,"a"),Z(Vr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),yi=J$.BROKEN_CARET,bt=/()??/.exec("")[1]!==void 0,od=Ot||bt||yi||Z$||rd;od&&(ht=function(e){var t=this,a=Q$(t),n=q$(e),o=a.raw,i,v,l,c,u,f,$;if(o)return o.lastIndex=t.lastIndex,i=Z(ht,o,n),t.lastIndex=o.lastIndex,i;var s=a.groups,d=yi&&t.sticky,p=Z(H$,t),g=t.source,h=0,y=n;if(d&&(p=nd(p,"y",""),ad(p,"g")===-1&&(p+="g"),y=Fe(n,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&td(n,t.lastIndex-1)!==`
`)&&(g="(?: "+g+")",y=" "+y,h++),v=new RegExp("^(?:"+g+")",p)),bt&&(v=new RegExp("^"+g+"$(?!\\s)",p)),Ot&&(l=t.lastIndex),c=Z(Vr,d?v:t,y),d?c?(c.input=Fe(c.input,h),c[0]=Fe(c[0],h),c.index=t.lastIndex,t.lastIndex+=c[0].length):t.lastIndex=0:Ot&&c&&(t.lastIndex=t.global?c.index+c[0].length:l),bt&&c&&c.length>1&&Z(ed,c[0],v,function(){for(u=1;u<arguments.length-2;u++)arguments[u]===void 0&&(c[u]=void 0)}),c&&s)for(c.groups=f=z$(null),u=0;u<s.length;u++)$=s[u],f[$[0]]=c[$[1]];return c});var Zt=ht,id=m,hn=Zt;id({target:"RegExp",proto:!0,forced:/./.exec!==hn},{exec:hn});var On=T,bn=Y,vd=Zt,Sn=b,gi=I,cd=gr,ud=gi("species"),Be=RegExp.prototype,ra=function(r,e,t,a){var n=gi(r),o=!Sn(function(){var c={};return c[n]=function(){return 7},""[r](c)!==7}),i=o&&!Sn(function(){var c=!1,u=/a/;return r==="split"&&(u={},u.constructor={},u.constructor[ud]=function(){return u},u.flags="",u[n]=/./[n]),u.exec=function(){return c=!0,null},u[n](""),!c});if(!o||!i||t){var v=/./[n],l=e(n,""[r],function(c,u,f,$,s){var d=u.exec;return d===vd||d===Be.exec?o&&!s?{done:!0,value:On(v,u,f,$)}:{done:!0,value:On(c,f,u,$)}:{done:!1}});bn(String.prototype,r,l[0]),bn(Be,n,l[1])}a&&cd(Be[n],"sham",!0)},ea=S,ld=ee,sd=A,fd=j,$d=ea("".charAt),En=ea("".charCodeAt),dd=ea("".slice),In=function(r){return function(e,t){var a=sd(fd(e)),n=ld(t),o=a.length,i,v;return n<0||n>=o?r?"":void 0:(i=En(a,n),i<55296||i>56319||n+1===o||(v=En(a,n+1))<56320||v>57343?r?$d(a,n):i:r?dd(a,n,n+2):(i-55296<<10)+(v-56320)+65536)}},pd={codeAt:In(!1),charAt:In(!0)},yd=pd.charAt,ta=function(r,e,t){return e+(t?yd(r,e).length:1)},Tn=T,gd=R,hd=E,Od=k,bd=Zt,Sd=TypeError,aa=function(r,e){var t=r.exec;if(hd(t)){var a=Tn(t,r,e);return a!==null&&gd(a),a}if(Od(r)==="RegExp")return Tn(bd,r,e);throw new Sd("RegExp#exec called on incompatible receiver")},Ed=T,Id=ra,Td=R,Rd=K,md=nr,Ge=A,Pd=j,wd=ar,Cd=ta,Rn=aa;Id("match",function(r,e,t){return[function(n){var o=Pd(this),i=Rd(n)?void 0:wd(n,r);return i?Ed(i,n,o):new RegExp(n)[r](Ge(o))},function(a){var n=Td(this),o=Ge(a),i=t(e,n,o);if(i.done)return i.value;if(!n.global)return Rn(n,o);var v=n.unicode;n.lastIndex=0;for(var l=[],c=0,u;(u=Rn(n,o))!==null;){var f=Ge(u[0]);l[c]=f,f===""&&(n.lastIndex=Cd(o,md(n.lastIndex),v)),c++}return c===0?null:l}]});var na=S,_d=zr,xd=Math.floor,ke=na("".charAt),jd=na("".replace),Ke=na("".slice),Nd=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Ad=/\$([$&'`]|\d{1,2})/g,Dd=function(r,e,t,a,n,o){var i=t+r.length,v=a.length,l=Ad;return n!==void 0&&(n=_d(n),l=Nd),jd(o,l,function(c,u){var f;switch(ke(u,0)){case"$":return"$";case"&":return r;case"`":return Ke(e,0,t);case"'":return Ke(e,i);case"<":f=n[Ke(u,1,-1)];break;default:var $=+u;if($===0)return c;if($>v){var s=xd($/10);return s===0?c:s<=v?a[s-1]===void 0?ke(u,1):a[s-1]+ke(u,1):c}f=a[$-1]}return f===void 0?"":f})},Ld=Fo,mn=T,ve=S,Md=ra,Ud=b,Fd=R,Bd=E,Gd=K,kd=ee,Kd=nr,H=A,Wd=j,Yd=ta,Vd=ar,qd=Dd,Hd=aa,Jd=I,St=Jd("replace"),Xd=Math.max,zd=Math.min,Qd=ve([].concat),We=ve([].push),Pn=ve("".indexOf),wn=ve("".slice),Zd=function(r){return r===void 0?r:String(r)},rp=function(){return"a".replace(/./,"$0")==="$0"}(),Cn=function(){return/./[St]?/./[St]("a","$0")==="":!1}(),ep=!Ud(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Md("replace",function(r,e,t){var a=Cn?"$":"$0";return[function(o,i){var v=Wd(this),l=Gd(o)?void 0:Vd(o,St);return l?mn(l,o,v,i):mn(e,H(v),o,i)},function(n,o){var i=Fd(this),v=H(n);if(typeof o=="string"&&Pn(o,a)===-1&&Pn(o,"$<")===-1){var l=t(e,i,v,o);if(l.done)return l.value}var c=Bd(o);c||(o=H(o));var u=i.global,f;u&&(f=i.unicode,i.lastIndex=0);for(var $=[],s;s=Hd(i,v),!(s===null||(We($,s),!u));){var d=H(s[0]);d===""&&(i.lastIndex=Yd(v,Kd(i.lastIndex),f))}for(var p="",g=0,h=0;h<$.length;h++){s=$[h];for(var y=H(s[0]),D=Xd(zd(kd(s.index),v.length),0),ce=[],ue,le=1;le<s.length;le++)We(ce,Zd(s[le]));var se=s.groups;if(c){var ua=Qd([y],ce,D,v);se!==void 0&&We(ua,se),ue=H(Ld(o,void 0,ua))}else ue=qd(y,v,D,ce,se,o);D>=g&&(p+=wn(v,g,D)+ue,g=D+y.length)}return p+wn(v,g)}]},!ep||!rp||Cn);var tp=N,ap=k,np=I,op=np("match"),ip=function(r){var e;return tp(r)&&((e=r[op])!==void 0?!!e:ap(r)==="RegExp")},vp=ip,cp=TypeError,oa=function(r){if(vp(r))throw new cp("The method doesn't accept regular expressions");return r},up=I,lp=up("match"),ia=function(r){var e=/./;try{"/./"[r](e)}catch{try{return e[lp]=!1,"/./"[r](e)}catch{}}return!1},sp=m,fp=ae,$p=pr.f,dp=nr,_n=A,pp=oa,yp=j,gp=ia,hp=fp("".slice),Op=Math.min,hi=gp("startsWith"),bp=!hi&&!!function(){var r=$p(String.prototype,"startsWith");return r&&!r.writable}();sp({target:"String",proto:!0,forced:!bp&&!hi},{startsWith:function(e){var t=_n(yp(this));pp(e);var a=dp(Op(arguments.length>1?arguments[1]:void 0,t.length)),n=_n(e);return hp(t,a,a+n.length)===n}});var Sp=I,Ep=Qt,Ip=M.f,Et=Sp("unscopables"),It=Array.prototype;It[Et]===void 0&&Ip(It,Et,{configurable:!0,value:Ep(null)});var Tp=function(r){It[Et][r]=!0},Rp=b,mp=!Rp(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),Pp=_,wp=E,Cp=zr,_p=Dt,xp=mp,xn=_p("IE_PROTO"),Tt=Object,jp=Tt.prototype,Oi=xp?Tt.getPrototypeOf:function(r){var e=Cp(r);if(Pp(e,xn))return e[xn];var t=e.constructor;return wp(t)&&e instanceof t?t.prototype:e instanceof Tt?jp:null},Np=b,Ap=E,Dp=N,jn=Oi,Lp=Y,Mp=I,Rt=Mp("iterator"),bi=!1,G,Ye,Ve;[].keys&&(Ve=[].keys(),"next"in Ve?(Ye=jn(jn(Ve)),Ye!==Object.prototype&&(G=Ye)):bi=!0);var Up=!Dp(G)||Np(function(){var r={};return G[Rt].call(r)!==r});Up&&(G={});Ap(G[Rt])||Lp(G,Rt,function(){return this});var Si={IteratorPrototype:G,BUGGY_SAFARI_ITERATORS:bi},Fp=Si.IteratorPrototype,Bp=Qt,Gp=wt,kp=te,Kp=Sr,Wp=function(){return this},Yp=function(r,e,t,a){var n=e+" Iterator";return r.prototype=Bp(Fp,{next:Gp(+!a,t)}),kp(r,n,!1),Kp[n]=Wp,r},Vp=m,qp=T,Ei=Zr,Hp=E,Jp=Yp,Nn=Oi,An=xo,Xp=te,zp=gr,qe=Y,Qp=I,Zp=Sr,Ii=Si,ry=Ei.PROPER,ey=Ei.CONFIGURABLE,Dn=Ii.IteratorPrototype,Ar=Ii.BUGGY_SAFARI_ITERATORS,cr=Qp("iterator"),Ln="keys",ur="values",Mn="entries",ty=function(){return this},ay=function(r,e,t,a,n,o,i){Jp(t,e,a);var v=function(h){if(h===n&&$)return $;if(!Ar&&h&&h in u)return u[h];switch(h){case Ln:return function(){return new t(this,h)};case ur:return function(){return new t(this,h)};case Mn:return function(){return new t(this,h)}}return function(){return new t(this)}},l=e+" Iterator",c=!1,u=r.prototype,f=u[cr]||u["@@iterator"]||n&&u[n],$=!Ar&&f||v(n),s=e==="Array"&&u.entries||f,d,p,g;if(s&&(d=Nn(s.call(new r)),d!==Object.prototype&&d.next&&(Nn(d)!==Dn&&(An?An(d,Dn):Hp(d[cr])||qe(d,cr,ty)),Xp(d,l,!0))),ry&&n===ur&&f&&f.name!==ur&&(ey?zp(u,"name",ur):(c=!0,$=function(){return qp(f,this)})),n)if(p={values:v(ur),keys:o?$:v(Ln),entries:v(Mn)},i)for(g in p)(Ar||c||!(g in u))&&qe(u,g,p[g]);else Vp({target:e,proto:!0,forced:Ar||c},p);return u[cr]!==$&&qe(u,cr,$,{name:n}),Zp[e]=$,p},ny=function(r,e){return{value:r,done:e}},oy=yr,va=Tp,Un=Sr,Ti=re,iy=M.f,vy=ay,Dr=ny,cy=C,Ri="Array Iterator",uy=Ti.set,ly=Ti.getterFor(Ri),sy=vy(Array,"Array",function(r,e){uy(this,{type:Ri,target:oy(r),index:0,kind:e})},function(){var r=ly(this),e=r.target,t=r.index++;if(!e||t>=e.length)return r.target=void 0,Dr(void 0,!0);switch(r.kind){case"keys":return Dr(t,!1);case"values":return Dr(e[t],!1)}return Dr([t,e[t]],!1)},"values"),Fn=Un.Arguments=Un.Array;va("keys");va("values");va("entries");if(cy&&Fn.name!=="values")try{iy(Fn,"name",{value:"values"})}catch{}var fy={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},$y=Qr,He=$y("span").classList,Bn=He&&He.constructor&&He.constructor.prototype,dy=Bn===Object.prototype?void 0:Bn,Gn=O,mi=fy,py=dy,lr=sy,kn=gr,yy=te,gy=I,Je=gy("iterator"),Xe=lr.values,Pi=function(r,e){if(r){if(r[Je]!==Xe)try{kn(r,Je,Xe)}catch{r[Je]=Xe}if(yy(r,e,!0),mi[e]){for(var t in lr)if(r[t]!==lr[t])try{kn(r,t,lr[t])}catch{r[t]=lr[t]}}}};for(var ze in mi)Pi(Gn[ze]&&Gn[ze].prototype,ze);Pi(py,"DOMTokenList");var hy=L,Oy=zr,by=lo,Sy=Ut,Kn=TypeError,Wn="Reduce of empty array with no initial value",Yn=function(r){return function(e,t,a,n){var o=Oy(e),i=by(o),v=Sy(o);if(hy(t),v===0&&a<2)throw new Kn(Wn);var l=r?v-1:0,c=r?-1:1;if(a<2)for(;;){if(l in i){n=i[l],l+=c;break}if(l+=c,r?l<0:v<=l)throw new Kn(Wn)}for(;r?l>=0:v>l;l+=c)l in i&&(n=t(n,i[l],l,o));return n}},Ey={left:Yn(!1),right:Yn(!0)},Iy=b,wi=function(r,e){var t=[][r];return!!t&&Iy(function(){t.call(null,e||function(){return 1},1)})},Ty=m,Ry=Ey.left,my=wi,Vn=Ct,Py=Or,wy=!Py&&Vn>79&&Vn<83,Cy=wy||!my("reduce");Ty({target:"Array",proto:!0,forced:Cy},{reduce:function(e){var t=arguments.length;return Ry(this,e,t,t>1?arguments[1]:void 0)}});var _y=m,xy=ae,jy=pr.f,Ny=nr,qn=A,Ay=oa,Dy=j,Ly=ia,My=xy("".slice),Uy=Math.min,Ci=Ly("endsWith"),Fy=!Ci&&!!function(){var r=jy(String.prototype,"endsWith");return r&&!r.writable}();_y({target:"String",proto:!0,forced:!Fy&&!Ci},{endsWith:function(e){var t=qn(Dy(this));Ay(e);var a=arguments.length>1?arguments[1]:void 0,n=t.length,o=a===void 0?n:Uy(Ny(a),n),i=qn(e);return My(t,o-i.length,o)===i}});var Qe=T,_i=S,By=ra,Gy=R,ky=K,Ky=j,Wy=Mo,Yy=ta,Vy=nr,Hn=A,qy=ar,Jn=aa,Hy=fi,Jy=b,J=Hy.UNSUPPORTED_Y,Xy=4294967295,zy=Math.min,Ze=_i([].push),rt=_i("".slice),Qy=!Jy(function(){var r=/(?:)/,e=r.exec;r.exec=function(){return e.apply(this,arguments)};var t="ab".split(r);return t.length!==2||t[0]!=="a"||t[1]!=="b"}),Xn="abbc".split(/(b)*/)[1]==="c"||"test".split(/(?:)/,-1).length!==4||"ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||".".split(/()()/).length>1||"".split(/.?/).length;By("split",function(r,e,t){var a="0".split(void 0,0).length?function(n,o){return n===void 0&&o===0?[]:Qe(e,this,n,o)}:e;return[function(o,i){var v=Ky(this),l=ky(o)?void 0:qy(o,r);return l?Qe(l,o,v,i):Qe(a,Hn(v),o,i)},function(n,o){var i=Gy(this),v=Hn(n);if(!Xn){var l=t(a,i,v,o,a!==e);if(l.done)return l.value}var c=Wy(i,RegExp),u=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(J?"g":"y"),$=new c(J?"^(?:"+i.source+")":i,f),s=o===void 0?Xy:o>>>0;if(s===0)return[];if(v.length===0)return Jn($,v)===null?[v]:[];for(var d=0,p=0,g=[];p<v.length;){$.lastIndex=J?0:p;var h=Jn($,J?rt(v,p):v),y;if(h===null||(y=zy(Vy($.lastIndex+(J?p:0)),v.length))===d)p=Yy(v,p,u);else{if(Ze(g,rt(v,d,p)),g.length===s)return g;for(var D=1;D<=h.length-1;D++)if(Ze(g,h[D]),g.length===s)return g;p=d=y}}return Ze(g,rt(v,d)),g}]},Xn||!Qy,J);var xi=`	
\v\f\r                　\u2028\u2029\uFEFF`,Zy=S,rg=j,eg=A,mt=xi,zn=Zy("".replace),tg=RegExp("^["+mt+"]+"),ag=RegExp("(^|[^"+mt+"])["+mt+"]+$"),et=function(r){return function(e){var t=eg(rg(e));return r&1&&(t=zn(t,tg,"")),r&2&&(t=zn(t,ag,"$1")),t}},ng={start:et(1),end:et(2),trim:et(3)},og=Zr.PROPER,ig=b,Qn=xi,Zn="​᠎",vg=function(r){return ig(function(){return!!Qn[r]()||Zn[r]()!==Zn||og&&Qn[r].name!==r})},cg=m,ug=ng.trim,lg=vg;cg({target:"String",proto:!0,forced:lg("trim")},{trim:function(){return ug(this)}});var sg=m,fg=ae,$g=Po.indexOf,dg=wi,Pt=fg([].indexOf),ji=!!Pt&&1/Pt([1],1,-0)<0,pg=ji||!dg("indexOf");sg({target:"Array",proto:!0,forced:pg},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return ji?Pt(this,e,t)||0:$g(this,e,t)}});var yg=m,gg=S,hg=oa,Og=j,ro=A,bg=ia,Sg=gg("".indexOf);yg({target:"String",proto:!0,forced:!bg("includes")},{includes:function(e){return!!~Sg(ro(Og(this)),ro(hg(e)),arguments.length>1?arguments[1]:void 0)}});var Eg=k,Ig=Array.isArray||function(e){return Eg(e)==="Array"},Tg=m,Rg=S,mg=Ig,Pg=Rg([].reverse),eo=[1,2];Tg({target:"Array",proto:!0,forced:String(eo)===String(eo.reverse())},{reverse:function(){return mg(this)&&(this.length=this.length),Pg(this)}});var wg=T,Cg=_,_g=Hr,xg=si,to=RegExp.prototype,jg=function(r){var e=r.flags;return e===void 0&&!("flags"in to)&&!Cg(r,"flags")&&_g(to,r)?wg(xg,r):e},Ng=Zr.PROPER,Ag=Y,Dg=R,ao=A,Lg=b,Mg=jg,ca="toString",Ni=RegExp.prototype,Ai=Ni[ca],Ug=Lg(function(){return Ai.call({source:"a",flags:"b"})!=="/a/b"}),Fg=Ng&&Ai.name!==ca;(Ug||Fg)&&Ag(Ni,ca,function(){var e=Dg(this),t=ao(e.source),a=ao(Mg(e));return"/"+t+"/"+a},{unsafe:!0});export{Bg as a,Er as c,Gg as g};
