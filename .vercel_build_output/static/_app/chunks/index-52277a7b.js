function P(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function S(){return Object.create(null)}function y(t){t.forEach(T)}function I(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ut(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function L(t){return Object.keys(t).length===0}function st(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(n.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,s){if(r){const o=D(n,e,i,s);t.p(o,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ht(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,g=>n[e[g]].claim_order,u))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],o=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);l>=c;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[c],a)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function W(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function pt(){return A(" ")}function yt(){return A("")}function V(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function gt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:V(t,i,n[i])}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){Y(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return Z(t,n,e,W)}function tt(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function $t(t){return tt(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function nt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function wt(t){d().$$.before_update.push(t)}function Et(t){d().$$.on_mount.push(t)}function kt(t){d().$$.after_update.push(t)}function jt(t){d().$$.on_destroy.push(t)}function At(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=nt(n,e,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function Ct(t,n){return d().$$.context.set(t,n),n}function Nt(t){return d().$$.context.get(t)}const h=[],M=[],b=[],O=[],B=Promise.resolve();let k=!1;function z(){k||(k=!0,B.then(F))}function St(){return z(),B}function j(t){b.push(t)}const E=new Set;let $=0;function F(){const t=p;do{for(;$<h.length;){const n=h[$];$++,m(n),et(n.$$)}for(m(null),h.length=0,$=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(h.length);for(;O.length;)O.pop()();k=!1,E.clear(),m(t)}function et(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const v=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function Ot(){_.r||y(_.c),_=_.p}function it(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Tt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[s]=l}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function qt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=t.$$;r&&r.m(n,e),i||j(()=>{const c=s.map(T).filter(I);o?o.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(j)}function ct(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,s,o,l=[-1]){const c=p;m(t);const u=t.$$={fragment:null,ctx:null,props:s,update:P,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:S(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...C)=>{const N=C.length?C[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=N)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](N),a&&ot(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const f=X(n.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),J(),F()}m(c)}class Ft{$destroy(){ct(this,1),this.$destroy=P}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!L(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Tt as A,Dt as B,ct as C,H as D,St as E,ut as F,R as G,st as H,at as I,_t as J,ft as K,gt as L,ht as M,At as N,jt as O,dt as P,M as Q,Nt as R,Ft as S,wt as T,X as a,V as b,xt as c,U as d,W as e,vt as f,mt as g,tt as h,zt as i,bt as j,pt as k,yt as l,$t as m,P as n,Mt as o,Pt as p,Ot as q,it as r,lt as s,A as t,Ct as u,kt as v,Et as w,qt as x,Bt as y,rt as z};