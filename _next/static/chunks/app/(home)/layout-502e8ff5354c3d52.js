(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{2439:function(e,r,l){Promise.resolve().then(l.bind(l,6513)),Promise.resolve().then(l.bind(l,2692))},6513:function(e,r,l){"use strict";l.r(r),l.d(r,{default:function(){return a}});var s=l(7437),t=l(7042),n=l(4033);function a(e){let{work:r}=e,l=(0,n.useRouter)();return(0,s.jsxs)("div",{className:"hover:cursor-pointer break-inside-avoid",onClick:()=>{l.push(r.title.replaceAll(" ","-"),{scroll:!1})},children:[(0,s.jsx)("div",{className:(0,t.Z)("w-full bg-slate-400",0==~~(10*Math.random()%2)?"h-32":0==~~(10*Math.random()%2)?"h-44":"h-40")}),r.title]})}},2692:function(e,r,l){"use strict";l.r(r),l.d(r,{default:function(){return x}});var s=l(7437),t=l(2265),n=l(7250),a=l(7042),i=l(4769);function d(){for(var e=arguments.length,r=Array(e),l=0;l<e;l++)r[l]=arguments[l];return(0,i.m6)((0,a.W)(r))}let o=e=>{let{shouldScaleBackground:r=!0,...l}=e;return(0,s.jsx)(n.d.Root,{shouldScaleBackground:r,...l})};o.displayName="Drawer",n.d.Trigger;let u=n.d.Portal,c=n.d.Close,f=t.forwardRef((e,r)=>{let{className:l,...t}=e;return(0,s.jsx)(n.d.Overlay,{ref:r,className:d("fixed inset-0 z-50 bg-black/80",l),...t})});f.displayName=n.d.Overlay.displayName;let m=t.forwardRef((e,r)=>{let{className:l,children:t,...a}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(n.d.Content,{ref:r,className:d("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col bg-background",l),...a,children:t})]})});m.displayName="DrawerContent",t.forwardRef((e,r)=>{let{className:l,...t}=e;return(0,s.jsx)(n.d.Title,{ref:r,className:d("text-lg font-semibold leading-none tracking-tight",l),...t})}).displayName=n.d.Title.displayName,t.forwardRef((e,r)=>{let{className:l,...t}=e;return(0,s.jsx)(n.d.Description,{ref:r,className:d("text-sm text-muted-foreground",l),...t})}).displayName=n.d.Description.displayName;var h=l(4033);function x(e){let{children:r}=e,l=(0,t.useRef)(null),n=(0,h.useRouter)(),a=(0,h.useParams)(),[i,d]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{var e,r;a.work&&(null!==(r=null===(e=l.current)||void 0===e?void 0:e.clientWidth)&&void 0!==r?r:0)>0&&d(!0)},[a]),a.work)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:l,className:"sm:hidden",children:(0,s.jsx)(o,{open:i,onOpenChange:async e=>{e||(d(!1),await new Promise(e=>setTimeout(e,200)),n.push("/"))},dismissible:!1,children:(0,s.jsxs)(m,{className:"w-full h-full",children:[(0,s.jsx)(c,{children:"close"}),r]})})}),(0,s.jsx)("div",{className:"hidden sm:block w-full h-full",children:r})]}):(0,s.jsx)(s.Fragment,{children:r})}}},function(e){e.O(0,[852,971,938,744],function(){return e(e.s=2439)}),_N_E=e.O()}]);