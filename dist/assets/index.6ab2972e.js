import{u as a,r as d,j as i,a as e,L as p,O as F,b as m,_ as o,c as g,R as y,d as c,e as C,f as D,B as _}from"./vendor.26fc5c6c.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function f(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=f(r);fetch(r.href,n)}};v();const B="_container_1ldj7_1",E="_text_1ldj7_19";var h={container:B,text:E},b=()=>{const u=a();d.exports.useEffect(()=>{console.log("layout render")});const t=()=>{u(-1)};return i("div",{className:h.container,children:[i("main",{children:[i("header",{children:[e(p,{onClick:t}),e("span",{className:h.text,children:"\u5934\u90E8"})]}),i("section",{children:[e("h3",{children:"\u7F51\u7AD9\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\u3002\u3002\u3002"}),e(F,{})]})]}),e("footer",{children:e("a",{href:"http://beian.miit.gov.cn/",target:"_blank",children:"\u8C6BICP\u59072021036443\u53F7-1"})})]})};const x="_container_s74z7_1",N="_border_b_s74z7_1";var O={container:x,border_b:N};function k(){d.exports.useState("");let u=m(),t=a();return i("div",{className:O.container,children:[e("h3",{children:"\u9996\u9875"}),e("h4",{children:"\u767E\u5EA6\u6D4B\u8BD5 \u6240\u6709\u8DEF\u7531\u5FC5\u987Breplace:true"}),e(o,{onClick:()=>t("/page1/\u767E\u5EA6",{replace:!0}),children:"replace: true"}),e("h4",{children:"sarafi\u6D4B\u8BD5"}),e(o,{onClick:()=>t("/page1/1"),children:"replace: false"}),e("h4",{children:"\u539F\u751F\u8DF3\u8F6C"}),e(o,{onClick:()=>{u.href="/page1/1"},children:"location.href"}),i("h3",{children:["history.length: ",history.length]}),i("h3",{children:["history.state: ",JSON.stringify(history.state)]})]})}var L=()=>{let{id:u}=g();const t=a();return i("div",{children:[e("h1",{children:"Page1 \u9875\u9762"}),"id: ",u,e("h4",{children:"\u767E\u5EA6\u6D4B\u8BD5 replace:true"}),e(o,{onClick:()=>t("/"),children:"na('/')\u8DF3\u8F6C\u9996\u9875"}),e("h4",{children:"sarafi\u6D4B\u8BD5"}),e(o,{onClick:()=>t("/"),children:"na('/')\u8DF3\u8F6C\u9996\u9875"}),e("h4",{children:"\u539F\u751F\u8DF3\u8F6C"}),e(o,{onClick:()=>{location.href="/"},children:"location.href"}),i("h3",{children:["history.length: ",history.length]}),i("h3",{children:["history.state: ",JSON.stringify(history.state)]})]})},A=()=>e("div",{children:"\u54CE\u5440\uFF0C\u7A0B\u5E8F\u5458\u5C0F\u59D0\u59D0\u7761\u7740\u4E86\uFF01"});function j(){return e("div",{children:e(y,{children:i(c,{path:"/",element:e(b,{}),children:[e(c,{index:!0,element:e(k,{})}),e(c,{path:"page1/:id",element:e(L,{})}),e(c,{path:"*",element:e(A,{})})]})})})}new window.VConsole;C.render(e(D.StrictMode,{children:e(_,{children:e(j,{})})}),document.getElementById("root"));
