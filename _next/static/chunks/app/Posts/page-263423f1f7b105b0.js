(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{1854:(e,s,t)=>{Promise.resolve().then(t.bind(t,8393))},8393:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var l=t(7437),r=t(2265);let c=function(){let[e,s]=(0,r.useState)([]),[t,c]=(0,r.useState)(!0),[a,n]=(0,r.useState)(null),o=async()=>{try{let e=await fetch("https://jsonplaceholder.typicode.com/posts");if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));let t=await e.json();s(t.slice(0,10))}catch(e){console.error(e.message),n(e.message)}finally{c(!1)}};return((0,r.useEffect)(()=>{o()},[]),t)?(0,l.jsx)("p",{children:"Loading..."}):a?(0,l.jsxs)("p",{children:["Error: ",a]}):(0,l.jsxs)("div",{className:"px-4 py-12 flex flex-col justify-center items-center",children:[(0,l.jsx)("h2",{className:"text-center text-3xl font-bold my-8",children:"Otros Art\xedculos"}),(0,l.jsx)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center",children:e.map(e=>(0,l.jsxs)("div",{className:"m-4 p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center max-w-xs",children:[(0,l.jsx)("h3",{className:"text-2xl font-semibold my-4",children:e.title}),(0,l.jsx)("p",{className:"text-gray-700",children:e.body})]},e.id))})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[130,215,744],()=>s(1854)),_N_E=e.O()}]);