(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{15:function(e,n,t){e.exports=t(27)},20:function(e,n,t){},21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(20),t(3)),l=t(1),s=(t(21),t(2));function u(){var e=Object(l.a)(["\n  background: white;\n  text-align: center;\n  padding: 10px 0;\n  border-radius: 8px;\n  width: 80px;\n  small {\n    color: #2A45C2;\n    text-transform: uppercase;\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 1px;\n  }\n  p {\n    color: #565468;\n    font-size: 40px;\n    margin: 0;\n    font-weight: 700;\n    position: relative;\n  }\n"]);return u=function(){return e},e}var p=s.a.div(u());var m=function(){var e=Object(r.useContext)(Y).score;return(a.a.createElement(p,null,a.a.createElement("small",null,"Score"),a.a.createElement("p",null,e)))};function f(){var e=Object(l.a)(["\n  color: white;\n  padding: 12px 12px 12px 23px;\n  border-radius: .5em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 3px solid rgba(255, 255,255, .29);\n  h1 {\n    font-size: 18px;\n    line-height: 16px;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n"]);return f=function(){return e},e}var d=s.a.div(f());var g=function(){return a.a.createElement(d,null,a.a.createElement("h1",null,"Rock ",a.a.createElement("br",null)," Paper ",a.a.createElement("br",null),"  Scissors"),a.a.createElement(m,null))};function b(){var e=Object(l.a)(["\n  max-width: 1024px;\n  margin: auto;\n"]);return b=function(){return e},e}var x=s.a.div(b());var v=function(e){var n=e.children;return(a.a.createElement(x,null,n))},h=t(6),E=t.n(h),w=t(13);function j(){var e=Object(l.a)(["\n  width: 130px;\n  height: 125px;\n  padding: ",";\n  border: 16px solid ",";\n  box-sizing: border-box;\n  border-radius: 50%;\n  display: flex;\n  box-shadow: 0 5px 0 ",";\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:active {\n    transform: scale(.9);\n  }\n  .box {\n    background: ",";\n    box-shadow: 0 -4px 0 ",";\n    flex: 1;\n    align-self: stretch;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return j=function(){return e},e}var k=s.a.div(j(),(function(e){return"default"===e.name?"16px":"0"}),(function(e){return e.color.base}),(function(e){return e.color.border}),(function(e){return"default"===e.name?"#122343":"white"}),(function(e){return"default"===e.name?"transparent":"#BABFD4"})),O={paper:{base:"#516ef4",border:"#2543c3"},rock:{base:"#de3a5a",border:"#980e31"},scissors:{base:"#eca81e",border:"#c76c14"},default:{base:"trasparent",border:"trasparent"}};var y=function(e){var n=e.name,t=void 0===n?"default":n,r=e.onClick,o=O[t];return a.a.createElement(k,{color:o,onClick:function(){r&&r(t)},name:t},a.a.createElement("div",{className:"box"},a.a.createElement("img",{src:"./images/icon-".concat(t,".svg"),alt:""})))},C=t(14);function S(){var e=Object(l.a)(["\n  background: white;\n  color: #101a3f;\n  min-width: 220px;\n"]);return S=function(){return e},e}function z(){var e=Object(l.a)(["\n  display: inline-flex;\n  border: 1px solid white;\n  border-radius: .5em;\n  min-width: 128px;\n  padding: .7em;\n  box-sizing: border-box;\n  justify-content: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n"]);return z=function(){return e},e}var N=s.a.div(z());var B=Object(s.a)(N)(S()),P=function(e){var n=e.children,t=Object(C.a)(e,["children"]);return(a.a.createElement(N,t,n))};function F(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 130px 130px;\n  justify-content: center;\n  justify-items: center;\n  grid-gap: 30px 50px;\n  margin: 2em 0;\n  position: relative;\n  & div:nth-of-type(3) {\n    grid-column: span 2;\n  }\n  .in-game {\n    text-align: center;\n    text-transform: uppercase;\n    font-size: .8em;\n    font-weight: 700;\n    letter-spacing: 1px;\n  }\n  .results {\n    text-align: center;\n    h2 {\n      text-transform: uppercase;\n    }\n  }\n  .line {\n    display: ",";\n    height: 14px;\n    background: rgba(0,0,0,.2);\n    position: absolute;\n    left: 60px;\n    right: 60px;\n    top: 58px;\n    &:before {\n      content: '';\n      height: 14px;\n      background: rgba(0,0,0,.2);\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      transform: rotate(60deg);\n      transform-origin: left top;\n    }\n\n    &:after {\n      content: '';\n      height: 14px;\n      background: rgba(0,0,0,.2);\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      transform: rotate(-60deg);\n      transform-origin: right top;\n    }\n  }\n"]);return F=function(){return e},e}var R=s.a.div(F(),(function(e){return e.playing?"none":"block"})),A=["paper","scissors","rock"];var I=function(){var e=Object(r.useContext)(Y),n=e.score,t=e.setScore,o=Object(r.useState)(""),i=Object(c.a)(o,2),l=i[0],s=i[1],u=Object(r.useState)("default"),p=Object(c.a)(u,2),m=p[0],f=p[1],d=Object(r.useState)(!1),g=Object(c.a)(d,2),b=g[0],x=g[1],v=Object(r.useState)(""),h=Object(c.a)(v,2),j=h[0],k=h[1];function O(){return new Promise((function(e,n){var t,r=setInterval((function(){var e,n;t=A[(e=0,n=3,Math.floor(Math.random()*(n-e))+e)],f(t)}),75);setTimeout((function(){clearInterval(r),e(t)}),2e3)}))}function C(e){return S.apply(this,arguments)}function S(){return(S=Object(w.a)(E.a.mark((function e(r){var a,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),k(r),e.next=4,O();case 4:a=e.sent,o=z(r,a),s(o),"win"===o&&t(n+1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,n){if(n===e)return"draw";if("paper"===e){if("scissors"===n)return"lose";if("rock"===n)return"win"}if("scissors"===e){if("paper"===n)return"win";if("rock"===n)return"lose"}if("rock"===e){if("paper"===n)return"lose";if("scissors"===n)return"win"}}return a.a.createElement(R,{playing:b},a.a.createElement("span",{className:"line"}),b?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"in-game"},a.a.createElement(y,{name:j}),a.a.createElement("p",null,"You Picked")),a.a.createElement("div",{className:"in-game"},a.a.createElement(y,{name:m}),a.a.createElement("p",null,"The house Picked")),a.a.createElement("div",{className:"results"},a.a.createElement("h2",null,"YOU ",l),a.a.createElement(B,{onClick:function(){x(!1)}},"Try Again"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{name:"paper",onClick:C}),a.a.createElement(y,{name:"scissors",onClick:C}),a.a.createElement(y,{name:"rock",onClick:C})))};function M(){var e=Object(l.a)(["\n  text-align: center;\n  .close-button {\n    margin-top: 2em;\n  }\n  .rules-overlay {\n    background: white;\n    padding: 4em 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n    h2 {\n      color: #3B4262;\n      text-transform: uppercase;\n      font-weight: 700;\n      letter-spacing: -2px;\n      margin-bottom: 1em;\n    }\n  }\n"]);return M=function(){return e},e}var T=s.a.div(M());var J=function(){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),t=n[0],o=n[1];function i(){o(!t)}return(a.a.createElement(T,null,t&&a.a.createElement("div",{className:"rules-overlay"},a.a.createElement("h2",null,"Rules"),a.a.createElement("img",{src:"./images/image-rules.svg",alt:"Game Rules"}),a.a.createElement("img",{className:"close-button",onClick:i,src:"./images/icon-close.svg",alt:"Close the game rules"})),a.a.createElement(P,{onClick:i},"Rules")))};function W(){var e=Object(l.a)(["\n  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);\n  color: white;\n  font-family: 'Barlow Semi Condensed', sans-serif;\n\n  .app-content {\n    padding: 2em;\n    min-height: 100vh;\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n"]);return W=function(){return e},e}var Y=Object(r.createContext)(),D=s.a.main(W());var G=function(){var e=Object(r.useState)(0),n=Object(c.a)(e,2),t=n[0],o=n[1];return(a.a.createElement(Y.Provider,{value:{score:t,setScore:o}},a.a.createElement(D,null,a.a.createElement(v,null,a.a.createElement("div",{className:"app-content"},a.a.createElement(g,null),a.a.createElement(I,null),a.a.createElement(J,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e81f5a67.chunk.js.map