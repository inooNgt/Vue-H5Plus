webpackJsonp([7],{BvKk:function(t,a){},FiXv:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),i=e("TVmP"),s=e("NtCe"),o=e.n(s),c=(e("MJyj"),{name:"App",components:{MFooter:i.a},data:function(){return{showFooter:!o.a.isPlus}},mounted:function(){}}),l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),this._v(" "),a("MFooter",{directives:[{name:"show",rawName:"v-show",value:this.showFooter,expression:"showFooter"}]})],1)},staticRenderFns:[]};var r=e("VU/8")(c,l,!1,function(t){e("JZ0C")},null,null).exports,v=e("/ocq"),u=(e("OWWB"),e("1fWZ")),h=(e("i0mo"),e("Hkar")),m=(e("k3b4"),e("+2ln"));n.a.use(u.a).use(h.a).use(m.a);var d={name:"Index",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{goSetting:function(){o.a.openWindow("my_setting.html")}}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"cell-header",on:{click:this.goSetting}},[a("div",{staticClass:"cell-img"}),this._v(" "),this._m(0),this._v(" "),a("div",{staticClass:"cell-icon"},[a("van-icon",{attrs:{name:"arrow"}})],1)]),this._v(" "),a("van-cell-group",[a("van-cell",{attrs:{title:"单元格","is-link":"",value:"内容"}}),this._v(" "),a("van-cell",{attrs:{title:"单元格","is-link":"",value:"内容"}}),this._v(" "),a("van-cell",{attrs:{title:"单元格","is-link":"",value:"内容"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"cell-msg"},[a("div",{staticClass:"msg-name"},[this._v("This space for name")]),this._v(" "),a("div",{staticClass:"msg-phone"},[this._v("177****5485")])])}]};var p=e("VU/8")(d,f,!1,function(t){e("maGY")},"data-v-1314fe24",null).exports;n.a.use(v.a);var _=new v.a({routes:[{path:"/",name:"Index",component:p}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:_,components:{App:r},template:"<App/>"})},JZ0C:function(t,a){},MJyj:function(t,a){},NtCe:function(t,a){t.exports=window.MTOOL},TVmP:function(t,a,e){"use strict";e("3Lne");var n=e("SSsa"),i=(e("k3b4"),e("+2ln")),s=e("7+uW"),o=e("NtCe"),c=e.n(o);s.a.use(i.a),s.a.use(n.a);var l={name:"Nav",props:["selected"],data:function(){return{activePath:"home.html",msg:"Welcome to Your Vue.js App"}},mounted:function(){this.$nextTick(function(){});var t=window.location.pathname||"";t=t.substr(t.lastIndexOf("/")+1),this.activePath="index.html"===t?"home.html":t},methods:{handleNavTap:function(t,a){if(this.activePath!==t||!c.a.isPlus){c.a.needLogin(t),0,c.a.switchNav({from:this.activePath,to:t}),this.activePath=t}}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-link",class:{active:"home.html"===t.activePath},on:{click:function(a){t.handleNavTap("home.html",a)}}},[e("van-icon",{staticClass:"footer-icon",attrs:{name:"wap-home"}}),t._v(" "),e("span",[t._v("Home")])],1),t._v(" "),e("div",{staticClass:"footer-link",class:{active:"vigour.html"===t.activePath},on:{click:function(a){t.handleNavTap("vigour.html",a)}}},[e("van-icon",{staticClass:"footer-icon",attrs:{name:"shop"}}),t._v(" "),e("span",[t._v("Vigour")])],1),t._v(" "),e("div",{staticClass:"footer-link",class:{active:"my.html"===t.activePath},on:{click:function(a){t.handleNavTap("my.html",a)}}},[e("van-icon",{staticClass:"footer-icon",attrs:{name:"contact"}}),t._v(" "),e("span",[t._v("My")])],1)])},staticRenderFns:[]};var v=e("VU/8")(l,r,!1,function(t){e("BvKk")},"data-v-4563797a",null);a.a=v.exports},f4F5:function(t,a){},maGY:function(t,a){}},["FiXv"]);
//# sourceMappingURL=my.js.map