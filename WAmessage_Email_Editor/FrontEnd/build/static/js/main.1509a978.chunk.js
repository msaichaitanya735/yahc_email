(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(26),c=n.n(s),o=(n(52),n(53),n(92)),a=n(93),l=n(10),d=n(4),p=n(19),u=n(14),j=n.n(u),h=n(1),b=function(e){var t=Object(i.useRef)(null);return Object(h.jsxs)("div",{children:[Object(h.jsx)(p.a,{ref:t}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(h.jsx)("button",{style:{backgroundColor:"#222222",color:"white"},onClick:function(){console.log(t.current),t.current.editor.exportHtml((function(e){e.design;var t=e.html;console.log("exportHtml",t)})),t.current.saveDesign((function(e){console.log("saveDesign",e);var t={title:JSON.stringify(e)};console.log("stringified",t.title),j.a.post("http://localhost:5000/api/posts",t)}))},children:"Save Template"}),Object(h.jsx)("button",{style:{backgroundColor:"#222222",color:"white"},className:"",onClick:function(){t.current.editor.exportHtml((function(e){e.design;var t=e.html;console.log("exportHtml",t)}))},children:"Export HTML"})]})]})},x=n(13),f=n.n(x),m=n(15),O=n(16),g=n(17),v=n(20),y=n(18),w=n(46),C=n(44),k=n.n(C),S=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var i;return Object(O.a)(this,n),(i=t.call(this,e)).emailEditorRef=r.a.createRef(),i.state={temps:[],x:[]},i}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({temps:n[this.props.id]}),console.log(this.state.temps);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(p.a,{ref:this.emailEditorRef,onLoad:function(){console.log(e.props.id),void 0!==e.editor?e.emailEditorRef.current.loadDesign(JSON.parse(e.state.temps.title)):(console.log("biscuit"),setTimeout((function(){return e.emailEditorRef.current.loadDesign(JSON.parse(e.state.temps.title))}),1e3))}}),console.log("in tempeditor id is",this.props.id),Object(h.jsx)("button",{onClick:function(){console.log(e.emailEditorRef.current),e.emailEditorRef.current.editor.exportHtml((function(e){e.design;var t=e.html;console.log("exportHtml",t)})),e.emailEditorRef.current.saveDesign((function(t){console.log("saveDesign",t);var n={title:JSON.stringify(t)};console.log("stringified",n.title),console.log("id:",e.state.temps._id),j.a.put("http://localhost:5000/api/post?id=".concat(e.state.temps._id),n)}))},style:{backgroundColor:"#222222",color:"white",marginLeft:"45%"},children:"Save Template"})]})}}]),n}(r.a.Component),T=function(e){var t=Object(i.useState)(!0),n=Object(w.a)(t,2),r=n[0],s=n[1];return Object(h.jsxs)(k.a,{isOpen:r,aria:{labelledby:"heading",describedby:"full_description"},children:[Object(h.jsx)("h1",{id:"heading",children:"Template Editor"}),Object(h.jsxs)("div",{id:"full_description",children:[Object(h.jsx)(S,{id:e.id}),Object(h.jsx)(l.b,{to:"/templateslist",children:Object(h.jsx)(o.a,{onClick:function(){return s(!1)},style:{color:"white",marginTop:"10px",marginLeft:"46%"},children:"Close"})})]})]})},E=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(O.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={temps:[],modalShow:!1},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({temps:n}),console.log(this.state.temps);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"20px",alignItems:"stretch",marginTop:"10px"},children:this.state.temps.map((function(e,t){return Object(h.jsx)("div",{className:"card",style:{width:"18rem",border:"black solid 1px",borderRadius:"15px",boxShadow:"0px 0px 10px 0.8px #ece4e4"},children:Object(h.jsxs)("div",{className:"card-body",style:{textAlign:"center"},children:[Object(h.jsxs)("h5",{className:"card-title",children:["Template ",t+1," "]}),Object(h.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:"Data"}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(l.b,{to:"/tempeditor",children:Object(h.jsx)(o.a,{children:"Edit"})}),Object(h.jsx)(d.a,{path:"/tempeditor",children:Object(h.jsx)(T,{id:t},e)})]})]})})}))})}}]),n}(r.a.Component),D=function(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)(a.a,{style:{justify_content:" center"},children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center",border:"solid 1px white",flex:"wrap"},children:[Object(h.jsx)(l.b,{to:"/editor",style:{flex:"1"},children:Object(h.jsx)(o.a,{style:{width:"100%",border:"solid 1px white"},children:"Create Template"})}),Object(h.jsx)(l.b,{to:"/templateslist",style:{flex:"1"},children:Object(h.jsx)(o.a,{style:{width:"100%",border:"solid 1px white"},children:"Templates"})})]}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/editor",children:Object(h.jsx)(b,{})}),Object(h.jsx)(d.a,{path:"/templateslist",children:Object(h.jsx)(E,{})})]})]})})};var R=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(D,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),N()}},[[91,1,2]]]);
//# sourceMappingURL=main.1509a978.chunk.js.map