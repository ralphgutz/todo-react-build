(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=n(7),o=n(3),i=(n(5),function(e){var t=e.todo,n=e.handleSubmit,a=e.handleOnchange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Todo App")),l.a.createElement("form",{onSubmit:n},l.a.createElement("input",{type:"text",value:t,placeholder:"Enter an activity",onChange:a,autoFocus:!0}),l.a.createElement("button",null,"Add")))}),m=(n(13),function(e){var t=e.index,n=e.text,a=e.editFunc,r=e.deleteFunc;return l.a.createElement("div",{key:t,className:"item"},l.a.createElement("p",null,n),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return a(t)},title:"Edit"},l.a.createElement("i",{class:"fa fa-pencil-square-o","aria-hidden":"true"})),l.a.createElement("button",{onClick:function(){return r(t)},title:"Delete"},l.a.createElement("i",{class:"fa fa-trash","aria-hidden":"true"}))))}),s=function(){var e=Object(a.useRef)(!0),t=localStorage.getItem("todos"),n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],d=Object(a.useState)(e?JSON.parse(t):[]),f=Object(o.a)(d,2),E=f[0],p=f[1];Object(a.useLayoutEffect)((function(){e.current&&(e.current=!1)})),Object(a.useEffect)((function(){localStorage.setItem("todos",[JSON.stringify(E)])}),[E]);var h=function(){return p(Object(u.a)(E))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{todo:c,handleSubmit:function(e){e.preventDefault(),c&&(E.push(c),h()),s("")},handleOnchange:function(e){return s(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"todo-container"},l.a.createElement("p",null,"What to do:"),E?E.map((function(e,t){return l.a.createElement(m,{key:t,text:e,editFunc:function(){return function(e){var t=prompt("Enter change:",E[e]);null!==t&&t.length>0&&p([E.splice(e,1,t)]),h()}(t)},deleteFunc:function(){return function(e){E.splice(e,1),h()}(t)}})})):null,l.a.createElement("div",{className:"clear"},E.length>0?l.a.createElement("button",{onClick:function(){window.confirm("Clear all entries?")&&p([])},title:"Clear all entries"},"Clear"):null)))};c.a.render(l.a.createElement(s,null),document.getElementById("root"))},5:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.26d14e09.chunk.js.map