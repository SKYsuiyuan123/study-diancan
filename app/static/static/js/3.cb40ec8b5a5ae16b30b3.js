webpackJsonp([3],{S2NW:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{user:{email:"",password:"",confirmPassword:""}}},methods:{onSubmit:function(){var s=this;this.user.password===this.user.confirmPassword?(console.log(this.user),this.$axios.post("/users.json",this.user).then(function(t){return s.$router.push("/login")}).catch(function(s){console.log(s)})):alert("两次密码不一致！")}}},o={render:function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"col-md-12 col-lg-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"mx-auto d-block",attrs:{src:e("edSy"),height:"256",width:"256",alt:""}}),s._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),s.onSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[s._v("邮箱")]),s._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:s.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:s.user.email},on:{input:function(t){t.target.composing||s.$set(s.user,"email",t.target.value)}}})]),s._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[s._v("密码")]),s._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}})]),s._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"confirm"}},[s._v("确认密码")]),s._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:s.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:s.user.confirmPassword},on:{input:function(t){t.target.composing||s.$set(s.user,"confirmPassword",t.target.value)}}})]),s._v(" "),r("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[s._v("注册")])])])])])])},staticRenderFns:[]},a=e("vSla")(r,o,!1,null,null,null);t.default=a.exports},edSy:function(s,t,e){s.exports=e.p+"static/img/icon.c43f32c.png"}});
//# sourceMappingURL=3.cb40ec8b5a5ae16b30b3.js.map