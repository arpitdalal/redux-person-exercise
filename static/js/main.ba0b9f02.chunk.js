(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[0],{14:function(e,n,t){e.exports=t(30)},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),c=t.n(o),u=t(2),i=t(4),l=(t(25),t(26),t(10)),s=t(11),p=t(13),m=t(12),d=(t(27),function(e){var n=e.personAdded;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:n},r.a.createElement("span",null,"Add Person ")))}),v=(t(28),function(e){e.id;var n=e.name,t=e.age,a=e.clicked;return r.a.createElement("div",{className:"person",onClick:a},r.a.createElement("div",{className:"personName"},n),r.a.createElement("div",null,"Age: ",t))}),f=(t(29),function(e){var n=e.name,t=e.onChange,a=e.placeholder;return r.a.createElement("input",{type:"text",name:n,onChange:function(e){return t(e)},placeholder:a})}),g=function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{name:"name",placeholder:"Name",onChange:function(n){return e.props.onAddName(n.target.value)}}),r.a.createElement(f,{name:"age",placeholder:"Age",onChange:function(n){return e.props.onAddAge(n.target.value)}}),r.a.createElement(d,{personAdded:function(){return e.props.onAddPerson({name:e.props.name,age:e.props.age})}}),(this.props.persons||[]).map((function(n){return r.a.createElement(v,{key:n.id,name:n.name,age:n.age,clicked:function(){e.props.onRemovePerson(n.id)}})})))}}]),t}(a.Component),h=Object(i.b)((function(e){return{persons:e.action.persons,name:e.input.name,age:e.input.age}}),(function(e){return{onAddPerson:function(n){return e({type:"ADD_PERSON",value:n})},onRemovePerson:function(n){return e({type:"REM_PERSON",value:n})},onAddName:function(n){return e({type:"ADD_NAME",value:n})},onAddAge:function(n){return e({type:"ADD_AGE",value:n})}}}))(g);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(1),b={name:"",age:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_NAME":return Object(A.a)(Object(A.a)({},e),{},{name:n.value});case"ADD_AGE":return Object(A.a)(Object(A.a)({},e),{},{age:n.value});default:return e}},j={persons:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_PERSON":var t={id:Math.random(),name:n.value.name,age:n.value.age};return Object(A.a)(Object(A.a)({},e),{},{persons:e.persons.concat(t)});case"REM_PERSON":var a=e.persons.filter((function(e){return e.id!==n.value}));return Object(A.a)(Object(A.a)({},e),{},{persons:a});default:return e}},y=Object(u.b)({input:O,action:N}),D=Object(u.c)(y);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:D},r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba0b9f02.chunk.js.map