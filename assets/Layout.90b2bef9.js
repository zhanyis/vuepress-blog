var Me=Object.defineProperty,De=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ve=(l,t,e)=>t in l?Me(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,X=(l,t)=>{for(var e in t||(t={}))Ee.call(t,e)&&ve(l,e,t[e]);if(de)for(var e of de(t))Ie.call(t,e)&&ve(l,e,t[e]);return l},Y=(l,t)=>De(l,Ne(t));import{r as I,o as a,c,d as $,f as x,i as P,j as p,k as _e,h as n,F as D,l as A,m as w,a as g,t as T,n as G,p as J,q as C,w as B,s as pe,v as y,b as U,x as q,y as Pe,z as Re,A as Ae,B as Q,C as Z,D as V,E as fe,G as me,H as R,u as be,g as M,T as ge,I as O,J as He,K as j,L as K,M as Oe,N as ze,O as ee,P as ke,Q as $e,e as Fe,R as Le,S as We,U as W,V as te,W as Ue,X as Ve,Y as je,Z as Ke}from"./app.8382ca1a.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";const Ge={},qe={class:"theme-default-content custom"};function Xe(l,t){const e=I("Content");return a(),c("div",qe,[$(e)])}var Ye=ye(Ge,[["render",Xe]]);const Je={key:0,class:"features"},Qe=x({setup(l){const t=P(),e=p(()=>_e(t.value.features)?t.value.features:[]);return(i,s)=>n(e).length?(a(),c("div",Je,[(a(!0),c(D,null,A(n(e),_=>(a(),c("div",{key:_.title,class:"feature"},[g("h2",null,T(_.title),1),g("p",null,T(_.details),1)]))),128))])):w("",!0)}}),Ze=["innerHTML"],et=["textContent"],tt=x({setup(l){const t=P(),e=p(()=>t.value.footer),i=p(()=>t.value.footerHtml);return(s,_)=>n(e)?(a(),c(D,{key:0},[n(i)?(a(),c("div",{key:0,class:"footer",innerHTML:n(e)},null,8,Ze)):(a(),c("div",{key:1,class:"footer",textContent:T(n(e))},null,8,et))],64)):w("",!0)}}),nt=["href","rel","target","aria-label"],at=x({inheritAttrs:!1}),E=x(Y(X({},at),{props:{item:{type:Object,required:!0}},setup(l){const t=l,e=G(),i=Ae(),{item:s}=J(t),_=p(()=>q(s.value.link)),f=p(()=>Pe(s.value.link)||Re(s.value.link)),h=p(()=>{if(!f.value){if(s.value.target)return s.value.target;if(_.value)return"_blank"}}),o=p(()=>h.value==="_blank"),r=p(()=>!_.value&&!f.value&&!o.value),u=p(()=>{if(!f.value){if(s.value.rel)return s.value.rel;if(o.value)return"noopener noreferrer"}}),d=p(()=>s.value.ariaLabel||s.value.text),v=p(()=>{const L=Object.keys(i.value.locales);return L.length?!L.some(m=>m===s.value.link):s.value.link!=="/"}),b=p(()=>v.value?e.path.startsWith(s.value.link):!1),k=p(()=>r.value?s.value.activeMatch?new RegExp(s.value.activeMatch).test(e.path):b.value:!1);return(L,m)=>{const S=I("RouterLink"),N=I("ExternalLinkIcon");return n(r)?(a(),C(S,pe({key:0,class:{"router-link-active":n(k)},to:n(s).link,"aria-label":n(d)},L.$attrs),{default:B(()=>[y(L.$slots,"before"),U(" "+T(n(s).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),c("a",pe({key:1,class:"external-link",href:n(s).link,rel:n(u),target:n(h),"aria-label":n(d)},L.$attrs),[y(L.$slots,"before"),U(" "+T(n(s).text)+" ",1),n(o)?(a(),C(N,{key:0})):w("",!0),y(L.$slots,"after")],16,nt))}}})),st={class:"hero"},ot={key:0,id:"main-title"},rt={key:1,class:"description"},lt={key:2,class:"actions"},ut=x({setup(l){const t=P(),e=Q(),i=Z(),s=p(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),_=p(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=p(()=>t.value.heroAlt||_.value||"hero"),h=p(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),o=p(()=>_e(t.value.actions)?t.value.actions.map(({text:u,link:d,type:v="primary"})=>({text:u,link:d,type:v})):[]),r=()=>{if(!s.value)return null;const u=V("img",{src:fe(s.value),alt:f.value});return t.value.heroImageDark===void 0?u:V(me,()=>u)};return(u,d)=>(a(),c("header",st,[$(r),n(_)?(a(),c("h1",ot,T(n(_)),1)):w("",!0),n(h)?(a(),c("p",rt,T(n(h)),1)):w("",!0),n(o).length?(a(),c("p",lt,[(a(!0),c(D,null,A(n(o),v=>(a(),C(E,{key:v.text,class:R(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):w("",!0)]))}}),it={class:"home"},ct=x({setup(l){return(t,e)=>(a(),c("main",it,[$(ut),$(Qe),$(Ye),$(tt)]))}}),dt=x({setup(l){const t=be(),e=Q(),i=M(),s=Z(),_=p(()=>i.value.home||t.value),f=p(()=>e.value.title),h=p(()=>s.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),o=()=>{if(!h.value)return null;const r=V("img",{class:"logo",src:fe(h.value),alt:f.value});return i.value.logoDark===void 0?r:V(me,()=>r)};return(r,u)=>{const d=I("RouterLink");return a(),C(d,{to:n(_)},{default:B(()=>[$(o),n(f)?(a(),c("span",{key:0,class:R(["site-name",{"can-hide":n(h)}])},T(n(f)),3)):w("",!0)]),_:1},8,["to"])}}}),we=x({setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,s)=>(a(),C(ge,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[y(i.$slots,"default")]),_:3}))}}),vt=["aria-label"],pt={class:"title"},ht=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],ft={class:"title"},mt={class:"navbar-dropdown"},bt={class:"navbar-dropdown-subtitle"},gt={key:1},kt={class:"navbar-dropdown-subitem-wrapper"},$t=x({props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=J(t),i=p(()=>e.value.ariaLabel||e.value.text),s=O(!1),_=G();He(()=>_.path,()=>{s.value=!1});const f=o=>{o.detail===0?s.value=!s.value:s.value=!1},h=(o,r)=>r[r.length-1]===o;return(o,r)=>(a(),c("div",{class:R(["navbar-dropdown-wrapper",{open:s.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(i),onClick:f},[g("span",pt,T(n(e).text),1),ht],8,vt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(i),onClick:r[0]||(r[0]=u=>s.value=!s.value)},[g("span",ft,T(n(e).text),1),g("span",{class:R(["arrow",s.value?"down":"right"])},null,2)],8,_t),$(we,null,{default:B(()=>[j(g("ul",mt,[(a(!0),c(D,null,A(n(e).children,u=>(a(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(a(),c(D,{key:0},[g("h4",bt,[u.link?(a(),C(E,{key:0,item:u,onFocusout:d=>h(u,n(e).children)&&u.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(a(),c("span",gt,T(u.text),1))]),g("ul",kt,[(a(!0),c(D,null,A(u.children,d=>(a(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[$(E,{item:d,onFocusout:v=>h(d,u.children)&&h(u,n(e).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),C(E,{key:1,item:u,onFocusout:d=>h(u,n(e).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[K,s.value]])]),_:1})],2))}}),he=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Lt=(l,t)=>{if(t.hash===l)return!0;const e=he(t.path),i=he(l);return e===i},xe=(l,t)=>l.link&&Lt(l.link,t)?!0:l.children?l.children.some(e=>xe(e,t)):!1,Ce=l=>!q(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,yt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},wt=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=Ce(l);return e!==null?yt[e]:null},xt=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:s})=>{if(!i)return null;const _=wt({docsRepo:l,editLinkPattern:s});return _?_.replace(/:repo/,q(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Oe(`${ze(e)}/${i}`)):null},Ct={key:0,class:"navbar-items"},Te=x({setup(l){const t=()=>{const r=ee(),u=be(),d=Q(),v=M();return p(()=>{var S,N;const b=Object.keys(d.value.locales);if(b.length<2)return[];const k=r.currentRoute.value.path,L=r.currentRoute.value.fullPath;return[{text:(S=v.value.selectLanguageText)!=null?S:"unknown language",ariaLabel:(N=v.value.selectLanguageAriaLabel)!=null?N:"unkown language",children:b.map(H=>{var se,oe,re,le,ue,ie;const z=(oe=(se=d.value.locales)==null?void 0:se[H])!=null?oe:{},ne=(le=(re=v.value.locales)==null?void 0:re[H])!=null?le:{},ae=`${z.lang}`,Se=(ue=ne.selectLanguageName)!=null?ue:ae;let F;if(ae===d.value.lang)F=L;else{const ce=k.replace(u.value,H);r.getRoutes().some(Be=>Be.path===ce)?F=ce:F=(ie=ne.home)!=null?ie:H}return{text:Se,link:F}})}]})},e=()=>{const r=M(),u=p(()=>r.value.repo),d=p(()=>u.value?Ce(u.value):null),v=p(()=>u.value&&!q(u.value)?`https://github.com/${u.value}`:u.value),b=p(()=>v.value?r.value.repoLabel?r.value.repoLabel:d.value===null?"Source":d.value:null);return p(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},i=r=>ke(r)?$e(r):r.children?Y(X({},r),{children:r.children.map(i)}):r,_=(()=>{const r=M();return p(()=>(r.value.navbar||[]).map(i))})(),f=t(),h=e(),o=p(()=>[..._.value,...f.value,...h.value]);return(r,u)=>n(o).length?(a(),c("nav",Ct,[(a(!0),c(D,null,A(n(o),d=>(a(),c("div",{key:d.text,class:"navbar-item"},[d.children?(a(),C($t,{key:0,item:d},null,8,["item"])):(a(),C(E,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}}),Tt=["title"],St={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Bt=Fe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Mt=[Bt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Nt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Et=[Nt],It=x({setup(l){const t=M(),e=Z(),i=()=>{e.value=!e.value};return(s,_)=>(a(),c("button",{class:"toggle-dark-button",title:n(t).toggleDarkMode,onClick:i},[j((a(),c("svg",St,Mt,512)),[[K,!n(e)]]),j((a(),c("svg",Dt,Et,512)),[[K,n(e)]])],8,Tt))}}),Pt=["title"],Rt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),At=[Rt],Ht=x({emits:["toggle"],setup(l){const t=M();return(e,i)=>(a(),c("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=s=>e.$emit("toggle"))},At,8,Pt))}}),Ot=x({emits:["toggle-sidebar"],setup(l){const t=M(),e=O(null),i=O(null),s=O(0),_=p(()=>s.value?{maxWidth:s.value+"px"}:{}),f=p(()=>t.value.darkMode);Le(()=>{const r=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),u=()=>{var d;window.innerWidth<=719?s.value=0:s.value=e.value.offsetWidth-r-(((d=i.value)==null?void 0:d.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(o,r){var v,b,k;const u=(k=(b=(v=o==null?void 0:o.ownerDocument)==null?void 0:v.defaultView)==null?void 0:b.getComputedStyle(o,null))==null?void 0:k[r],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d}return(o,r)=>{const u=I("NavbarSearch");return a(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Ht,{onToggle:r[0]||(r[0]=d=>o.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:i},[$(dt)],512),g("div",{class:"navbar-items-wrapper",style:We(n(_))},[y(o.$slots,"before"),$(Te,{class:"can-hide"}),y(o.$slots,"after"),n(f)?(a(),C(It,{key:0})):w("",!0),$(u)],4)],512)}}}),zt={class:"page-meta"},Ft={key:0,class:"meta-item edit-link"},Wt={key:1,class:"meta-item last-updated"},Ut={class:"meta-item-label"},Vt={class:"meta-item-info"},jt={key:2,class:"meta-item contributors"},Kt={class:"meta-item-label"},Gt={class:"meta-item-info"},qt=["title"],Xt=U(", "),Yt=x({setup(l){const t=()=>{const o=M(),r=W(),u=P();return p(()=>{var N,H,z;if(!((H=(N=u.value.editLink)!=null?N:o.value.editLink)!=null?H:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:k="main",docsDir:L="",editLinkText:m}=o.value;if(!b)return null;const S=xt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:r.value.filePathRelative,editLinkPattern:(z=u.value.editLinkPattern)!=null?z:o.value.editLinkPattern});return S?{text:m!=null?m:"Edit this page",link:S}:null})},e=()=>{const o=M(),r=W(),u=P();return p(()=>{var b,k,L,m;return!((k=(b=u.value.lastUpdated)!=null?b:o.value.lastUpdated)!=null?k:!0)||!((L=r.value.git)!=null&&L.updatedTime)?null:new Date((m=r.value.git)==null?void 0:m.updatedTime).toLocaleString()})},i=()=>{const o=M(),r=W(),u=P();return p(()=>{var v,b,k,L;return((b=(v=u.value.contributors)!=null?v:o.value.contributors)!=null?b:!0)&&(L=(k=r.value.git)==null?void 0:k.contributors)!=null?L:null})},s=M(),_=t(),f=e(),h=i();return(o,r)=>{const u=I("ClientOnly");return a(),c("footer",zt,[n(_)?(a(),c("div",Ft,[$(E,{class:"meta-item-label",item:n(_)},null,8,["item"])])):w("",!0),n(f)?(a(),c("div",Wt,[g("span",Ut,T(n(s).lastUpdatedText)+": ",1),$(u,null,{default:B(()=>[g("span",Vt,T(n(f)),1)]),_:1})])):w("",!0),n(h)&&n(h).length?(a(),c("div",jt,[g("span",Kt,T(n(s).contributorsText)+": ",1),g("span",Gt,[(a(!0),c(D,null,A(n(h),(d,v)=>(a(),c(D,{key:v},[g("span",{class:"contributor",title:`email: ${d.email}`},T(d.name),9,qt),v!==n(h).length-1?(a(),c(D,{key:0},[Xt],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),Jt={key:0,class:"page-nav"},Qt={class:"inner"},Zt={key:0,class:"prev"},en={key:1,class:"next"},tn=x({setup(l){const t=o=>o===!1?null:ke(o)?$e(o):Ue(o)?o:!1,e=(o,r,u)=>{const d=o.findIndex(v=>v.link===r);if(d!==-1){const v=o[d+u];return v!=null&&v.link?v:null}for(const v of o)if(v.children){const b=e(v.children,r,u);if(b)return b}return null},i=P(),s=te(),_=G(),f=p(()=>{const o=t(i.value.prev);return o!==!1?o:e(s.value,_.path,-1)}),h=p(()=>{const o=t(i.value.next);return o!==!1?o:e(s.value,_.path,1)});return(o,r)=>n(f)||n(h)?(a(),c("nav",Jt,[g("p",Qt,[n(f)?(a(),c("span",Zt,[$(E,{item:n(f)},null,8,["item"])])):w("",!0),n(h)?(a(),c("span",en,[$(E,{item:n(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),nn={class:"page"},an={class:"theme-default-content"},sn=x({setup(l){return(t,e)=>{const i=I("Content");return a(),c("main",nn,[y(t.$slots,"top"),g("div",an,[$(i)]),$(Yt),$(tn),y(t.$slots,"bottom")])}}}),on={class:"sidebar-item-children"},rn=x({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=J(t),s=G(),_=ee(),f=p(()=>xe(e.value,s)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:f.value,collapsible:e.value.collapsible})),o=O(!0),r=O(void 0);return e.value.collapsible&&(o.value=f.value,r.value=()=>{o.value=!o.value},_.afterEach(()=>{o.value=f.value})),(u,d)=>{var b;const v=I("SidebarItem",!0);return a(),c("li",null,[n(e).link?(a(),C(E,{key:0,class:R(n(h)),item:n(e)},null,8,["class","item"])):(a(),c("p",{key:1,tabindex:"0",class:R(n(h)),onClick:d[0]||(d[0]=(...k)=>r.value&&r.value(...k)),onKeydown:d[1]||(d[1]=Ve((...k)=>r.value&&r.value(...k),["enter"]))},[U(T(n(e).text)+" ",1),n(e).collapsible?(a(),c("span",{key:0,class:R(["arrow",o.value?"down":"right"])},null,2)):w("",!0)],34)),(b=n(e).children)!=null&&b.length?(a(),C(we,{key:2},{default:B(()=>[j(g("ul",on,[(a(!0),c(D,null,A(n(e).children,k=>(a(),C(v,{key:`${n(i)}${k.text}${k.link}`,item:k,depth:n(i)+1},null,8,["item","depth"]))),128))],512),[[K,o.value]])]),_:1})):w("",!0)])}}}),ln={key:0,class:"sidebar-items"},un=x({setup(l){const t=te();return(e,i)=>n(t).length?(a(),c("ul",ln,[(a(!0),c(D,null,A(n(t),s=>(a(),C(rn,{key:s.link||s.text,item:s},null,8,["item"]))),128))])):w("",!0)}}),cn={class:"sidebar"},dn=x({setup(l){return(t,e)=>(a(),c("aside",cn,[$(Te),y(t.$slots,"top"),$(un),y(t.$slots,"bottom")]))}}),vn=x({setup(l){const t=W(),e=P(),i=M(),s=p(()=>e.value.navbar!==!1&&i.value.navbar!==!1),_=te(),f=O(!1),h=m=>{f.value=typeof m=="boolean"?m:!f.value},o={x:0,y:0},r=m=>{o.x=m.changedTouches[0].clientX,o.y=m.changedTouches[0].clientY},u=m=>{const S=m.changedTouches[0].clientX-o.x,N=m.changedTouches[0].clientY-o.y;Math.abs(S)>Math.abs(N)&&Math.abs(S)>40&&(S>0&&o.x<=80?h(!0):h(!1))},d=p(()=>[{"no-navbar":!s.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},e.value.pageClass]);let v;Le(()=>{v=ee().afterEach(()=>{h(!1)})}),je(()=>{v()});const b=Ke(),k=b.resolve,L=b.pending;return(m,S)=>(a(),c("div",{class:R(["theme-container",n(d)]),onTouchstart:r,onTouchend:u},[y(m.$slots,"navbar",{},()=>[n(s)?(a(),C(Ot,{key:0,onToggleSidebar:h},{before:B(()=>[y(m.$slots,"navbar-before")]),after:B(()=>[y(m.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=N=>h(!1))}),y(m.$slots,"sidebar",{},()=>[$(dn,null,{top:B(()=>[y(m.$slots,"sidebar-top")]),bottom:B(()=>[y(m.$slots,"sidebar-bottom")]),_:3})]),y(m.$slots,"page",{},()=>[n(e).home?(a(),C(ct,{key:0})):(a(),C(ge,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n(k),onBeforeLeave:n(L)},{default:B(()=>[(a(),C(sn,{key:n(t).path},{top:B(()=>[y(m.$slots,"page-top")]),bottom:B(()=>[y(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});const pn={components:{Layout:vn}};function hn(l,t,e,i,s,_){const f=I("Layout",!0);return a(),C(f,null,{"page-bottom":B(()=>[]),_:1})}var bn=ye(pn,[["render",hn]]);export{bn as default};