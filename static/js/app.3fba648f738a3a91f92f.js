webpackJsonp([5],{BHeL:function(t,e){},ExW5:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("/5sW"),a=o("zL8q"),s=o.n(a),r=(o("tvR6"),o("Dd8w")),i=o.n(r),d=o("NYxO"),c={data:function(){return{}},created:function(){this.setUser()},methods:i()({},Object(d.b)({setUser:"checkLogin"})),computed:i()({},Object(d.c)(["username","slug"]))},u={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var l={components:{avatar:o("VU/8")(c,u,!1,function(t){o("ExW5")},"data-v-8d6e1e06",null).exports},methods:i()({},Object(d.b)(["logout"]),{onLogout:function(){this.logout({path:"/login"})}})},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.onLogout}})])],1)},staticRenderFns:[]};var f={name:"app",components:{sidebar:o("VU/8")(l,h,!1,function(t){o("kMaK")},"data-v-30362808",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var m=o("VU/8")(f,b,!1,function(t){o("BHeL")},null,null).exports,p=o("/ocq");n.default.use(p.a);var k=new p.a({routes:[{path:"/",alias:"/notebooks",component:function(){return o.e(0).then(o.bind(null,"cNaj"))}},{path:"/login",component:function(){return o.e(3).then(o.bind(null,"xJsL"))}},{path:"/notebooks",component:function(){return o.e(0).then(o.bind(null,"cNaj"))}},{path:"/note",component:function(){return o.e(1).then(o.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return o.e(2).then(o.bind(null,"WMg/"))}}]}),g=o("//Fk"),I=o.n(g),v=o("p+dL"),N=o("VmfC"),T={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},E=function(){return new I.a(function(t,e){Object(v.a)(T.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.createdAtFriendly=Object(N.a)(t.createdAt),e.data.updatedAtFriendly=Object(N.a)(e.data.updatedAt)}),t(e)}).catch(function(t){e(t)})})},A=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new I.a(function(t,o){Object(v.a)(T.ADD,"POST",{title:e}).then(function(e){e.data.createdAtFriendly=Object(N.a)(e.data.createdAt),e.data.updatedAtFriendly=Object(N.a)(e.data.updatedAt),t(e)}).catch(function(t){o(t)})})},j=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,o=void 0===e?"":e;return Object(v.a)(T.UPDATE.replace(":id",t),"PATCH",{title:o})},O=function(t){return Object(v.a)(T.DELETE.replace(":id",t),"DELETE")};const w={notebooks:null,curBookId:null};var L={state:w,getters:{notebooks:t=>t.notebooks||[],curBook:t=>Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(e=>e.id==t.curBookId)||{}:t.notebooks[0]||{}:{}},mutations:{setNotebooks(t,e){t.notebooks=e.notebooks},addNotebook(t,e){t.notebooks.unshift(e.notebook)},updateNotebook(t,e){(t.notebooks.find(t=>t.id==e.notebookId)||{}).title=e.title},deleteNotebook(t,e){t.notebooks=t.notebooks.filter(t=>t.id!=e.notebookId)},setCurBook(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:({commit:t})=>null!==w.notebooks?Promise.resolve():E().then(e=>{t("setNotebooks",{notebooks:e.data})}),addNotebook:({commit:t},e)=>A({title:e.title}).then(e=>{t("addNotebook",{notebook:e.data}),a.Message.success(e.msg)}),updateNotebook:({commit:t},e)=>j(e.notebookId,{title:e.title}).then(o=>{t("updateNotebook",{notebookId:e.notebookId,title:e.title}),a.Message.success(o.msg)}),deleteNotebook:({commit:t},e)=>O(e.notebookId).then(o=>{t("deleteNotebook",{notebookId:e.notebookId}),a.Message.success(o.msg)})}},D={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},y=function(t){var e=t.notebookId;return new I.a(function(t,o){Object(v.a)(D.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=Object(N.a)(t.createdAt),t.updatedAtFriendly=Object(N.a)(t.updatedAt),t}).sort(function(t,e){return t.updatedAt<e.updatedAt}),t(e)}).catch(function(t){o(t)})})},C=function(t){var e=t.notebookId,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},n=o.title,a=void 0===n?"":n,s=o.content,r=void 0===s?"":s;return new I.a(function(t,o){Object(v.a)(D.ADD.replace(":notebookId",e),"POST",{title:a,content:r}).then(function(e){e.data.createdAtFriendly=Object(N.a)(e.data.createdAt),e.data.updatedAtFriendly=Object(N.a)(e.data.updatedAt),t(e)}).catch(function(t){o(t)})})},U=function(t,e){var o=t.noteId,n=e.title,a=e.content;return console.log(o,n,a),Object(v.a)(D.UPDATE.replace(":noteId",o),"PATCH",{title:n,content:a})},F=function(t){var e=t.noteId;return Object(v.a)(D.DELETE.replace(":noteId",e),"DELETE")};var _={state:{notes:null,curNoteId:null},getters:{notes:t=>t.notes||[],curNote:t=>Array.isArray(t.notes)?t.curNoteId?t.notes.find(e=>String(e.id)===String(t.curNoteId))||{title:"",content:""}:t.notes[0]||{title:"",content:""}:{title:"",content:""}},mutations:{setNotes(t,e){t.notes=e.notes},addNote(t,e){t.notes.unshift(e.note)},updateNote(t,e){t.notes.find(t=>t.id===e.noteId);note.title=e.title,note.content=e.content},deleteNote(t,e){t.notes=t.notes.filter(t=>t.id!==e.noteId)},setCurNote(t,e={}){t.curNoteId=e.curNoteId}},actions:{getNotes:({commit:t},{notebookId:e})=>y({notebookId:e}).then(e=>{t("setNotes",{notes:e.data})}),addNote:({commit:t},{notebookId:e,title:o,content:n})=>C({notebookId:e},{title:o,content:n}).then(e=>{t("addNote",{note:e.data})}),updateNote:({commit:t},{noteId:e,title:o,content:n})=>U({noteId:e},{title:o,content:n}).then(a=>{t("updateNote",{noteId:e,title:o,content:n})}),deleteNote:({commit:t},{noteId:e})=>F({noteId:e}).then(o=>{t("deleteNote",{noteId:e}),a.Message.success(o.msg)})}},P={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},M=function(){return new I.a(function(t,e){Object(v.a)(P.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.createdAtFriendly=Object(N.a)(t.createdAt),t.updatedAtFriendly=Object(N.a)(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},R=function(t){var e=t.noteId;return Object(v.a)(P.DELETE.replace(":noteId",e),"DELETE")},x=function(t){var e=t.noteId;return Object(v.a)(P.REVERT.replace(":noteId",e),"PATCH")};var B={state:{trashNotes:null,curTrashNoteId:null},getters:{trashNotes:t=>t.trashNotes||[],curTrashNote:(t,e)=>t.curTrashNoteId?t.trashNotes.find(e=>e.id==t.curTrashNoteId)||{}:e.trashNotes[0]||{},belongTo:(t,e,o,n)=>(n.notebooks.find(t=>t.id==e.curTrashNote.notebookId)||{}).title||""},mutations:{setTrashNotes(t,e){t.trashNotes=e.trashNotes},addTrashNote(t,e){setTrashNotes.unshift(e.note)},deleteTrashNote(t,e){t.trashNotes=t.trashNotes.filter(t=>t.id!=e.noteId)},setCurTrashNote(t,e={}){t.curTrashNoteId=e.curTrashNoteId}},actions:{getTrashNotes:({commit:t})=>M().then(e=>{t("setTrashNotes",{trashNotes:e.data})}),deleteTrashNote:({commit:t},{noteId:e})=>R({noteId:e}).then(o=>{t("deleteTrashNote",{noteId:e}),a.Message.success(o.msg)}),revertTrashNote:({commit:t},{noteId:e})=>x({noteId:e}).then(o=>{t("deleteTrashNote",{noteId:e}),a.Message.success(o.msg)})}},G=o("Q98j");window.router=k;var S={state:{user:null},getters:{username:t=>null===t.user?"未登录":t.user.username,slug:t=>null===t.user?"未":t.user.username[0]},mutations:{setUser(t,e){t.user=e.user}},actions:{login:({commit:t},{username:e,password:o})=>G.a.login({username:e,password:o}).then(e=>{t("setUser",{user:e.data})}),register:({commit:t},{username:e,password:o})=>G.a.register({username:e,password:o}).then(e=>{t("setUser",{user:e.data})}),logout:({commit:t},e={path:"/login"})=>G.a.logout().then(o=>{t("setUser",{user:null}),k.push(e)}),checkLogin:({commit:t,state:e},o)=>null!==e.user?Promise.resolve():G.a.getInfo().then(e=>{e.isLogin?t("setUser",{user:e.data}):k.push(o)})}};n.default.use(d.a);var H=new d.a.Store({modules:{notebook:L,note:_,trash:B,user:S}});n.default.use(s.a),n.default.config.productionTip=!1,new n.default({store:H,el:"#app",router:k,render:function(t){return t(m)}})},Q98j:function(t,e,o){"use strict";var n=o("p+dL"),a="/auth/register",s="/auth/login",r="/auth/logout",i="/auth";e.a={register:function(t){var e=t.username,o=t.password;return Object(n.a)(a,"POST",{username:e,password:o})},login:function(t){var e=t.username,o=t.password;return Object(n.a)(s,"POST",{username:e,password:o})},logout:function(){return Object(n.a)(r)},getInfo:function(){return Object(n.a)(i)}}},VmfC:function(t,e,o){"use strict";e.a=function(t){var e=("object"===(void 0===t?"undefined":a()(t))?t:new Date(t)).getTime(),o=Date.now()-e,n="";switch(!0){case o<6e4:n="刚刚";break;case o<36e5:n=parseInt(o/6e4)+"分钟前";break;case o<864e5:n=parseInt(o/36e5)+"小时前";break;default:n=parseInt(o/864e5)+"天前"}return n};var n=o("pFYg"),a=o.n(n)},kMaK:function(t,e){},"p+dL":function(t,e,o){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(n,a){var s={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?s.params=o:s.data=o,r()(s).then(function(t){200===t.status?n(t.data):(c.Message.error(t.data.msg),a(t.data))}).catch(function(t){c.Message.error("网络异常"),a({msg:"网络异常"})})})};var n=o("//Fk"),a=o.n(n),s=o("mtWM"),r=o.n(s),i=o("Jdfc"),d=o.n(i),c=o("zL8q");o.n(c);console.log(d.a),r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.a.defaults.baseURL=d.a.baseURL,r.a.defaults.withCredentials=!0},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3fba648f738a3a91f92f.js.map