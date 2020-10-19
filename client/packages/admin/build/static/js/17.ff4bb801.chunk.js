(this["webpackJsonp@pick-bazar/admin"]=this["webpackJsonp@pick-bazar/admin"]||[]).push([[17],{106:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var r=a(44),n=a(70);const o=Object(n.b)("div",()=>({backgroundColor:"#ffffff"})),l=Object(n.b)("header",()=>({display:"flex",justifyContent:"space-between",alignItems:"center",flex:"0 1 auto",flexDirection:"row",flexWrap:"wrap",padding:"40px",backgroundColor:"#ffffff","@media only screen and (max-width: 990px)":{padding:"20px"}})),i=Object(n.b)("h2",({$theme:e})=>Object(r.a)(Object(r.a)({},e.typography.fontBold18),{},{color:e.colors.textDark,margin:0}));Object(n.b)("div",({$theme:e})=>({display:"flex",justifyContent:"space-between",paddingTop:"20px"}))},107:function(e,t,a){e.exports=a.p+"static/media/no-result.e1457eaf.svg"},109:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(107),l=a.n(o),i=a(70);const c=Object(i.b)("div",()=>({width:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"50px 20px",h3:{fontSize:"24px",fontWeight:700,color:"#161f6a",margin:"0 0 15px"},p:{fontSize:"16px",fontWeight:400,color:"#707070",margin:0}})),s=Object(i.b)("div",()=>({marginTop:"50px",width:"100%",maxWidth:"600px",display:"flex",alignItems:"center",justifyContent:"center",img:{maxWidth:"100%"}})),d=Object(i.b)("div",()=>({width:"100%",display:"flex",justifyContent:"center",marginTop:"70px"}));Object(i.b)("button",()=>({cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#ffffff",backgroundColor:"#009e7f",height:"50px",borderRadius:"3px",fontFamily:"'Lato', sans-serif",fontSize:"16px",fontWeight:700,textDecoration:"none",textTransform:"capitalize",padding:"0 30px",border:0,transition:"all 0.3s ease"}));var m=a(94);t.a=({id:e,onClick:t,hideButton:a=!0,style:r})=>n.a.createElement(c,{id:e,style:r},n.a.createElement("h3",null,"Sorry, No result found :("),n.a.createElement(s,null,n.a.createElement("img",{src:l.a,alt:"No Result"})),a?n.a.createElement(d,null,n.a.createElement("div",{onClick:t},n.a.createElement(m.b,null,"Try Again Later"))):null)},119:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(177);Object.freeze({top:"top",right:"right",bottom:"bottom",left:"left"});t.a=e=>{let t=Object.assign({},e);return n.a.createElement(o.a,t)}},292:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var r=a(46),n=a(44),o=a(55),l=a(0),i=a.n(l),c=a(70),s=a(120),d=a.n(s),m=a(95),u=a(97),b=a(96),p=a(31),g=a.n(p),f=a(47),h=a(106),x=a(119),y=a(152);const j=Object(c.b)("div",()=>({width:"100%",height:"450px"})),O=Object(c.d)(y.c,()=>({borderTopLeftRadius:"0 !important",borderTopRightRadius:"0 !important",borderBottomLeftRadius:"0 !important",borderBottomRightRadius:"0 !important",alignContent:"start"})),v=Object(c.d)(y.b,()=>({fontFamily:"'Lato', sans-serif",fontWeight:700,color:"#161F6A !important",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",borderTopColor:"rgba(0, 0, 0, 0.12)",borderRightColor:"rgba(0, 0, 0, 0.12)",borderBottomColor:"rgba(0, 0, 0, 0.12)",borderLeftColor:"rgba(0, 0, 0, 0.12)",alignSelf:"start"})),E=Object(c.d)(y.a,()=>({fontFamily:"'Lato', sans-serif",fontWeight:400,color:"#161F6A !important",alignSelf:"center"}));Object(c.d)(y.b,()=>({fontFamily:"'Lato', sans-serif",fontWeight:700,color:"#161F6A !important",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",borderTopColor:"rgba(0, 0, 0, 0.12)",borderRightColor:"rgba(0, 0, 0, 0.12)",borderBottomColor:"rgba(0, 0, 0, 0.12)",borderLeftColor:"rgba(0, 0, 0, 0.12)",alignSelf:"start",justifyContent:"center"})),Object(c.d)(y.a,()=>({fontFamily:"'Lato', sans-serif",fontWeight:400,color:"#161F6A !important",alignSelf:"center",justifyContent:"center"}));var C=a(109);function R(){const e=Object(o.a)(["\n  query getOrders($status: String, $limit: Int, $searchText: String) {\n    orders(status: $status, limit: $limit, searchText: $searchText) {\n      id\n      customer_id\n      creation_date\n      delivery_address\n      amount\n      payment_method\n      contact_number\n      status\n    }\n  }\n"]);return R=function(){return e},e}const $=g()(R()),w=Object(c.a)(),k=Object(c.b)("div",({$theme:e})=>Object(n.a)(Object(n.a)({},e.typography.fontBold14),{},{color:e.colors.textDark,display:"flex",alignItems:"center",lineHeight:"1",textTransform:"capitalize",":before":{content:'""',width:"10px",height:"10px",display:"inline-block",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px",backgroundColor:e.borders.borderE6,marginRight:"10px"}})),B=Object(c.d)(m.a,()=>({"@media only screen and (max-width: 767px)":{marginBottom:"20px",":last-child":{marginBottom:0}}})),L=Object(c.d)(m.c,()=>({"@media only screen and (min-width: 768px)":{alignItems:"center"}})),T=[{value:"delivered",label:"Delivered"},{value:"pending",label:"Pending"},{value:"processing",label:"Processing"},{value:"failed",label:"Failed"}],S=[{value:7,label:"Last 7 orders"},{value:15,label:"Last 15 orders"},{value:30,label:"Last 30 orders"}];function W(){const e=Object(l.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(l.useState)(!1),c=Object(r.a)(o,2),s=c[0],p=c[1],g=w(),y=Object(r.a)(g,2),R=y[0],W=y[1],D=R({":before":{content:'""',backgroundColor:W.colors.primary}}),z=R({":before":{content:'""',backgroundColor:W.colors.red400}}),I=R({":before":{content:'""',backgroundColor:W.colors.textNormal}}),F=R({":before":{content:'""',backgroundColor:W.colors.blue400}}),A=Object(l.useState)([]),_=Object(r.a)(A,2),M=_[0],N=_[1],P=Object(l.useState)([]),K=Object(r.a)(P,2),Y=K[0],H=K[1],J=Object(l.useState)([]),q=Object(r.a)(J,2),G=q[0],V=q[1],Z=Object(f.b)($),Q=Z.data,U=Z.error,X=Z.refetch;if(U)return i.a.createElement("div",null,"Error! ",U.message);function ee(e){const t=e.currentTarget.name;a.includes(t)?n(e=>e.filter(e=>e!==t)):n(e=>[...e,t])}return i.a.createElement(m.b,{fluid:!0},i.a.createElement(L,null,i.a.createElement(B,{md:12},i.a.createElement(h.a,{style:{marginBottom:30,boxShadow:"0 0 8px rgba(0, 0 ,0, 0.1)"}},i.a.createElement(B,{md:3,xs:12},i.a.createElement(h.b,null,"Orders")),i.a.createElement(B,{md:9,xs:12},i.a.createElement(L,null,i.a.createElement(B,{md:3,xs:12},i.a.createElement(u.a,{options:T,labelKey:"label",valueKey:"value",placeholder:"Status",value:M,searchable:!1,onChange:function({value:e}){N(e),e.length?X({status:e[0].value,limit:Y.length?Y[0].value:null}):X({status:null})}})),i.a.createElement(B,{md:3,xs:12},i.a.createElement(u.a,{options:S,labelKey:"label",valueKey:"value",value:Y,placeholder:"Order Limits",searchable:!1,onChange:function({value:e}){H(e),e.length?X({status:M.length?M[0].value:null,limit:e[0].value}):X({limit:null})}})),i.a.createElement(B,{md:6,xs:12},i.a.createElement(b.a,{value:G,placeholder:"Ex: Search By Address",onChange:function(e){const t=e.currentTarget.value;V(t),X({searchText:t})},clearable:!0}))))),i.a.createElement(h.c,{style:{boxShadow:"0 0 5px rgba(0, 0 , 0, 0.05)"}},i.a.createElement(j,null,i.a.createElement(O,{$gridTemplateColumns:"minmax(70px, 70px) minmax(70px, 70px) minmax(150px, auto) minmax(150px, auto) minmax(200px, max-content) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto)"},i.a.createElement(v,null,i.a.createElement(x.a,{type:"checkbox",value:"checkAll",checked:s,onChange:function(e){if(e.target.checked){const e=Q&&Q.orders.map(e=>e.id);n(e)}else n([]);p(e.target.checked)},overrides:{Checkmark:{style:{borderTopWidth:"2px",borderRightWidth:"2px",borderBottomWidth:"2px",borderLeftWidth:"2px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomRightRadius:"4px",borderBottomLeftRadius:"4px"}}}})),i.a.createElement(v,null,"ID"),i.a.createElement(v,null,"Customer ID"),i.a.createElement(v,null,"Time"),i.a.createElement(v,null,"Delivery Address"),i.a.createElement(v,null,"Amount"),i.a.createElement(v,null,"Payment Method"),i.a.createElement(v,null,"Contact"),i.a.createElement(v,null,"Status"),Q?Q.orders.length?Q.orders.map(e=>Object.values(e)).map((e,t)=>i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(E,null,i.a.createElement(x.a,{name:e[0],checked:a.includes(e[0]),onChange:ee,overrides:{Checkmark:{style:{borderTopWidth:"2px",borderRightWidth:"2px",borderBottomWidth:"2px",borderLeftWidth:"2px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomRightRadius:"4px",borderBottomLeftRadius:"4px"}}}})),i.a.createElement(E,null,e[0]),i.a.createElement(E,null,e[1]),i.a.createElement(E,null,d()(e[2]).format("DD MMM YYYY")),i.a.createElement(E,null,e[3]),i.a.createElement(E,null,"$",e[4]),i.a.createElement(E,null,e[5]),i.a.createElement(E,null,e[6]),i.a.createElement(E,{style:{justifyContent:"center"}},i.a.createElement(k,{className:"delivered"===e[7].toLowerCase()?D:"pending"===e[7].toLowerCase()?F:"processing"===e[7].toLowerCase()?I:"failed"===e[7].toLowerCase()?z:""},e[7])))):i.a.createElement(C.a,{hideButton:!1,style:{gridColumnStart:"1",gridColumnEnd:"one"}}):null))))))}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return c.a}));var r=a(44),n=a(54),o=a(0),l=a.n(o),i=a(289),c=a(180);t.b=e=>{let t=e.children,a=e.overrides,o=Object(n.a)(e,["children","overrides"]);return l.a.createElement(i.a,Object.assign({},o,{overrides:Object(r.a)({BaseButton:{style:({$theme:e,$size:t,$shape:a})=>Object(r.a)(Object(r.a)({},(({$theme:e,$size:t})=>{switch(t){case c.c.compact:case c.c.large:default:return{paddingLeft:e.sizing.scale25,paddingRight:e.sizing.scale25}}})({$theme:e,$size:t})),(({$theme:e,$size:t,$shape:a})=>{let r=e.buttonBorderRadius;return a===c.b.pill?r=t===c.c.compact?"30px":t===c.c.large?"42px":"38px":a===c.b.round&&(r="50%"),{borderTopRightRadius:r,borderBottomRightRadius:r,borderTopLeftRadius:r,borderBottomLeftRadius:r}})({$theme:e,$size:t,$shape:a}))}},a)}),t)}},95:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i}));var r=a(70),n=a(103);const o=Object(r.b)(n.Grid,()=>({})),l=Object(r.b)(n.Row,()=>({margin:"0 -15px 30px",":last-child":{marginBottom:"0px"}})),i=Object(r.b)(n.Col,()=>({padding:"0 15px"}))},96:function(e,t,a){"use strict";var r=a(44),n=a(0),o=a.n(n),l=a(281);t.a=e=>{let t=Object.assign({},e);return o.a.createElement(l.a,Object.assign({overrides:{Input:{style:({$theme:e})=>Object(r.a)({},(({$theme:e})=>Object(r.a)({color:e.colors.textDark},e.typography.fontBold14))({$theme:e}))}}},t))}},97:function(e,t,a){"use strict";var r=a(44),n=a(0),o=a.n(n),l=a(287);const i=()=>o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"5",viewBox:"0 0 10 5"},o.a.createElement("path",{"data-name":"_ionicons_svg_md-arrow-dropdown (2)",d:"M128,192l5,5,5-5Z",transform:"translate(-128 -192)",fill:"currentColor"})),c=({$theme:e})=>e.typography.fontBold14;t.a=e=>{let t=Object.assign({},e);return n.createElement(l.a,Object.assign({overrides:{SelectArrow:()=>n.createElement(i,null),Popover:{props:{overrides:{Body:{style:{zIndex:1}}}}},Placeholder:{style:({$theme:e})=>Object(r.a)({color:e.colors.textDark},c({$theme:e}))},SingleValue:{style:({$theme:e})=>Object(r.a)(Object(r.a)({},c({$theme:e})),{},{color:e.colors.textDark,lineHeight:"1.5"})},DropdownListItem:{style:({$theme:e})=>({fontSize:"14px",fontWeight:"700",color:e.colors.textDark})},OptionContent:{style:({$theme:e,$selected:t})=>Object(r.a)(Object(r.a)({},e.typography.fontBold14),{},{color:t?e.colors.textDark:e.colors.textNormal})},DropdownOption:{style:({$theme:e})=>({fontSize:"14px",fontWeight:"700",color:e.colors.textDark})}}},t))}}}]);
//# sourceMappingURL=17.ff4bb801.chunk.js.map