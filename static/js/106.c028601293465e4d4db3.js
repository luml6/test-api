webpackJsonp([106],{1233:function(n,e,t){"use strict";var a=t(1234);e.a={components:{CheckIcon:a.a},data:function(){return{demo1:!1,demo2:!0}}}},1234:function(n,e,t){"use strict";function a(n){t(1235)}var c=t(1237),o=t(1238),i=t(0),s=a,u=i(c.a,o.a,!1,s,null,null);e.a=u.exports},1235:function(n,e,t){var a=t(1236);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(262)("4dff98a1",a,!0)},1236:function(n,e,t){e=n.exports=t(261)(),e.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n",""])},1237:function(n,e,t){"use strict";var a=t(68);e.a={name:"check-icon",components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}},1238:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-check-icon",on:{click:n.updateValue}},[t("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===n.type&&n.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),n._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===n.type&&n.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),n._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:!n.value,expression:"!value"}],attrs:{type:"circle"}}),n._v(" "),t("span",[n._t("default")],2)],1)},c=[],o={render:a,staticRenderFns:c};e.a=o},1239:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticStyle:{padding:"15px"}},[t("check-icon",{attrs:{value:n.demo1},on:{"update:value":function(e){n.demo1=e}}},[n._v(" "+n._s(n.$t("Do you agree?"))+" ("+n._s(n.demo1)+")")]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("check-icon",{attrs:{value:n.demo2,type:"plain"},on:{"update:value":function(e){n.demo2=e}}},[n._v(" "+n._s(n.$t("Do you agree?"))+" ("+n._s(n.demo2)+")")])],1)])},c=[],o={render:a,staticRenderFns:c};e.a=o},376:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(1233),c=t(1239),o=t(0),i=o(a.a,c.a,!1,null,null,null);e.default=i.exports}});