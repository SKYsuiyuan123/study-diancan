webpackJsonp([2],{Ctpd:function(t,n){},nENC:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={data:function(){return{id:null,blog:{}}},created:function(){var t=this;this.id=this.$route.params.id,this.$axios.get("singleBlog/"+this.id).then(function(n){t.blog=n.data[0]}).catch(function(t){console.log(t)})}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"single-blog"},[e("h2",[t._v(t._s(t.blog.title))]),t._v(" "),e("article",[t._v(t._s(t.blog.content))]),t._v(" "),e("p",[t._v("作者："+t._s(t.blog.author))]),t._v(" "),e("p",[t._v("分类：")]),t._v(" "),e("UL",t._l(t.blog.categories,function(n){return e("li",{key:n.id},[t._v("\n      "+t._s(n)+"\n    ")])}))],1)},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("Ctpd")},"data-v-16591758",null);n.default=s.exports}});
//# sourceMappingURL=2.51dfc1db2eb78cc4db23.js.map