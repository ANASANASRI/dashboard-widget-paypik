import{d as Nt}from"./chunk-RFYKEKXF.js";import{f as ct,g as A,h as P,m as lt,n as O,p as pt,u as dt}from"./chunk-KK5LKI46.js";import{a as ht,b as vt}from"./chunk-IMMEJSHF.js";import"./chunk-5L73SFHS.js";import{a as yt,b as gt,c as bt}from"./chunk-KA2GIORK.js";import"./chunk-LZ7G6CDP.js";import{a as At,b as Ct}from"./chunk-736VORME.js";import"./chunk-AIMB7KOV.js";import{L as ft,N as u,Q as F,c as H,d as nt,e as _,f as st,g as j,h as at,n as mt,o as x,p as m,s as ut,t as z}from"./chunk-2IJCXJGX.js";import{Ba as N,C as K,Ka as T,N as Q,Ua as w,Y as q,Z as c,Zb as ot,_ as v,ca as tt,da as a,ga as et,ha as y,hc as S,kb as rt,n as M,sa as it,y as J}from"./chunk-W3XV2ATP.js";import"./chunk-5FZOKLP6.js";var Zt=(()=>{let t=class t extends O{constructor(e,r,n,s){super(e,r,n)}ngOnDestroy(){this.flush()}};t.\u0275fac=function(r){return new(r||t)(a(S),a(A),a(P),a(ot))},t.\u0275prov=c({token:t,factory:t.\u0275fac});let o=t;return o})();function $t(){return new lt}function Jt(o,t,i){return new dt(o,t,i)}var Et=[{provide:P,useFactory:$t},{provide:O,useClass:Zt},{provide:T,useFactory:Jt,deps:[_,O,w]}],It=[{provide:A,useFactory:()=>new pt},{provide:N,useValue:"BrowserAnimations"},...Et],Kt=[{provide:A,useClass:ct},{provide:N,useValue:"NoopAnimations"},...Et],Mt=(()=>{let t=class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Kt:It}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({providers:It,imports:[j]});let o=t;return o})();var Tt=(()=>{let t=class t{constructor(e,r){this.authService=e,this.router=r}canActivate(){return this.authService.isAdmin()?!0:(this.router.navigate(["/unauthorized"]),!1)}};t.\u0275fac=function(r){return new(r||t)(a(u),a(m))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var D=(()=>{let t=class t{constructor(e,r){this.authService=e,this.router=r}canActivate(){return this.authService.isSuperAdmin()?!0:(this.router.navigate(["/unauthorized"]),!1)}};t.\u0275fac=function(r){return new(r||t)(a(u),a(m))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var St=(()=>{let t=class t{constructor(e,r,n){this.authService=e,this.router=r,this.superadminGuard=n}canActivate(){return this.authService.isCommercial()||this.superadminGuard.canActivate()?!0:(this.router.navigate(["/unauthorized"]),!1)}};t.\u0275fac=function(r){return new(r||t)(a(u),a(m),a(D))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var _t=(()=>{let t=class t{constructor(e,r,n){this.authService=e,this.router=r,this.superadminGuard=n}canActivate(){return this.authService.isMarchand()||this.superadminGuard.canActivate()?!0:(this.router.navigate(["/unauthorized"]),!1)}};t.\u0275fac=function(r){return new(r||t)(a(u),a(m),a(D))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var Qt=[{path:"",component:gt,loadChildren:()=>import("./chunk-VZ2UIAHX.js").then(o=>o.PublicModule)},{path:F.Admin,component:ht,canActivate:[Tt],loadChildren:()=>import("./chunk-NWTEKZWI.js").then(o=>o.AdminModule)},{path:F.Commercial,component:At,canActivate:[St],loadChildren:()=>import("./chunk-TGU6YPGY.js").then(o=>o.CommercialModule)},{path:F.Marchand,component:Nt,canActivate:[_t],loadChildren:()=>import("./chunk-3MMMLCTD.js").then(o=>o.MarchandModule)},{path:"**",component:yt}],jt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({imports:[z.forRoot(Qt,{preloadingStrategy:ut,scrollPositionRestoration:"top"}),z]});let o=t;return o})();var Pt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=et({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(r,n){r&1&&rt(0,"router-outlet")},dependencies:[mt]});let o=t;return o})();var l=function(){return l=Object.assign||function(t){for(var i,e=1,r=arguments.length;e<r;e++){i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},l.apply(this,arguments)},qt=function(){function o(t){this.options=t,this.listeners={}}return o.prototype.on=function(t,i){var e=this.listeners[t]||[];this.listeners[t]=e.concat([i])},o.prototype.triggerEvent=function(t,i){var e=this,r=this.listeners[t]||[];r.forEach(function(n){return n({target:e,event:i})})},o}(),b=function(o){return o[o.Add=0]="Add",o[o.Remove=1]="Remove",o}(b||{}),te=function(){function o(){this.notifications=[]}return o.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,b.Add,this.notifications)},o.prototype.splice=function(t,i){var e=this.notifications.splice(t,i)[0];return this.updateFn(e,b.Remove,this.notifications),e},o.prototype.indexOf=function(t){return this.notifications.indexOf(t)},o.prototype.onUpdate=function(t){this.updateFn=t},o}(),h=function(o){return o.Dismiss="dismiss",o.Click="click",o}(h||{}),Ot={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},ee=function(){function o(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),i=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(i),document.body.appendChild(t),this.container=i,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return o.prototype.on=function(t,i){var e;this.events=l(l({},this.events),(e={},e[t]=i,e))},o.prototype.update=function(t,i){i===b.Add?this.addNotification(t):i===b.Remove&&this.removeNotification(t)},o.prototype.removeNotification=function(t){var i=this,e=this._popRenderedNotification(t),r;if(e){r=e.node,r.classList.add("notyf__toast--disappear");var n;r.addEventListener(this.animationEndEventName,n=function(s){s.target===r&&(r.removeEventListener(i.animationEndEventName,n),i.container.removeChild(r))})}},o.prototype.addNotification=function(t){var i=this._renderNotification(t);this.notifications.push({notification:t,node:i}),this._announce(t.options.message||"Notification")},o.prototype._renderNotification=function(t){var i,e=this._buildNotificationCard(t),r=t.options.className;return r&&(i=e.classList).add.apply(i,r.split(" ")),this.container.appendChild(e),e},o.prototype._popRenderedNotification=function(t){for(var i=-1,e=0;e<this.notifications.length&&i<0;e++)this.notifications[e].notification===t&&(i=e);if(i!==-1)return this.notifications.splice(i,1)[0]},o.prototype.getXPosition=function(t){var i;return((i=t?.position)===null||i===void 0?void 0:i.x)||"right"},o.prototype.getYPosition=function(t){var i;return((i=t?.position)===null||i===void 0?void 0:i.y)||"bottom"},o.prototype.adjustContainerAlignment=function(t){var i=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],e=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],r=this.container.style;r.setProperty("justify-content",e),r.setProperty("align-items",i)},o.prototype._buildNotificationCard=function(t){var i=this,e=t.options,r=e.icon;this.adjustContainerAlignment(e);var n=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),s=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),d=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),C=this._createHTMLElement({tagName:"div",className:"notyf__message"});C.innerHTML=e.message||"";var I=e.background||e.backgroundColor;if(r){var L=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof r=="string"||r instanceof String)&&(L.innerHTML=new String(r).valueOf()),typeof r=="object"){var X=r.tagName,Xt=X===void 0?"i":X,Bt=r.className,Gt=r.text,B=r.color,G=B===void 0?I:B,W=this._createHTMLElement({tagName:Xt,className:Bt,text:Gt});G&&(W.style.color=G),L.appendChild(W)}d.appendChild(L)}if(d.appendChild(C),n.appendChild(d),I&&(e.ripple?(s.style.background=I,n.appendChild(s)):n.style.background=I),e.dismissible){var Z=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),$=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});Z.appendChild($),d.appendChild(Z),n.classList.add("notyf__toast--dismissible"),$.addEventListener("click",function(E){var g,f;(f=(g=i.events)[h.Dismiss])===null||f===void 0||f.call(g,{target:t,event:E}),E.stopPropagation()})}n.addEventListener("click",function(E){var g,f;return(f=(g=i.events)[h.Click])===null||f===void 0?void 0:f.call(g,{target:t,event:E})});var Wt=this.getYPosition(e)==="top"?"upper":"lower";return n.classList.add("notyf__toast--"+Wt),n},o.prototype._createHTMLElement=function(t){var i=t.tagName,e=t.className,r=t.text,n=document.createElement(i);return e&&(n.className=e),n.textContent=r||null,n},o.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},o.prototype._announce=function(t){var i=this;this.a11yContainer.textContent="",setTimeout(function(){i.a11yContainer.textContent=t},100)},o.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),i={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},e;for(e in i)if(t.style[e]!==void 0)return i[e];return"animationend"},o}(),xt=function(){function o(t){var i=this;this.dismiss=this._removeNotification,this.notifications=new te,this.view=new ee;var e=this.registerTypes(t);this.options=l(l({},Ot),t),this.options.types=e,this.notifications.onUpdate(function(r,n){return i.view.update(r,n)}),this.view.on(h.Dismiss,function(r){var n=r.target,s=r.event;i._removeNotification(n),n.triggerEvent(h.Dismiss,s)}),this.view.on(h.Click,function(r){var n=r.target,s=r.event;return n.triggerEvent(h.Click,s)})}return o.prototype.error=function(t){var i=this.normalizeOptions("error",t);return this.open(i)},o.prototype.success=function(t){var i=this.normalizeOptions("success",t);return this.open(i)},o.prototype.open=function(t){var i=this.options.types.find(function(n){var s=n.type;return s===t.type})||{},e=l(l({},i),t);this.assignProps(["ripple","position","dismissible"],e);var r=new qt(e);return this._pushNotification(r),r},o.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},o.prototype.assignProps=function(t,i){var e=this;t.forEach(function(r){i[r]=i[r]==null?e.options[r]:i[r]})},o.prototype._pushNotification=function(t){var i=this;this.notifications.push(t);var e=t.options.duration!==void 0?t.options.duration:this.options.duration;e&&setTimeout(function(){return i._removeNotification(t)},e)},o.prototype._removeNotification=function(t){var i=this.notifications.indexOf(t);i!==-1&&this.notifications.splice(i,1)},o.prototype.normalizeOptions=function(t,i){var e={type:t};return typeof i=="string"?e.message=i:typeof i=="object"&&(e=l(l({},e),i)),e},o.prototype.registerTypes=function(t){var i=(t&&t.types||[]).slice(),e=Ot.types.map(function(r){var n=-1;i.forEach(function(d,C){d.type===r.type&&(n=C)});var s=n!==-1?i.splice(n,1)[0]:{};return l(l({},r),s)});return e.concat(i)},o}();var k=new tt("NotyfToken");function Ft(){return new xt({position:{x:"center",y:"bottom"},duration:1e4,dismissible:!0})}var Rt=(()=>{let t=class t{constructor(e){this.notyf=e}intercept(e,r){return this.notyf.dismissAll(),r.handle(e).pipe(Q({count:3,delay:(n,s)=>this.shouldRetry(n,s)}),K(n=>{let s="The server is not ready to process your request.";return n.status!=0&&(s=n.error.title),n.status>=400&&n.status<=415?M(()=>this.handleFormErrors(n.error)):(this.notyf.error({message:s,duration:0}),M(()=>new Error(s)))}))}shouldRetry(e,r){return e.status==400?M(()=>e):J(r*1e3)}handleFormErrors(e){let r={};return e.forEach(n=>{let{title:s,message:d}=n;r[s.toLowerCase()]?r[s.toLowerCase()].push(d):r[s.toLowerCase()]=[d]}),r}};t.\u0275fac=function(r){return new(r||t)(a(k))},t.\u0275prov=c({token:t,factory:t.\u0275fac});let o=t;return o})();var Dt=(()=>{let t=class t{put(e,r){localStorage.setItem(e,r)}get(e){return localStorage.getItem(e)}remove(e){localStorage.removeItem(e)}destroy(){localStorage.clear()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var kt=(()=>{let t=class t{constructor(e){this.localStorageService=e}intercept(e,r){let n=e.url,s=this.localStorageService.get("token");return s&&(e=e.clone({headers:e.headers.set("Authorization","Bearer "+s)})),e=e.clone({url:n}),r.handle(e)}};t.\u0275fac=function(r){return new(r||t)(a(Dt))},t.\u0275prov=c({token:t,factory:t.\u0275fac});let o=t;return o})();var Lt=[{provide:H,useClass:kt,multi:!0},{provide:H,useClass:Rt,multi:!0}];var Ht=(()=>{let t=class t extends x{constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(`dashboard-widget - ${r}`)}};t.\u0275fac=function(r){return new(r||t)(a(at))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var zt=[{provide:x,useClass:Ht}];var Ut=[{provide:k,useFactory:Ft}];var oe="@",Y=class{constructor(t,i,e,r,n){this.doc=t,this.delegate=i,this.zone=e,this.animationType=r,this.moduleImpl=n,this._rendererFactoryPromise=null}loadImpl(){return(this.moduleImpl??import("./chunk-A7DOWMO5.js")).catch(i=>{throw new q(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:e})=>{let r=i(this.animationType,this.doc),n=new e(this.delegate,r,this.zone);return this.delegate=n,n})}createRenderer(t,i){let e=this.delegate.createRenderer(t,i);if(e.\u0275type===0)return e;typeof e.throwOnSyntheticProps=="boolean"&&(e.throwOnSyntheticProps=!1);let r=new V(e);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let s=n.createRenderer(t,i);r.use(s)}).catch(n=>{r.use(e)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}},V=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let i of this.replay)i(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,i){return this.delegate.createElement(t,i)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,i){this.delegate.appendChild(t,i)}insertBefore(t,i,e,r){this.delegate.insertBefore(t,i,e,r)}removeChild(t,i,e){this.delegate.removeChild(t,i,e)}selectRootElement(t,i){return this.delegate.selectRootElement(t,i)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,i,e,r){this.delegate.setAttribute(t,i,e,r)}removeAttribute(t,i,e){this.delegate.removeAttribute(t,i,e)}addClass(t,i){this.delegate.addClass(t,i)}removeClass(t,i){this.delegate.removeClass(t,i)}setStyle(t,i,e,r){this.delegate.setStyle(t,i,e,r)}removeStyle(t,i,e){this.delegate.removeStyle(t,i,e)}setProperty(t,i,e){this.shouldReplay(i)&&this.replay.push(r=>r.setProperty(t,i,e)),this.delegate.setProperty(t,i,e)}setValue(t,i){this.delegate.setValue(t,i)}listen(t,i,e){return this.shouldReplay(i)&&this.replay.push(r=>r.listen(t,i,e)),this.delegate.listen(t,i,e)}shouldReplay(t){return this.replay!==null&&t.startsWith(oe)}};function Yt(o="animations"){return it([{provide:T,useFactory:(t,i,e)=>new Y(t,i,e,o),deps:[S,_,w]},{provide:N,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Vt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=y({type:t,bootstrap:[Pt]}),t.\u0275inj=v({providers:[Lt,zt,Ut,Yt()],imports:[j,jt,vt,bt,Ct,Mt,nt,ft]});let o=t;return o})();st().bootstrapModule(Vt).catch(o=>console.error(o));
