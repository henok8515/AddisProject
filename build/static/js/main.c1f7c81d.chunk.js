(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{178:function(e,t,a){e.exports=a(215)},214:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=a(34),o=a(79),s=a(152),m=a(18),u=Object(o.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(m.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(15),d=a(302),f=a(324),g=a(299),E=a(72),h=a(21),b=a(298),x=a(288),y=a(290),v=a(296),w=a(308),j=a(143),C=a.n(j),O=a(317),k=a(321),I=a(31),S=a.n(I),z=a(55),D=a(80),W=a.n(D),T="https://addis-backend.herokuapp.com/posts",A=function(e,t){return W.a.patch("".concat(T,"/").concat(e),t)},B=function(e){return W.a.delete("".concat(T,"/").concat(e))},F=function(e){return function(){var t=Object(z.a)(S.a.mark((function t(a){var n,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,W.a.post(T,l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},L=function(e,t){return function(){var a=Object(z.a)(S.a.mark((function a(n){var r,l;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},M=a(285),N=(Object(M.a)({media:{paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken",display:"flex",alignSelf:"center"},border:{border:"solid"},fullHeightCard:{display:"flex",justifyContent:"center"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"5px",position:"relative",marginBottom:"40px"},overlay:{position:"absolute",top:"10px",left:"10px",color:"white"},overlay2:{position:"absolute",top:"10px",right:"10px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{height:"50%",width:"100%",textTransform:"capitalize",margin:"20px 20px",textAlign:"start"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),a(144)),q=a.n(N),_=function(e){var t=e.post,a=e.setCurrentId,n=e.currentId,l=Object(i.b)();return r.a.createElement(x.a,{sx:{maxWidth:345}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(y.a,{image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",component:"img",height:"140",alt:"green iguana",style:{height:"200px",width:"200px",borderRadius:"50%",marginTop:"10px"}})),r.a.createElement(k.a,{style:{textAlign:"center"}},r.a.createElement(v.a,{style:{textTransform:"capitalize",textDecoration:"underline"},variant:"h4"},t.creator),r.a.createElement(v.a,{variant:"h6",color:"textSecondary",component:"p"},t.message+"@gmail.com"),r.a.createElement(v.a,{gutterBottom:!0,variant:"h6",component:"h2"},t.title),r.a.createElement(v.a,{variant:"h6",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"$".concat(e," ")})))),r.a.createElement(O.a,{style:{display:"flex",justifyContent:"space-between"}},n?r.a.createElement("h1",null,"nottt"):r.a.createElement(w.a,{style:{color:"blue"},size:"medium",color:"secondary",onClick:function(){return l((e=t._id,function(){var t=Object(z.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(C.a,{fontSize:"small"})),r.a.createElement(w.a,{style:{color:"blue"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(q.a,{fontSize:"default"}))))},R=Object(M.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),P=function(e){var t=e.setCurrentId,a=e.input,n=Object(i.c)((function(e){return e.posts})),l=R();return n.length?r.a.createElement(g.a,{className:l.container,container:!0,alignItems:"stretch",spacing:3},n.filter((function(e){return""===a||e.creator.toLowerCase().includes(a.toLowerCase())?e:void 0})).map((function(e){return r.a.createElement(g.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(_,{post:e,setCurrentId:t}))}))):r.a.createElement(b.a,null)},V=a(41),H=a(217),G=a(303),J=a(145),U=a.n(J),Y=Object(M.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),K=function(e){var t=e.currentId,a=e.setCurrentId,l=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:"",email:""}),c=Object(p.a)(l,2),o=c[0],s=c[1],m=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=Object(i.b)(),d=Y();Object(n.useEffect)((function(){m&&s(m)}),[m]);var f=function(){a(0),s({creator:"",title:"",message:"",tags:"",selectedFile:"",email:""})},g=function(){var e=Object(z.a)(S.a.mark((function e(a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==o.creator){e.next=3;break}return e.abrupt("return");case 3:0===t?(u(F(o)),f()):(u(L(t,o)),f());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=r.a.useRef();return r.a.createElement(H.a,{className:d.paper},r.a.createElement("form",{ref:E,autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:g},r.a.createElement(v.a,{required:!0,underline:!0,variant:"h4"},t?'Editing "'.concat(m.creator,'"'):"Add  Employee "),r.a.createElement(G.a,{required:!0,name:"FullName",variant:"outlined",label:"Full Name  ",fullWidth:!0,value:o.creator,onChange:function(e){return s(Object(V.a)(Object(V.a)({},o),{},{creator:e.target.value}))}}),r.a.createElement(G.a,{name:"Job-Title",variant:"outlined",label:"Job -Title",fullWidth:!0,value:o.title,onChange:function(e){return s(Object(V.a)(Object(V.a)({},o),{},{title:e.target.value}))}}),r.a.createElement(G.a,{name:"email",type:"email",variant:"outlined",label:"Email",fullWidth:!0,value:o.message,onChange:function(e){return s(Object(V.a)(Object(V.a)({},o),{},{message:e.target.value}))}}),r.a.createElement(G.a,{type:"number",name:"tags",variant:"outlined",label:"Salary ",fullWidth:!0,value:o.tags,onChange:function(e){return s(Object(V.a)(Object(V.a)({},o),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:d.fileInput},r.a.createElement(U.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(V.a)(Object(V.a)({},o),{},{selectedFile:t}))}})),r.a.createElement(w.a,{onClick:function(){return E.current.reportValidity()},className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(w.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0},"Clear")))},Z=a(5),$=a(6),Q=a(294),X=a(330),ee=a(315),te=a(327),ae=a(316),ne=a(326),re=a(28),le=a(309),ce=a(307),ie=a(153),oe=a(150),se=a.n(oe),me=a(149),ue=a.n(me),pe=a(147),de=a.n(pe),fe=a(148),ge=a.n(fe),Ee=a(151),he=a.n(Ee),be=Object($.a)("div")((function(e){var t=e.theme;return Object(Z.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(Q.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(Q.a)(t.palette.common.white,.22)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),xe=Object($.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ye=Object($.a)(re.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(Z.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),ve=function(e){e.input;var t=e.setInput,a=n.useState(null),r=Object(p.a)(a,2),l=r[0],c=r[1],i=n.useState(null),o=Object(p.a)(i,2),s=o[0],m=o[1],u=Boolean(l),d=Boolean(s),f=function(e){c(e.currentTarget)},g=function(){m(null)},b=function(){c(null),g()},x=Object(h.f)(),y="primary-search-account-menu",v=n.createElement(ie.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:b},n.createElement(ce.a,{onClick:function(){var e;e="/signin",x.push(e)}},"signOut"),n.createElement(ce.a,{onClick:b},"My account")),w=n.createElement(ie.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:g},n.createElement(ce.a,null,n.createElement(ae.a,{size:"large","aria-label":"show 4 new mails",color:"inherit"},n.createElement(le.a,{badgeContent:4,color:"error"},n.createElement(de.a,null))),n.createElement("p",null,"Messages")),n.createElement(ce.a,null,n.createElement(ae.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit"},n.createElement(le.a,{badgeContent:17,color:"error"},n.createElement(ge.a,null))),n.createElement("p",null,"Notifications")),n.createElement(ce.a,{onClick:f},n.createElement(ae.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},n.createElement(ue.a,null)),n.createElement("p",null,"Profile")));return n.createElement(ee.a,{sx:{flexGrow:1}},n.createElement(X.a,{style:{top:0,position:"sticky",backgroundColor:"#0B0033",marginBottom:"40px"}},n.createElement(te.a,null,n.createElement(ne.a,{variant:"h2",noWrap:!0,style:{textDecoration:"none",color:"white"},component:E.b,to:"/",sx:{display:{xs:"none",sm:"block"}}},"M"),n.createElement(be,{style:{display:"flex",alignItems:"center",marginLeft:"200px",width:"300px",height:"50px"}},n.createElement(xe,null,n.createElement(se.a,null)),n.createElement(ye,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){t(e.target.value),console.log(e.target.value)}})),n.createElement(ee.a,{sx:{flexGrow:1}}),n.createElement(ee.a,{sx:{display:{xs:"none",md:"flex"}}},n.createElement(ae.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit"},n.createElement(E.b,{to:"/signin",style:{color:"inherit"}})),n.createElement(ae.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":y,"aria-haspopup":"true",onClick:f,color:"inherit"})),n.createElement(ee.a,{sx:{display:{xs:"flex",md:"none"}}},n.createElement(ae.a,{size:"large","aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},n.createElement(he.a,null))))),w,v)},we=a(313),je=a(312),Ce=a(301),Oe=a(304),ke=a(319),Ie=a(305),Se=a(325),ze=a(318),De=a(311),We=a(103),Te=a.n(We),Ae=a(154),Be=a(314);function Fe(e){return n.createElement(ne.a,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright \xa9 ",n.createElement(Se.a,{color:"inherit",href:"https://mui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var Le=Object(Ae.a)();function Me(){var e=Object(h.f)(),t=function(t){e.push(t)};return n.createElement(Be.a,{theme:Le},n.createElement(De.a,{container:!0,component:"main",sx:{display:"flex",justifyContent:"center",marginBottom:"100px",marginTop:"50px",height:"60vh"}},n.createElement(Ce.a,null),n.createElement(De.a,{item:!0,xs:12,sm:8,md:5,component:ze.a,elevation:6,square:!0},n.createElement(ee.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement(we.a,{sx:{m:1,bgcolor:"secondary.main"}},n.createElement(Te.a,null)),n.createElement(ne.a,{component:"h1",variant:"h5"},"Sign in"),n.createElement(ee.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:1}},n.createElement(Oe.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),n.createElement(Oe.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),n.createElement(ke.a,{control:n.createElement(Ie.a,{value:"remember",color:"primary"}),label:"Remember me"}),n.createElement(je.a,{onClick:function(){t("/")},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In"),n.createElement(De.a,{container:!0},n.createElement(De.a,{item:!0,xs:!0},n.createElement(Se.a,{href:"#",variant:"body2"},"Forgot password?")),n.createElement(De.a,{item:!0},n.createElement(Se.a,{onClick:function(){t("/register")}},"Don't have an account? Sign Up"))),n.createElement(Fe,{sx:{mt:5}}))))))}var Ne=a(323),qe=Object(Ae.a)(),_e=function(){var e=Object(h.f)(),t=function(t){e.push(t)};return n.createElement(Be.a,{theme:qe},n.createElement(Ne.a,{style:{backgroundColor:"white"},component:"main",maxWidth:"xs"},n.createElement(Ce.a,null),n.createElement(ee.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement(we.a,{sx:{m:1,bgcolor:"secondary.main"}},n.createElement(Te.a,null)),n.createElement(ne.a,{component:"h1",variant:"h4"},"Sign up"),n.createElement(ee.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:3}},n.createElement(De.a,{container:!0,spacing:2},n.createElement(De.a,{item:!0,xs:12,sm:6},n.createElement(Oe.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),n.createElement(De.a,{item:!0,xs:12,sm:6},n.createElement(Oe.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})),n.createElement(De.a,{item:!0,xs:12},n.createElement(Oe.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),n.createElement(De.a,{item:!0,xs:12},n.createElement(Oe.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})),n.createElement(De.a,{item:!0,xs:12},n.createElement(ke.a,{control:n.createElement(Ie.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),n.createElement(je.a,{onClick:function(){t("/")},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign Up"),n.createElement(De.a,{container:!0,justifyContent:"flex-end"},n.createElement(De.a,{item:!0},n.createElement(Se.a,{onClick:function(){t("/signin")},variant:"body2"},"Already have an account? Sign in")))))))},Re=a(322),Pe=a(320);function Ve(){return n.createElement(Re.a,{sx:{maxWidth:345}},n.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.createElement(Pe.a,{component:"img",height:"140",src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",image:"",alt:"green iguana",style:{height:"250px",width:"250px",borderRadius:"50%",border:"1px solid black"}})),n.createElement(k.a,{style:{textAlign:"center"}},n.createElement(ne.a,{gutterBottom:!0,variant:"h5",component:"div"},"Henok Egezew"),n.createElement(ne.a,{gutterBottom:!0,variant:"h5",component:"div"},"Welder"),"   ",n.createElement(ne.a,{gutterBottom:!0,variant:"h5",component:"div"},"2000"),n.createElement(ne.a,{variant:"body2",color:"text.secondary"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica")),n.createElement(O.a,{style:{display:"flex",justifyContent:"space-between"}},n.createElement(je.a,{size:"small"},"Share"),n.createElement(je.a,{size:"small"},"Learn More")))}var He=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),s=o[0],m=o[1],u=Object(i.b)();Object(n.useEffect)((function(){u(function(){var e=Object(z.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get(T);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,u]);var b=Object(i.c)((function(e){return e.posts}));return r.a.createElement(E.a,null,r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(ve,{input:s,setInput:m,posts:b}),r.a.createElement(f.a,{in:!0},r.a.createElement(h.c,null,r.a.createElement(d.a,null,r.a.createElement(g.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(g.a,{item:!0,xs:12,sm:7},r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(P,Object.assign({},e,{input:s,setCurrentId:l,currentId:a}))}})),r.a.createElement(g.a,{item:!0,xs:12,sm:4},r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(K,Object.assign({},e,{setCurrentId:l,currentId:a}))}}))),r.a.createElement(h.a,{exact:!0,path:"/signin",component:Me}),r.a.createElement(h.a,{exact:!0,path:"/register",component:_e}),r.a.createElement(h.a,{exact:!0,path:"/card",component:Ve}))))))},Ge=(a(214),Object(o.d)(u,Object(o.c)(Object(o.a)(s.a))));c.a.render(r.a.createElement(i.a,{store:Ge},r.a.createElement(He,null)),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.c1f7c81d.chunk.js.map