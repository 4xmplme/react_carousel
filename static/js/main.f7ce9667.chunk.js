(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),s=n(1),c=n(6),r=n(2),u=(n(11),n(4)),l=n.n(u),m=(n(12),n(0)),o=function(e){var t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,s=e.animationDuration,c=e.infinite,r=e.currentImage,u=e.setCurrentImage,o=n*a,p=r*n,b=t.length-a;var j=0===r&&!c,d=r===b&&!c;return Object(m.jsxs)("div",{className:"Carousel",style:{width:"".concat(o,"px"),transition:"".concat(s,"ms")},children:[Object(m.jsx)("ul",{className:"Carousel__list",children:t.map((function(e,t){return Object(m.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(-".concat(p,"px)"),transition:"".concat(s,"ms")},children:Object(m.jsx)("img",{src:e,alt:"".concat(t+1),width:n,className:"Carousel__image",style:{transition:"".concat(s,"ms")}})},e)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons",children:[Object(m.jsx)("button",{type:"button",disabled:j,className:l()("Carousel__button",{"Carousel__button--disabled":j}),onClick:function(){var e=r-i;return u(0===r?b:e<0?0:e)},children:"\u2190"}),Object(m.jsx)("button",{type:"button","data-cy":"next",disabled:d,className:l()("Carousel__button",{"Carousel__button--disabled":d}),onClick:function(){var e=r+i;return u(r===b?0:e>b?b:e)},children:"\u2192"})]})]})},p=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],b=function(){var e=Object(r.useState)({itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1,currentImage:0}),t=Object(c.a)(e,2),n=t[0],a=t[1],i=n.itemWidth,u=n.frameSize,l=n.step,b=n.animationDuration,j=n.infinite,d=n.currentImage;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(p.length," images")}),Object(m.jsxs)("div",{className:"App__settings",children:[Object(m.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item width:",Object(m.jsx)("input",{type:"number",min:"70",max:"260",step:"5",value:i,id:"itemId",className:"App__input",onChange:function(e){return a((function(t){return Object(s.a)(Object(s.a)({},t),{},{itemWidth:+e.target.value})}))}})]}),Object(m.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame size:",Object(m.jsx)("input",{type:"number",min:"1",max:"10",step:"1",value:u,id:"frameId",className:"App__input",onChange:function(e){return a((function(t){return Object(s.a)(Object(s.a)({},t),{},{frameSize:+e.target.value})}))}})]}),Object(m.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step:",Object(m.jsx)("input",{type:"number",min:"1",max:"3",step:"1",value:l,id:"stepId",className:"App__input",onChange:function(e){return a((function(t){return Object(s.a)(Object(s.a)({},t),{},{step:+e.target.value})}))}})]}),Object(m.jsxs)("label",{className:"App__label",children:["Animation duration:",Object(m.jsx)("input",{type:"number",min:"0",max:"5000",step:"500",value:b,className:"App__input",onChange:function(e){return a((function(t){return Object(s.a)(Object(s.a)({},t),{},{animationDuration:+e.target.value})}))}})]}),Object(m.jsxs)("label",{className:"App__label",children:["Infinite:",Object(m.jsx)("input",{type:"checkbox",className:"App__switch",onChange:function(){return a((function(e){return Object(s.a)(Object(s.a)({},e),{},{infinite:!e.infinite})}))}})]})]}),Object(m.jsx)(o,{images:p,itemWidth:i,frameSize:u,step:l,animationDuration:b,infinite:j,currentImage:d,setCurrentImage:function(e){return a((function(t){return Object(s.a)(Object(s.a)({},t),{},{currentImage:e})}))}})]})};i.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f7ce9667.chunk.js.map