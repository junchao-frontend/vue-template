(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da32148"],{"534f":function(e,t,s){e.exports=s.p+"static/img/logo1.87a17452.png"},6268:function(e,t,s){},"96eb":function(e,t,s){"use strict";s("6268")},"9ed6":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"appRef",staticClass:"login-container"},[s("div",{staticClass:"login-box"},[s("div",{staticClass:"box-left"},[s("div",{staticClass:"left-text"},[e._m(0),s("br"),s("div",{staticClass:"ceshi"},[s("form",{staticClass:"form-container"},[s("label",{attrs:{for:"fname"}},[e._v("User Name")]),s("br"),s("el-input",{model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}}),s("br"),s("br"),s("label",{attrs:{for:"lname"}},[e._v("Password")]),s("br"),s("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("br"),s("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.onSubmit(e.form)}}},[e._v("Log In")]),s("br"),s("div",{staticClass:"checkbox"},[s("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Remember Me")]),s("span",{staticStyle:{color:"rgb(24, 109, 207)"}},[e._v("Forgot Password?")])],1),s("hr",{staticStyle:{marginTop:"28px"}}),s("span",{staticClass:"lasttest",on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("Register New User")])],1)])])]),e._m(1)]),s("el-dialog",{staticClass:"dialog",attrs:{title:"用户注册",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{attrs:{model:e.form}},[s("el-form-item",{attrs:{label:"账号","label-width":e.formLabelWidth}},[s("el-input",{staticStyle:{width:"200px","margin-left":"25px"},attrs:{autocomplete:"off"},model:{value:e.newuser.account,callback:function(t){e.$set(e.newuser,"account",t)},expression:"newuser.account"}})],1),s("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth}},[s("el-input",{staticStyle:{width:"200px","margin-left":"25px"},attrs:{autocomplete:"off"},model:{value:e.newuser.password,callback:function(t){e.$set(e.newuser,"password",t)},expression:"newuser.password"}})],1),s("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth}},[s("el-input",{staticStyle:{width:"200px","margin-left":"25px"},attrs:{autocomplete:"off"},model:{value:e.newuser.name,callback:function(t){e.$set(e.newuser,"name",t)},expression:"newuser.name"}})],1),s("el-form-item",{attrs:{label:"头像","label-width":e.formLabelWidth}},[s("el-input",{staticStyle:{width:"200px","margin-left":"25px"},attrs:{autocomplete:"off"},model:{value:e.newuser.url,callback:function(t){e.$set(e.newuser,"url",t)},expression:"newuser.url"}})],1),s("el-form-item",{attrs:{label:"角色","label-width":e.formLabelWidth}},[s("el-select",{staticStyle:{width:"200px","margin-left":"25px"},attrs:{placeholder:"请选择权限"},model:{value:e.newuser.role,callback:function(t){e.$set(e.newuser,"role",t)},expression:"newuser.role"}},[s("el-option",{attrs:{label:"一级权限",value:"1"}}),s("el-option",{attrs:{label:"二级权限",value:"0"}})],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.register(e.newuser)}}},[e._v("确 定")])],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{src:s("534f"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box-right"},[s("div",{staticClass:"right-text"},[s("div",{staticClass:"textstyle"},[s("strong",[e._v("Welcome to Wjc-template")]),s("hr"),s("br"),s("span",[e._v(" Lorem ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 150s. ")])])])])}],r=(s("3e22"),s("7ded")),l={data:function(){return{form:{account:"wjc",password:"000919"},newuser:{account:"",password:"",name:"",url:"",role:""},checked:!0,dialogFormVisible:!1,formLabelWidth:"60px"}},components:{},computed:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{onSubmit:function(e){var t=this;Object(r["a"])(e).then((function(e){var s=e.data,o=s.name,a=s.photo,r=s.token;sessionStorage.setItem("token",r),t.$store.commit("SET_NAME",o),t.$store.commit("SET_PHOTO",a),t.$store.commit("SET_TOKEN",r),t.$store.dispatch("setMenuList"),t.$router.push("/home")}))}}},i=l,n=(s("96eb"),s("cba8")),c=Object(n["a"])(i,o,a,!1,null,"512206de",null);t["default"]=c.exports}}]);