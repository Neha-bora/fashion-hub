(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,a){e.exports={Container:"BackgroundVideo_Container__3QD3v",Video:"BackgroundVideo_Video__3w3E8",Content:"BackgroundVideo_Content__gnXYD",SubContent:"BackgroundVideo_SubContent__1LGQ8"}},18:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/woman-902210_1920.ed1c0d8c.jpg"},33:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a(10),l=a(4),s=(a(18),"https://myfashionsite.herokuapp.com/api"),m=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},i=function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#ffffff"}},u=Object(o.g)((function(e){var t=e.history;return c.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-pink"},c.a.createElement("a",{class:"navbar-brand mb-0 h1 text-white ",href:""}," FashionHub"),c.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo03"},c.a.createElement("ul",{class:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{style:i(t,"/"),className:"nav-link",to:"/"},"Home ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/cart"),className:"nav-link",to:"/cart"}," ",c.a.createElement("i",{class:"fas fa-shopping-cart p-2"}),"Cart ")),m()&&0===m().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},c.a.createElement("i",{class:"fas fa-user-alt p-2"})," Your Account")),m()&&1===m().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"Admin Panel")),!m()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/signup"),className:"nav-link",to:"/signup"},"SignUp")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/signin"),className:"nav-link",to:"/signin"},"SignIn "))),m()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(s,"/signout"),{method:"GET"}).then((function(e){return console.log("signout successful")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},"Signout")))))})),d=function(e){var t=e.title,a=void 0===t?" my title":t,n=e.description,r=void 0===n?" my description":n,o=e.className,l=void 0===o?"bg-white text-white p-4 ":o,s=e.children;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-white text-dark text-center"},c.a.createElement("h2",{className:"display-4 "}," ",a," "),c.a.createElement("p",{className:"lead pStyle"},r)),c.a.createElement("div",{className:l},s)),c.a.createElement("footer",{className:"footer bg-dark mt-4"},c.a.createElement("div",{className:"container-fluid bg-pink text-white text-center py-2"},c.a.createElement("h4",null,"If you got any questions, feel free to reach out!"),c.a.createElement("button",{class:"btn btn-outline-warning"},"Contact Us")),c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"An Amazing  ",c.a.createElement("span",{className:"text-white"},"Fashion Hub"),"  Shop form here"))))},p=function(e){var t=e.product,a=t?"".concat(s,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ";return c.a.createElement("div",{className:"rounded border border-success p-2 text-center"},c.a.createElement("img",{src:a,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded image-size "}))},b=a(1),f=function(e){var t=e.product,a=e.addtocart,r=void 0===a||a,s=e.removeFromCart,m=void 0!==s&&s,i=e.setReload,u=void 0===i?function(e){return e}:i,d=e.reload,f=void 0===d?void 0:d,E=Object(n.useState)(!1),g=Object(l.a)(E,2),h=g[0],N=g[1],v=Object(n.useState)(t.count),y=Object(l.a)(v,2),j=(y[0],y[1],t?t.name:"A photo from pixels"),O=t?t.description:"Default",w=t?t.price:"Default",x=function(){!function(e,t){var a=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(b.a)(Object(b.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){return N(!0)}))};return c.a.createElement("div",{className:"card  text-dark bg-white card-fixed "},c.a.createElement("div",{className:"card-body "},function(e){if(e)return c.a.createElement(o.a,{to:"/cart"})}(h),c.a.createElement(p,{product:t}),c.a.createElement("div",{className:" lead font-weight-normal text-center"},j),c.a.createElement("p",{className:"lead  font-weight-normal text-wrap"},O),c.a.createElement("p",{className:"btn bg-green  rounded  btn-sm px-4 "},w),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:x,className:"btn btn-block btn-outline-success  mt-2 mb-2"},"Add to Cart")}(r)),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),u(!f)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(m)))))},E=a(26),g=a.n(E),h=a(27),N=a(28),v=a(32),y=a(31),j=a(15),O=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement(j.a,null,c.a.createElement(j.a.Item,null,c.a.createElement("img",{style:{height:"350px"},className:"d-block w-100",src:"assets/img/shoping.jpg"})),c.a.createElement(j.a.Item,null,c.a.createElement("img",{style:{height:"350px"},className:"d-block w-100",src:"assets/img/girl.jpg"})),c.a.createElement(j.a.Item,null,c.a.createElement("img",{style:{height:"350px"},className:"d-block w-100",src:"assets/img/blur.jpg"})))}}]),a}(n.Component),w=a(14),x=a.n(w),k=function(){return c.a.createElement("div",{className:x.a.Container},c.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:x.a.Video},c.a.createElement("source",{src:"https://player.vimeo.com/external/403777528.sd.mp4?s=253a15b2491b958e3f45c1f59747b8068898b516&profile_id=164",type:"video/mp4"}),"Your browser does not support the video tag."),c.a.createElement("div",{className:x.a.Content},c.a.createElement("div",{className:x.a.SubContent},c.a.createElement("h1",null,"Fashion Hub"),c.a.createElement("p",null,"Now Delivering All Products "),c.a.createElement(r.b,{to:"cart"},c.a.createElement("button",{type:"button",className:"btn btn-outline-dark p-2"},"Order Now")),c.a.createElement("img",{src:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"profile"}))))};function S(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),m=Object(l.a)(o,2),i=(m[0],m[1]),u=function(){fetch("".concat(s,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?i(e.error):r(e)}))};return Object(n.useEffect)((function(){u()}),[]),c.a.createElement(d,{title:"Fashion Hub",description:"Shop from here "},c.a.createElement(k,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 "},c.a.createElement("h1",{className:"pCaption "},"Fashion is the armor to survive the reality of everyday lifeShope from here")),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("img",{src:g.a,alt:"close image",width:"380px",height:"400px"}))),c.a.createElement(O,null),c.a.createElement("div",{className:"row mt-4  "},c.a.createElement("h3",{className:"text-dark "},"Products"),c.a.createElement("div",{className:"row mt-4 "},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-sm-4 mb-4"},c.a.createElement(f,{product:e}))})))))}var C,A=a(9),P=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],m=a.name,i=a.email,u=a.password,p=a.error,f=a.success,E=function(e){return function(t){o(Object(b.a)(Object(b.a)({},a),{},Object(A.a)({error:!1},e,t.target.value)))}},g=function(e){var t;e.preventDefault(),o(Object(b.a)(Object(b.a)({},a),{},{error:!1})),(t={name:m,email:i,password:u},fetch("".concat(s,"/signup"),{method:"POST",headers:{Accept:"Application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){console.log(e),e.errors?o(Object(b.a)(Object(b.a)({},a),{},{error:e.errors,success:!1})):o(Object(b.a)(Object(b.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in SignUp"))};return c.a.createElement(d,{title:"SignUp",description:" new user add from here"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-primary",style:{display:f?"":"none"}},"New Account was created successfully!.Please",c.a.createElement(r.b,{to:"/signin"},"Login Here "),c.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p,c.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-dark pStyle"},"Name"),c.a.createElement("input",{onChange:E("name"),className:"form-control",value:m,type:"text"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-dark pStyle"},"Email"),c.a.createElement("input",{className:"form-control",onChange:E("email"),value:i,type:"email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-dark pStyle"},"Password"),c.a.createElement("input",{className:"form-control",onChange:E("password"),value:u,type:"password"})),c.a.createElement("button",{onClick:g,className:"btn bg-green btn-block"}," Submit ")))))},_=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],i=a.email,u=a.password,p=a.error,f=a.loading,E=a.didRedirect,g=m.user,h=function(e){return function(t){r(Object(b.a)(Object(b.a)({},a),{},Object(A.a)({error:!1},e,t.target.value)))}},N=function(e){e.preventDefault(),r(Object(b.a)(Object(b.a)({},a),{},{error:!1,loading:!0})),function(e){return fetch("".concat(s,"/signin"),{method:"POST",headers:{Accept:"Application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:i,password:u}).then((function(e){console.log(e),e.errors?r(Object(b.a)(Object(b.a)({},a),{},{error:e.errors,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(b.a)(Object(b.a)({},a),{},{didRedirect:!0}))}))})).catch(console.log("signin  process failed"))};return c.a.createElement(d,{title:"SignIn",description:"signIn here"},f&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p,c.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-dark pStyle"},"Email"),c.a.createElement("input",{className:"form-control",onChange:h("email"),value:i,type:"email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-dark pStyle"},"Password"),c.a.createElement("input",{className:"form-control",onChange:h("password"),value:u,type:"password"})),c.a.createElement("button",{onClick:N,className:"btn bg-green btn-block"}," Submit ")))),E?g&&1===g.role?c.a.createElement(o.a,{to:"/admin/dashboard"}):c.a.createElement(o.a,{to:"/user/dashboard"}):m()?c.a.createElement(o.a,{to:"/"}):void 0)},D=a(16),T=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},I=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()&&1===m().user.role?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},H=a(30),F=a.n(H),U=function(e){var t=e.products,a=(e.setReload,e.reload,Object(n.useState)({loading:!1,success:!1,error:"",address:""})),o=Object(l.a)(a,2),i=(o[0],o[1],m()&&m().token,m()&&m().user._id,function(){var e=0;return t.map((function(t){e+=t.price})),e}),u=function(e){var a={token:e,products:t};return fetch("".concat(s,"/stripepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){console.log(e);var t=e.status;console.log("STATUS",t)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("h3",{className:"text-dark "}," Your final bill \u20b9 ",i()," "),m()?c.a.createElement(F.a,{stripeKey:"pk_test_LP61GELvxdOS5XS06Shv9PsS00PH7woloH",token:u,amount:100*i(),name:"Buy t-shirts",shippingAddress:!0,billingAddress:!0},c.a.createElement("button",{className:"btn btn-success"}," Pay with Stripe")):c.a.createElement(r.b,{to:"signin"},c.a.createElement("button",{className:"btn btn-warning"}," signin")))},B=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=s[0],i=s[1];Object(n.useEffect)((function(){r(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[m]);return c.a.createElement(d,{title:"Place your order now",description:"Ready to Buy"},c.a.createElement(U,{products:a,setReload:i}),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",null,c.a.createElement("h5",{className:"text-info"},"Add to card"),a.map((function(e,t){return c.a.createElement(f,{key:t,product:e,addtocart:!1,removeFromCart:!0,setReload:i,reload:m})}))))))},J={color:""},R=(new Date).getHours();R<12?(C="Good morning",J.color="red"):R<18?(C="Good afternoon",J.color="green"):(C="Good night",J.color="blue");var G=function(){var e=m().user,t=e.name,a=e.email;e.role;return c.a.createElement(d,{title:"Fashion Hub",description:"explore fashion world with us"},c.a.createElement("h1",{className:" text-center heading",style:J}," hi!  ",C," ",t),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header text-info"},"Customer info "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("h5",{className:"text-dark"}," ",c.a.createElement("span",{className:" badge badge-success mr-2"},"Name: "),t," ")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("h5",{className:"text-dark"},"  ",c.a.createElement("span",{className:" badge badge-success mr-2"},"Email: ")," ",a)),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-danger"},"Customer Area"))))),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("div",{className:"card "},c.a.createElement("h4",{className:"card-header bg-blue  text-white"},"Customer Navigation "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/cart",className:"nav-link text-success"},"Add to cart")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/",className:"nav-link text-success"},"Shop now")))))))},z=function(){var e=m().user,t=e.name,a=e.email;e.role;return c.a.createElement(d,{title:"Welcome Admin area",description:"Manage all your product here",className:"container  p-4"},c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header"}," Admin info "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:" badge badge-success mr-2"},"Name: "),t),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:" badge badge-success mr-2"},"Email: "),a),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-danger"},"Admin Area"))))),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("div",{className:"card "},c.a.createElement("h4",{className:"card-header bg-blue  text-white"},"Admin Navigation "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/create/category",className:"nav-link text-success"},"Create Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/categories",className:"nav-link text-success"},"Manage Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/create/product",className:"nav-link text-success"},"Create product")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/products",className:"nav-link text-success"},"Manage products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/orders",className:"nav-link text-success"},"Manage Orders")))))))},M=function(){return fetch("".concat(s,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},V=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),p=u[0],b=u[1],f=Object(n.useState)(!1),E=Object(l.a)(f,2),g=E[0],h=E[1],N=m(),v=N.user,y=N.token,j=function(e){b(""),o(e.target.value)},O=function(e){e.preventDefault(),b(""),h(!1),function(e,t,a){return fetch("".concat(s,"/category/create/").concat(e),{method:"POST",headers:{Accept:"Application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(v._id,y,{name:a}).then((function(e){e.error?(console.log(e),b(!0)):(b(""),h(!0),o(""))}))};return c.a.createElement(d,{title:"Create a category here",description:"Add a new category for t-shirt",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-4"},function(){if(g)return c.a.createElement("h4",{className:"text-success"}," Created category successfully ")}(),function(){if(p)return c.a.createElement("h4",{className:"text-success"}," Failed to create Category ")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter the category"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:j,value:a,autoFocus:!0,required:!0,placeholder:"For Ex-summer"}),c.a.createElement("button",{onClick:O,className:"btn btn-outline-success"},"Create category "))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.b,{className:"btn btn-sm btn-info mb-3",to:"/admin/dashboard"},"Admin Home ")))))},L=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,p=i.token,b=function(){M().then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){b()}),[]);var f=function(e){return function(e,t,a){return fetch("".concat(s,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"Application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json})).catch((function(e){return console.log(e)}))}(e,u._id,p).then((function(e){e.error?console.log(e.error):b()}))};return c.a.createElement(d,{title:"Manage Categories here",description:"Hey you can manage categories for t-shit"},c.a.createElement("h2",{className:"mb-4"},"All Categories:"),c.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-dark my-3"},"Total  Categories"),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-dark text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.b,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){f(e._id)},className:"btn btn-danger"},"Delete")))})))))},Q=function(){var e=m(),t=e.user,a=e.token,o=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),i=Object(l.a)(o,2),u=i[0],p=i[1],f=u.name,E=u.description,g=u.price,h=u.stock,N=u.categories,v=(u.category,u.loading,u.error),y=u.createdProduct,j=(u.getaRedirect,u.formData);Object(n.useEffect)((function(){M().then((function(e){e.error?p(Object(b.a)(Object(b.a)({},u),{},{error:e.error})):(p(Object(b.a)(Object(b.a)({},u),{},{categories:e,formData:new FormData})),console.log("CATE:",N))}))}),[]);var O=function(e){e.preventDefault(),p(Object(b.a)(Object(b.a)({},u),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(s,"/product/create/").concat(e),{method:"POST",headers:{Accept:"Application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,a,j).then((function(e){e.error?p(Object(b.a)(Object(b.a)({},u),{},{error:e.error})):p(Object(b.a)(Object(b.a)({},u),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},w=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;j.set(e,a),p(Object(b.a)(Object(b.a)({},u),{},Object(A.a)({},e,a)))}};return c.a.createElement(d,{title:"Add Product  here",description:"Hey you can add more t-shit",className:"container bg-info p-4"},c.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home "),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:y?"":"none"}},c.a.createElement("h4",null,y," Created product Successfully "),c.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),function(){if(v)return c.a.createElement("div",{className:"alert alert-warning mt-3"},c.a.createElement("h4",null," Failed to create Product "),c.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}(),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:w("name"),name:"photo",className:"form-control",placeholder:"Name",value:f})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:w("description"),name:"photo",className:"form-control",placeholder:"Description",value:E})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:w("price"),type:"number",className:"form-control",placeholder:"Price",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:w("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),N&&N.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:w("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:h})),c.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-outline-success mb-4"},"Create Product")))))},q=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,p=i.token,b=function(){fetch("".concat(s,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){b()}),[]);var f=function(e){return function(e,t,a){return fetch("".concat(s,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"Application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(e,u._id,p).then((function(e){e.error?console.log(e.error):b()}))};return c.a.createElement(d,{title:"Welcome admin",description:"Manage products here"},c.a.createElement("h2",{className:"mb-4"},"All products:"),c.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-dark my-3"},"Total  products"),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-dark text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){f(e._id)},className:"btn btn-danger"},"Delete")))})))))},W=function(e){var t=e.match,a=m(),o=a.user,i=a.token,u=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),p=Object(l.a)(u,2),f=p[0],E=p[1],g=f.name,h=f.description,N=f.price,v=f.stock,y=f.categories,j=(f.category,f.loading,f.error,f.createdProduct),O=(f.getaRedirect,f.formData),w=function(e){(function(e){return fetch("".concat(s,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){console.log("prod",e),e.error?E(Object(b.a)(Object(b.a)({},f),{},{error:e.error})):(E(Object(b.a)(Object(b.a)({},f),{},{name:e.name,description:e.description,price:e.price,stock:e.stock,category:e.category._id,formData:new FormData})),x())}))},x=function(){M().then((function(e){e.error?E(Object(b.a)(Object(b.a)({},f),{},{error:e.error})):E({categories:e,formData:new FormData})}))};Object(n.useEffect)((function(){w(t.params.productId)}),[]);var k=function(e){e.preventDefault(),E(Object(b.a)(Object(b.a)({},f),{},{error:"",loading:!0})),function(e,t,a,n){return fetch("".concat(s,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"Application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,o._id,i,O).then((function(e){e.error?E(Object(b.a)(Object(b.a)({},f),{},{error:e.error})):E(Object(b.a)(Object(b.a)({},f),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},S=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;O.set(e,a),E(Object(b.a)(Object(b.a)({},f),{},Object(A.a)({},e,a)))}};return c.a.createElement(d,{title:"Update Product  here",description:"Hey you can update t-shit",className:"container bg-info p-4"},c.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home "),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:j?"":"none"}},c.a.createElement("h4",null,j,"  Update product Successfully "),c.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:S("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:S("name"),name:"photo",className:"form-control",placeholder:"Name",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:S("description"),name:"photo",className:"form-control",placeholder:"Description",value:h})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:S("price"),type:"number",className:"form-control",placeholder:"Price",value:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:S("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),y&&y.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:S("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:v})),c.a.createElement("button",{type:"submit",onClick:k,className:"btn btn-outline-success mb-4"},"Update Product")))))},Y=function(e){var t=e.match,a=m(),o=a.user,i=a.token,u=Object(n.useState)(""),p=Object(l.a)(u,2),f=p[0],E=p[1],g=Object(n.useState)(!1),h=Object(l.a)(g,2),N=h[0],v=h[1],y=Object(n.useState)(!1),j=Object(l.a)(y,2),O=j[0],w=j[1],x=function(e){(function(e){return fetch("".concat(s,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){console.log("cate:",e),e.error?E(Object(b.a)(Object(b.a)({},f),{},{error:e.error})):E(Object(b.a)(Object(b.a)({},f),{},{name:e.name}))}))};Object(n.useEffect)((function(){x(t.params.categoryId)}));var k=function(e){v(""),E(e.target.value)},S=function(e){e.preventDefault(),v(""),w(!1),function(e,t,a,n){return fetch("".concat(s,"/category/").concat(t,"/").concat(e),{method:"PUT",headers:{Accept:"Application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.categoryId,o._id,i,{name:f}).then((function(e){e.error?(console.log(e),v(!0)):(v(""),w(!0),E(""))}))};return c.a.createElement(d,{title:"Update a category here",description:"update your category for t-shirt",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-4"},function(){if(O)return c.a.createElement("h4",{className:"text-success"}," Update category successfully ")}(),function(){if(N)return c.a.createElement("h4",{className:"text-success"}," Failed to update Category ")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter the category"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:k,value:f,autoFocus:!0,required:!0,placeholder:"For Ex-summer"}),c.a.createElement("button",{onClick:S,className:"btn btn-outline-success"},"Update Comfirm"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.b,{className:"btn btn-sm btn-info mb-3",to:"/admin/dashboard"},"Admin Home ")))))},X=function(){return c.a.createElement(r.a,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/",exact:!0,component:S}),c.a.createElement(o.b,{path:"/signup",exact:!0,component:P}),c.a.createElement(o.b,{path:"/signin",exact:!0,component:_}),c.a.createElement(o.b,{path:"/cart",exact:!0,component:B}),c.a.createElement(T,{path:"/user/dashboard",exact:!0,component:G}),c.a.createElement(I,{path:"/admin/dashboard",exact:!0,component:z}),c.a.createElement(I,{path:"/admin/create/category",exact:!0,component:V}),c.a.createElement(I,{path:"/admin/categories",exact:!0,component:L}),c.a.createElement(I,{path:"/admin/create/product",exact:!0,component:Q}),c.a.createElement(I,{path:"/admin/products",exact:!0,component:q}),c.a.createElement(I,{path:"/admin/product/update/:productId",exact:!0,component:W}),c.a.createElement(I,{path:"/admin/category/update/:categoryId",exact:!0,component:Y})))},K=a(13);a.n(K).a.render(c.a.createElement(X,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b5574ac0.chunk.js.map