"use strict";(self.webpackChunktech_task=self.webpackChunktech_task||[]).push([[34],{34:function(e,r,n){n.r(r),n.d(r,{default:function(){return C}});var t=n(433),i=n(439),a=n(791),o=n(184),s=function(e){var r=e.children,n=e.className;return(0,o.jsx)("h3",{className:"text-base text-dark-100 font-medium ".concat(n),children:r})},l=function(e){var r=e.children;return(0,o.jsx)("span",{className:"text-tags text-dark-50 after:content-[''] after:block after:w-px after:h-[16px] after:bg-dark-10 after:mx-[6px] last:after:hidden flex items-center",children:r})},c=function(e){var r=e.children;return(0,o.jsx)("button",{className:"w-full bg-primary text-light-prime py-3 rounded-xl font-semibold hover:bg-secondary transition ease-in duration-150",children:r})};var d=n.p+"static/media/sprite.9eec0d6c74b650d83cd1a8db0634bb9b.svg",u=function(e){var r=e.isFavorite;return(0,o.jsx)("svg",{className:"fill-none stroke-light-prime w-[18px] h-[18px] hover:scale-125 transition ease-in duration-150 active:scale-100 ".concat(r?"fill-primary stroke-primary":null),children:(0,o.jsx)("use",{href:d+"#heart"})})},x=function(e){var r=e.data,n=(0,a.useState)(!1),d=(0,i.Z)(n,2),x=d[0],v=d[1],f=[].concat((0,t.Z)(null===r||void 0===r?void 0:r.address.split(",").splice(1)),[null===r||void 0===r?void 0:r.rentalCompany,null===r||void 0===r?void 0:r.type,null===r||void 0===r?void 0:r.model,null===r||void 0===r?void 0:r.id]);return(0,o.jsxs)("div",{className:"w-[274px]",children:[(0,o.jsxs)("div",{className:"mb-7",children:[(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("img",{src:null===r||void 0===r?void 0:r.img,alt:null===r||void 0===r?void 0:r.make,className:"h-cardImg rounded-[14px] mb-[14px]"}),(0,o.jsx)("button",{onClick:function(){return v(!x)},type:"button",className:"absolute top-[14px] right-[14px]",children:(0,o.jsx)(u,{isFavorite:x})})]}),(0,o.jsxs)(s,{className:"flex justify-between mb-[8px]",children:[(0,o.jsxs)("div",{children:[null===r||void 0===r?void 0:r.make," ",(null===r||void 0===r?void 0:r.model.length)<8&&(0,o.jsx)("span",{className:"text-primary",children:null===r||void 0===r?void 0:r.model}),", ",null===r||void 0===r?void 0:r.year]})," ",(0,o.jsx)("span",{children:null===r||void 0===r?void 0:r.rentalPrice})]}),(0,o.jsx)("div",{className:"flex flex-wrap",children:f.map((function(e,r){return(0,o.jsx)(l,{children:e},r)}))})]}),(0,o.jsx)(c,{children:"Learn more"})]})},v=n(413);function f(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=["children"],p=function(e){var r=e.children,n=f(e,m);return(0,o.jsx)("button",(0,v.Z)((0,v.Z)({type:"button",className:"bg:none text-primary text-base underline font-medium active:text-secondary inline-block mx-auto mt-[50px]"},n),{},{children:r}))},h=n(434),b=function(e){return e.cards.data},j=function(e){return e.cards.page},g=function(e){return e.cards.isNoMoreData},y=n(778),k=function(e){return e.root.error},N=function(e){return e.root.isLoading},w=n(530),O=function(){var e=function(){var e=(0,h.I0)(),r=(0,h.v9)(b),n=(0,h.v9)(k),t=(0,h.v9)(N),i=(0,h.v9)(j);return(0,a.useEffect)((function(){e((0,y.h)(i))}),[e,i]),{error:n,isLoading:t,cards:r}}(),r=e.error,n=e.isLoading,t=e.cards,i=function(){var e=(0,h.I0)();return{isNoMoreData:(0,h.v9)(g),onClick:function(){e((0,w.bh)())}}}(),s=i.onClick,l=i.isNoMoreData;return(0,o.jsxs)("div",{className:"flex gap-x-[29px] gap-y-[50px] w-container mx-auto flex-wrap",children:[n&&"Loading...",t&&t.map((function(e){return(0,o.jsx)(x,{data:e},e.id)})),r&&(0,o.jsxs)("div",{children:["Something went wrong! ",(0,o.jsx)("br",{})," error"]}),!l&&(0,o.jsx)(p,{onClick:s,children:"Load more"})]})},C=function(){return(0,o.jsx)("div",{children:(0,o.jsx)(O,{})})}}}]);
//# sourceMappingURL=34.20572c2f.chunk.js.map