(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),r=n(12),o=n.n(r),s=(n(98),n(71)),l=n(15),d=n(11),u=n(22),j=n(80),b=n.n(j),p=n(145),m=n(33),O=n(148),f=n(149),h=n(150),x=n(59),g=n(151),v=n(82),y=n(153),C=n(154),k=n(2),N=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({},e.breakpoints.down("sm"),{flexGrow:1}),flex:{display:"flex",flex:1,alignItems:"center",justifyContent:"center"},mobile:{flex:1}}})),w=Object(l.f)((function(e){var t=e.history,n=N(),c=i.a.useState(null),a=Object(d.a)(c,2),r=a[0],o=a[1],s=Boolean(r),l=Object(m.a)(),u=Object(O.a)(l.breakpoints.down("sm")),j=function(e){t.push(e),o(null)};return Object(k.jsx)("div",{className:n.root,children:Object(k.jsx)(f.a,{position:"static",children:Object(k.jsx)(h.a,{className:n.flex,children:Object(k.jsx)("div",{className:n.mobile,children:u?Object(k.jsxs)("div",{className:n.flex,children:[Object(k.jsx)(x.a,{variant:"h6",className:n.title,children:"RICK AND MORTY"}),Object(k.jsx)(g.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){o(e.currentTarget)},children:Object(k.jsx)(b.a,{})}),Object(k.jsxs)(v.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:function(){return o(null)},children:[Object(k.jsx)(y.a,{onClick:function(){return j("/")},children:"Home"}),Object(k.jsx)(y.a,{onClick:function(){return j("/characters")},children:"Characters"}),Object(k.jsx)(y.a,{onClick:function(){return j("/episodes")},children:"Episodes"}),Object(k.jsx)(y.a,{onClick:function(){return j("/locations")},children:"Locations"}),Object(k.jsx)(y.a,{onClick:function(){return j("/my-watch-list")},children:"My Watch List"})]})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)(C.a,{label:"Home",onClick:function(){return j("/")}}),Object(k.jsx)(C.a,{label:"Characters",onClick:function(){return j("/characters")}}),Object(k.jsx)(C.a,{label:"Episodes",onClick:function(){return j("/episodes")}}),Object(k.jsx)(C.a,{label:"Locations",onClick:function(){return j("/locations")}}),Object(k.jsx)(C.a,{label:"My Watch List",onClick:function(){return j("/my-watch-list")}})]})})})})})})),S=n(84),E=n.p+"static/media/rick-morty.34267a5e.jpg",A=Object(p.a)((function(e){return{img:{width:"100%"},root:{display:"flex",flexWrap:"wrap",justifyContent:"center",backgroundColor:"#ebdeb4"},paper:{width:"80%",margin:"50px",padding:"20px",color:"#72346f",backgroundColor:"#faf8da"}}})),I=function(){var e=A();return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)("img",{src:E,alt:"cover img",className:e.img}),Object(k.jsx)(S.a,{elevation:5,className:e.paper,children:Object(k.jsx)(x.a,{variant:"h6",className:e.title,children:"\u201cNobody exists on purpose. Nobody belongs anywhere. We\u2019re all going to die. Come watch TV.\u201d \u2014 Morty"})})]})},D=n(14),W=n(37),T=n.n(W),L=n(50),P=n(24),M=Object(P.b)("characters/getCharactes",function(){var e=Object(L.a)(T.a.mark((function e(t){var n,c,a,i,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,c=t.status,a=t.gender,i=t.debouncedSpecies,r="",r+=n?"page=".concat(n):"",r+=c?"&status=".concat(c):"",r+=a?"&gender=".concat(a):"",r+=i?"&species=".concat(i):"",e.abrupt("return",fetch("https://rickandmortyapi.com/api/character/?".concat(r)).then((function(e){return e.json()})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=Object(P.c)({name:"characters",initialState:{characters:{},status:null},extraReducers:(c={},Object(u.a)(c,M.pending,(function(e,t){e.status="loading"})),Object(u.a)(c,M.fulfilled,(function(e,t){var n=t.payload;e.characters=n,e.status="success"})),Object(u.a)(c,M.rejected,(function(e,t){e.status="failed"})),c)}).reducer,B=n(155),F=n(156),G=n(157),z=n(158),H=n(152),J=n(113),K=n(159),U=n(162),_=n(160),V=n(161),X=Object(p.a)((function(e){return{root:{color:e.palette.text.secondary},media:{height:140,maxWidth:345,margin:"auto"}}})),Y=function(e){var t=e.item,n=e.type,c=X(),a=i.a.useState(!1),r=Object(d.a)(a,2),o=r[0],s=r[1];return"short"===n?Object(k.jsx)(B.a,{className:c.root,children:Object(k.jsxs)(F.a,{children:[t.image&&Object(k.jsx)(G.a,{className:c.media,image:t.image,title:t.name}),Object(k.jsxs)(z.a,{children:[t.name&&Object(k.jsxs)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[" ",t.name," "]}),t.gender&&Object(k.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:[" Gender: ",t.gender," "]}),t.species&&Object(k.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:[" Species: ",t.species," "]}),t.status&&Object(k.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:[" Status: ",t.status," "]}),t.air_date&&Object(k.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:[" Air date: ",t.air_date," "]})]})]})}):Object(k.jsx)(B.a,{className:c.root,children:Object(k.jsxs)(H.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:c.root,children:[t.name&&Object(k.jsxs)(J.a,{children:[" ",Object(k.jsx)(K.a,{primary:"Name: ".concat(t.name)})," "]}),t.type&&Object(k.jsxs)(J.a,{children:[" ",Object(k.jsx)(K.a,{primary:"Type: ".concat(t.type)})," "]}),t.dimension&&Object(k.jsxs)(J.a,{children:[" ",Object(k.jsx)(K.a,{primary:"Dimension: ".concat(t.dimension)})," "]}),t.residents.length>0&&Object(k.jsxs)(J.a,{button:!0,onClick:function(){s(!o)},children:[Object(k.jsx)(K.a,{primary:"residents"}),o?Object(k.jsx)(_.a,{}):Object(k.jsx)(V.a,{})]}),Object(k.jsx)(U.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(H.a,{component:"div",disablePadding:!0,children:t.residents.length>0&&t.residents.map((function(e,t){return Object(k.jsx)(J.a,{button:!0,className:c.nested,children:Object(k.jsx)(K.a,{primary:e})},t)}))})}),t.created&&Object(k.jsxs)(J.a,{children:[" ",Object(k.jsx)(K.a,{primary:"Created: ".concat(t.created)})," "]})]})})},q=n(176),Q=n(163),Z=n(164),$=n(177),ee=n(165),te=n(166),ne=Object(p.a)((function(e){return{large:{width:e.spacing(12),height:e.spacing(12),margin:"auto"},list:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}})),ce=function(e){var t=e.open,n=e.setOpen,c=e.item,i=ne(),r=Object(a.useState)([]),o=Object(d.a)(r,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){var e=function(){if(c){for(var e=[],t=0,n=Object.entries(c);t<n.length;t++){var a=Object(d.a)(n[t],2),i=a[0],r=a[1];if(Array.isArray(r))e.push("".concat(i)),r.map((function(t){return"object"!==typeof t&&null!==t&&e.push(t),e}));else if("object"===typeof r)for(var o in e.push("".concat(i)),r)e.push("".concat(o,": ").concat(r[o]));else e.push("".concat(i,": ").concat(r))}return e}}();l(e)}),[c]),c?Object(k.jsx)("div",{children:Object(k.jsxs)(q.a,{open:t,onClose:function(){return n(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(k.jsx)(Q.a,{children:Object(k.jsx)(Z.a,{onClick:function(){return n(!1)},color:"primary",children:"Close"})}),c.image&&Object(k.jsx)($.a,{alt:"Remy Sharp",src:c.image,className:i.large}),Object(k.jsx)(ee.a,{id:"alert-dialog-title",children:c.name}),Object(k.jsx)(te.a,{children:Object(k.jsx)(H.a,{component:"nav",className:i.list,children:s&&s.map((function(e,t){return Object(k.jsx)(J.a,{children:Object(k.jsx)(K.a,{secondary:e})},t)}))})})]})}):""},ae=n(172),ie=Object(p.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}}));function re(e){var t=e.countPages,n=e.setPage,c=e.page,a=ie();return Object(k.jsx)("div",{className:a.root,children:Object(k.jsx)(ae.a,{count:t,page:c,onChange:function(e,t){n(t)}})})}var oe,se,le=n(178),de=n(169),ue=n(180),je=n(174),be=function(e,t){var n=Object(a.useState)(e),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e,t]),i},pe=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},container:{width:"90%"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},filters:{display:"flex",alignItems:"center",margin:15}}})),me=function(){var e,t,n,c=Object(D.b)(),i=pe(),r=Object(D.c)((function(e){return e.characters})),o=null===r||void 0===r||null===(e=r.characters)||void 0===e||null===(t=e.info)||void 0===t?void 0:t.pages,s=null===r||void 0===r||null===(n=r.characters)||void 0===n?void 0:n.results,l=Object(a.useState)(!1),u=Object(d.a)(l,2),j=u[0],b=u[1],p=Object(a.useState)(1),m=Object(d.a)(p,2),O=m[0],f=m[1],h=Object(a.useState)(),x=Object(d.a)(h,2),g=x[0],v=x[1],C=Object(a.useState)(""),N=Object(d.a)(C,2),w=N[0],S=N[1],E=Object(a.useState)(""),A=Object(d.a)(E,2),I=A[0],W=A[1],T=Object(a.useState)(""),L=Object(d.a)(T,2),P=L[0],R=L[1],B=be(P,500);return Object(a.useEffect)((function(){c(M({page:O,status:w,gender:I,debouncedSpecies:B}))}),[c,O,w,I,B]),Object(k.jsxs)("div",{className:i.root,children:[Object(k.jsxs)("div",{className:i.filters,children:[Object(k.jsx)(le.a,{id:"outlined-basic",label:"Species",variant:"outlined",value:P,onChange:function(e){R(e.target.value)}}),Object(k.jsxs)(de.a,{variant:"outlined",className:i.formControl,children:[Object(k.jsx)(ue.a,{id:"demo-simple-select-outlined-label",children:"Status"}),Object(k.jsxs)(je.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:w,onChange:function(e){S(e.target.value)},label:"status",children:[Object(k.jsx)(y.a,{value:"",children:Object(k.jsx)("em",{children:"None"})}),Object(k.jsx)(y.a,{value:"alive",children:"Alive"}),Object(k.jsx)(y.a,{value:"dead",children:"Dead"}),Object(k.jsx)(y.a,{value:"unknown",children:"Unknown"})]})]}),Object(k.jsxs)(de.a,{variant:"outlined",className:i.formControl,children:[Object(k.jsx)(ue.a,{id:"demo-simple-select-outlined-label",children:"Gender"}),Object(k.jsxs)(je.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:I,onChange:function(e){W(e.target.value)},label:"gender",children:[Object(k.jsx)(y.a,{value:"",children:Object(k.jsx)("em",{children:"None"})}),Object(k.jsx)(y.a,{value:"female",children:"Female"}),Object(k.jsx)(y.a,{value:"male",children:"Male"}),Object(k.jsx)(y.a,{value:"genderless",children:"Genderless"}),Object(k.jsx)(y.a,{value:"unknown",children:"Unknown"})]})]})]}),s&&s.map((function(e){return Object(k.jsx)("div",{className:i.container,onClick:function(){v(e),b(!0)},children:Object(k.jsx)(Y,{item:e,type:"short"},e.id)},e.id)})),Object(k.jsx)(re,{countPages:o,page:O,setPage:f}),Object(k.jsx)(ce,{open:j,setOpen:b,item:g})]})},Oe=Object(P.b)("episodes/getEpisodes",function(){var e=Object(L.a)(T.a.mark((function e(t){var n,c,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,c=t.debouncedName,a="",a+=n?"page=".concat(n):"",a+=c?"&name=".concat(c):"",e.abrupt("return",fetch("https://rickandmortyapi.com/api/episode/?".concat(a)).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),fe=Object(P.c)({name:"episodes",initialState:{episodes:{},status:null},extraReducers:(oe={},Object(u.a)(oe,Oe.pending,(function(e,t){e.status="loading"})),Object(u.a)(oe,Oe.fulfilled,(function(e,t){var n=t.payload;e.episodes=n,e.status="success"})),Object(u.a)(oe,Oe.rejected,(function(e,t){e.status="failed"})),oe)}).reducer,he=n(170),xe=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},episode:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,width:"100%"},filters:{display:"flex",alignItems:"center",margin:15}}})),ge=function(){var e,t,n,c=Object(D.b)(),i=xe(),r=Object(D.c)((function(e){return e.episodes})),o=null===r||void 0===r||null===(e=r.episodes)||void 0===e||null===(t=e.info)||void 0===t?void 0:t.pages,s=null===r||void 0===r||null===(n=r.episodes)||void 0===n?void 0:n.results,l=Object(a.useState)(!1),u=Object(d.a)(l,2),j=u[0],b=u[1],p=Object(a.useState)(1),m=Object(d.a)(p,2),O=m[0],f=m[1],h=Object(a.useState)(),x=Object(d.a)(h,2),g=x[0],v=x[1],y=Object(a.useState)(""),C=Object(d.a)(y,2),N=C[0],w=C[1],S=be(N,500);return Object(a.useEffect)((function(){c(Oe({page:O,debouncedName:S}))}),[c,O,S]),Object(k.jsxs)("div",{className:i.root,children:[Object(k.jsx)("div",{className:i.filters,children:Object(k.jsx)(le.a,{id:"outlined-basic",label:"Name",variant:"outlined",value:N,onChange:function(e){w(e.target.value)}})}),Object(k.jsx)(he.a,{container:!0,children:s&&s.map((function(e){return Object(k.jsx)(he.a,{item:!0,xs:11,sm:6,className:i.episode,onClick:function(){v(e),b(!0)},children:Object(k.jsx)(Y,{item:e,type:"short"},e.id)},e.id)}))}),Object(k.jsx)(re,{countPages:o,page:O,setPage:f}),Object(k.jsx)(ce,{open:j,setOpen:b,item:g})]})},ve=Object(P.b)("locations/getLocations",function(){var e=Object(L.a)(T.a.mark((function e(t){var n,c,a,i,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,c=t.debouncedName,a=t.debouncedType,i=t.debouncedDimention,r="",r+=n?"page=".concat(n):"",r+=c?"&name=".concat(c):"",r+=a?"&type=".concat(a):"",r+=i?"&dimension=".concat(i):"",e.abrupt("return",fetch("https://rickandmortyapi.com/api/location/?".concat(r)).then((function(e){return e.json()})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ye=Object(P.c)({name:"locations",initialState:{locations:{},status:null},extraReducers:(se={},Object(u.a)(se,ve.pending,(function(e,t){e.status="loading"})),Object(u.a)(se,ve.fulfilled,(function(e,t){var n=t.payload;e.locations=n,e.status="success"})),Object(u.a)(se,ve.rejected,(function(e,t){e.status="failed"})),se)}).reducer,Ce=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},location:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,width:"100%"},filters:{display:"flex",alignItems:"center",margin:15}}})),ke=function(){var e,t,n,c=Object(D.b)(),i=Ce(),r=Object(D.c)((function(e){return e.locations})),o=null===r||void 0===r||null===(e=r.locations)||void 0===e||null===(t=e.info)||void 0===t?void 0:t.pages,s=null===r||void 0===r||null===(n=r.locations)||void 0===n?void 0:n.results,l=Object(a.useState)(1),u=Object(d.a)(l,2),j=u[0],b=u[1],p=Object(a.useState)(""),m=Object(d.a)(p,2),O=m[0],f=m[1],h=Object(a.useState)(""),x=Object(d.a)(h,2),g=x[0],v=x[1],y=Object(a.useState)(""),C=Object(d.a)(y,2),N=C[0],w=C[1],S=be(O,500),E=be(g,500),A=be(N,500);return Object(a.useEffect)((function(){c(ve({page:j,debouncedName:S,debouncedType:E,debouncedDimention:A}))}),[c,j,S,E,A]),Object(k.jsxs)("div",{className:i.root,children:[Object(k.jsxs)("div",{className:i.filters,children:[Object(k.jsx)(le.a,{id:"outlined-basic",label:"Name",variant:"outlined",value:O,onChange:function(e){f(e.target.value)}}),Object(k.jsx)(le.a,{id:"outlined-basic",label:"Type",variant:"outlined",value:g,onChange:function(e){v(e.target.value)}}),Object(k.jsx)(le.a,{id:"outlined-basic",label:"Dimension",variant:"outlined",value:N,onChange:function(e){w(e.target.value)}})]}),Object(k.jsx)(he.a,{container:!0,children:s&&s.map((function(e){return Object(k.jsx)(he.a,{item:!0,xs:11,sm:6,className:i.location,children:Object(k.jsx)(Y,{item:e},e.id)},e.id)}))}),Object(k.jsx)(re,{countPages:o,page:j,setPage:b})]})},Ne=n(81),we=Object(P.c)({name:"episodes",initialState:[{id:1,title:"Lawnmower Dog",completed:!1},{id:2,title:"Rixty Minutes",completed:!1},{id:3,title:"Something Ricked This Way Comes",completed:!1}],reducers:{addEpisode:function(e,t){return[{id:Date.now(),title:t.payload.title,completed:!1}].concat(Object(Ne.a)(e))},toggleEpisode:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload.id}));e[n].completed=t.payload.completed},deleteEpisode:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload.id}));e.splice(n,1)},clearAllCompletedEpisodes:function(e){return e.filter((function(e){return!1===e.completed}))},toggleAllEpisodes:function(e){e.every((function(e){return!0===e.completed}))?e.map((function(e){return e.completed=!1})):e.map((function(e){return e.completed=!0}))}}}),Se=we.actions,Ee=Se.addEpisode,Ae=Se.toggleEpisode,Ie=Se.deleteEpisode,De=Se.toggleAllEpisodes,We=Se.clearAllCompletedEpisodes,Te=we.reducer,Le=Object(p.a)((function(e){return{newItem:{width:"85%",margin:"30px 0"}}}));function Pe(){var e=Le(),t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],i=n[1],r=Object(D.b)();return Object(k.jsx)(le.a,{label:"Watch next?",className:e.newItem,value:c,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.target.value.trim()&&r(Ee({title:c})),i(""))}})}var Me=n(175);function Re(e){var t=e.title,n=e.id,c=e.completed,a=Object(D.b)();return Object(k.jsxs)(J.a,{children:[Object(k.jsx)(Me.a,{onChange:function(){a(Ae({id:n,completed:!c}))},checked:c,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),Object(k.jsx)(x.a,{children:t}),Object(k.jsx)(Z.a,{color:"secondary",type:"button",onClick:function(){a(Ie({id:n}))},children:"X"})]})}function Be(e){var t=e.episodes;return Object(k.jsx)(H.a,{className:"todo-list",children:t.map((function(e){return Object(k.jsx)(Re,{id:e.id,title:e.title,completed:e.completed},e.id)}))})}var Fe=function(e){var t=e.item,n=e.updateFilter;return Object(k.jsx)(Z.a,{color:"primary",onClick:function(e){e.preventDefault(),n(t.id)},children:t.title})},Ge=Object(p.a)((function(e){return{footer:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}})),ze=[{title:"All",id:"all"},{title:"Active",id:"active"},{title:"Completed",id:"completed"}];function He(e){var t=e.updateFilter,n=Ge(),c=Object(D.c)((function(e){return e.myWatchList.filter((function(e){return!1===e.completed})).length})),a=Object(D.b)();return Object(k.jsxs)("footer",{className:n.footer,children:[Object(k.jsxs)(x.a,{variant:"body2",display:"block",gutterBottom:!0,children:[c," items left"]}),Object(k.jsx)("div",{children:ze.map((function(e){return Object(k.jsx)(Fe,{item:e,updateFilter:t},e.id)}))}),Object(k.jsx)(Z.a,{className:"clear-completed",onClick:function(e){e.preventDefault(),a(We())},children:"Clear completed"})]})}var Je=Object(p.a)({toggleAll:{width:"100%",textAlign:"left",fontStyle:"italic"}});function Ke(e){var t=e.isAllCompleted,n=Je(),c=Object(D.b)();return Object(k.jsxs)("div",{className:n.toggleAll,children:[Object(k.jsx)(Me.a,{onChange:function(e){return c(De())},checked:t,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),Object(k.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]})}var Ue=n(171),_e=Object(p.a)({root:{marginTop:"50px"}}),Ve=function(){var e=_e(),t=Object(a.useState)("all"),n=Object(d.a)(t,2),c=n[0],i=n[1],r=Object(D.c)((function(e){return e.myWatchList})),o=r.filter((function(e){return e.completed})).length===r.length,s=r.filter((function(e){switch(c){case"active":return!e.completed;case"completed":return!0===e.completed;case"all":default:return e}}));return Object(k.jsxs)(Ue.a,{component:"div",maxWidth:"sm",className:e.root,children:[Object(k.jsx)(x.a,{gutterBottom:!0,variant:"h3",component:"h2",children:" My Watch List "}),Object(k.jsx)(Pe,{}),Object(k.jsx)(Be,{episodes:s}),r.length>0&&Object(k.jsx)(Ke,{isAllCompleted:o}),r.length>0&&Object(k.jsx)(He,{updateFilter:function(e){i(e)}})]})};n(110);var Xe=function(){return Object(k.jsx)(s.a,{children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(w,{}),Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(k.jsx)(l.a,{path:"/characters",component:me}),Object(k.jsx)(l.a,{path:"/episodes",component:ge}),Object(k.jsx)(l.a,{path:"/locations",component:ke}),Object(k.jsx)(l.a,{path:"/my-watch-list",component:Ve})]})]})})},Ye=Object(P.a)({reducer:{myWatchList:Te,characters:R,episodes:fe,locations:ye}});o.a.render(Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(D.a,{store:Ye,children:Object(k.jsx)(Xe,{})})}),document.getElementById("root"))},98:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.f5e11a58.chunk.js.map