(function(){"use strict";var n={4773:function(n,t,e){var o,r,i,u=e(6369),c=function(){var n=this,t=n._self._c,e=n._self._setupProxy;return t(e.BabylonScene)},a=[],s=function(){var n=this,t=n._self._c;return t("canvas",{ref:"bjsCanvas",attrs:{id:"renderCanvas"}})},f=[],l=e(9715);e(2661);const v=n=>{o=new l.D4V(n),r=new l.xsS(o),p(),d(n),b(),o.runRenderLoop((()=>{r.render()}))};var p=function(){l.n0n.ImportMeshAsync("","https://kakerucode0233.github.io/models/","room.glb",r)},d=function(n){i=new l.dLo("vrCam",new l.Pa4(0,0,0),r),r.onPointerDown=function(){r.onPointerDown=void 0,i.attachControl(n,!0),i.inputs.attached.virtualJoystick.getLeftJoystick().setJoystickSensibility(.02),i.inputs.attached.virtualJoystick.getRightJoystick().setJoystickSensibility(.02)}},b=function(){var n=new l.cek("pointLight",new l.Pa4(0,1.3,-.1),r);n.diffuse=new l.Wot(1,.7,.6),n.specular=new l.Wot(1,0,0)},h={name:"BabylonScene",setup(){const n=(0,u.iH)(null);return(0,u.bv)((()=>{n.value&&v(n.value)})),{bjsCanvas:n}}},y=h,w=e(1001),g=(0,w.Z)(y,s,f,!1,null,null,null),k=g.exports,_={__name:"App",setup(n){return{__sfc:!0,BabylonScene:k}}},m=_,O=(0,w.Z)(m,c,a,!1,null,null,null),P=O.exports;u.ZP.config.productionTip=!1,new u.ZP({render:n=>n(P)}).$mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var u=1/0;for(f=0;f<n.length;f++){o=n[f][0],r=n[f][1],i=n[f][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,u=o[0],c=o[1],a=o[2],s=0;if(u.some((function(t){return 0!==n[t]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(a)var f=a(e)}for(t&&t(o);s<u.length;s++)i=u[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(f)},o=self["webpackChunkbabylon_demo"]=self["webpackChunkbabylon_demo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(4773)}));o=e.O(o)})();
//# sourceMappingURL=app.39493cd5.js.map