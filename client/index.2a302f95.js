import{S as s,i as t,s as e,a,e as o,t as r,c as n,b as c,d as l,f,g as h,h as p,j as i,m,k as g}from"./client.0ed02afc.js";import v from"./BackToTop.ce93f4a7.js";function u(s,t,e){const a=Object.create(s);return a.post=t[e],a.index=e,a}function d(s){var t;return{c(){t=o("hr"),this.h()},l(s){t=c(s,"HR",{class:!0},!1),l(t).forEach(f),this.h()},h(){t.className="svelte-ffk8g2"},m(s,e){h(s,t,e)},d(s){s&&f(t)}}}function $(s){var t,e,m,g,v,u,$,E,x,N,j,k,b,D,B=s.post.title,H=s.post.excerpt,I=s.post.printDate,V=s.index&&d();return{c(){V&&V.c(),t=a(),e=o("div"),m=o("h2"),g=o("a"),v=r(B),$=a(),E=o("p"),x=r(H),N=a(),j=o("div"),k=o("span"),b=r("— "),D=r(I),this.h()},l(s){V&&V.l(s),t=n(s,"\n  "),e=c(s,"DIV",{class:!0},!1);var a=l(e);m=c(a,"H2",{class:!0},!1);var o=l(m);g=c(o,"A",{rel:!0,href:!0},!1);var r=l(g);v=n(r,B),r.forEach(f),o.forEach(f),$=n(a,"\n    "),E=c(a,"P",{},!1);var h=l(E);x=n(h,H),h.forEach(f),N=n(a,"\n    "),j=c(a,"DIV",{class:!0},!1);var p=l(j);k=c(p,"SPAN",{class:!0},!1);var i=l(k);b=n(i,"— "),D=n(i,I),i.forEach(f),p.forEach(f),a.forEach(f),this.h()},h(){g.rel="prefetch",g.href=u="blog/"+s.post.slug,m.className="svelte-ffk8g2",k.className="post-item-date svelte-ffk8g2",j.className="post-item-footer svelte-ffk8g2",e.className="post-item"},m(s,a){V&&V.m(s,a),h(s,t,a),h(s,e,a),p(e,m),p(m,g),p(g,v),p(e,$),p(e,E),p(E,x),p(e,N),p(e,j),p(j,k),p(k,b),p(k,D)},p(s,e){e.index?V||((V=d()).c(),V.m(t.parentNode,t)):V&&(V.d(1),V=null),s.posts&&B!==(B=e.post.title)&&i(v,B),s.posts&&u!==(u="blog/"+e.post.slug)&&(g.href=u),s.posts&&H!==(H=e.post.excerpt)&&i(x,H),s.posts&&I!==(I=e.post.printDate)&&i(D,I)},d(s){V&&V.d(s),s&&(f(t),f(e))}}}function E(s){for(var t,e,i,d,E,x,N,j=s.posts,k=[],b=0;b<j.length;b+=1)k[b]=$(u(s,j,b));var D=new v({});return{c(){t=a(),e=o("div"),i=o("h1"),d=r("Blog"),E=a();for(var s=0;s<k.length;s+=1)k[s].c();x=a(),D.$$.fragment.c(),this.h()},l(s){t=n(s,"\n\n"),e=c(s,"DIV",{class:!0},!1);var a=l(e);i=c(a,"H1",{},!1);var o=l(i);d=n(o,"Blog"),o.forEach(f),E=n(a,"\n  ");for(var r=0;r<k.length;r+=1)k[r].l(a);x=n(a,"\n  "),D.$$.fragment.l(a),a.forEach(f),this.h()},h(){document.title="Blog",e.className="container"},m(s,a){h(s,t,a),h(s,e,a),p(e,i),p(i,d),p(e,E);for(var o=0;o<k.length;o+=1)k[o].m(e,null);p(e,x),m(D,e,null),N=!0},p(s,t){if(s.posts){j=t.posts;for(var a=0;a<j.length;a+=1){const o=u(t,j,a);k[a]?k[a].p(s,o):(k[a]=$(o),k[a].c(),k[a].m(e,x))}for(;a<k.length;a+=1)k[a].d(1);k.length=j.length}},i(s){N||(D.$$.fragment.i(s),N=!0)},o(s){D.$$.fragment.o(s),N=!1},d(s){s&&(f(t),f(e)),g(k,s),D.$destroy()}}}function x({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function N(s,t,e){let{posts:a}=t;return s.$set=s=>{"posts"in s&&e("posts",a=s.posts)},{posts:a}}export default class extends s{constructor(s){super(),t(this,s,N,E,e,["posts"])}}export{x as preload};
