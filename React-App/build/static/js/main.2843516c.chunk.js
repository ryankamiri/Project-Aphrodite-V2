(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(31).concat([function(e,t,a){e.exports=a(71)},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/blazer.b49c6bf0.png"},function(e,t,a){e.exports=a.p+"static/media/blazer_edge.d6687722.png"},function(e,t,a){e.exports=a.p+"static/media/dress.b14bd10e.png"},function(e,t,a){e.exports=a.p+"static/media/dress_edge.49b782b6.png"},function(e,t,a){e.exports=a.p+"static/media/Female1.4a7b8527.png"},function(e,t,a){e.exports=a.p+"static/media/Female1_edge.7ddb644a.png"},function(e,t,a){e.exports=a.p+"static/media/Female2.88f970bf.png"},function(e,t,a){e.exports=a.p+"static/media/Female2_edge.d696600f.png"},function(e,t,a){e.exports=a.p+"static/media/Female3.c5317f85.png"},function(e,t,a){e.exports=a.p+"static/media/Female3_edge.8283876b.png"},function(e,t,a){e.exports=a.p+"static/media/Female4.9fb20063.png"},function(e,t,a){e.exports=a.p+"static/media/Female4_edge.dc08b427.png"},function(e,t,a){e.exports=a.p+"static/media/Female5.e30577c6.png"},function(e,t,a){e.exports=a.p+"static/media/Female5_edge.f6a8a69c.png"},function(e,t,a){e.exports=a.p+"static/media/Male 3.174e7c83.png"},function(e,t,a){e.exports=a.p+"static/media/Male_3_edge.dc16405b.png"},function(e,t,a){e.exports=a.p+"static/media/Male2.1e36de40.png"},function(e,t,a){e.exports=a.p+"static/media/Male2_edge.125b2e2e.png"},function(e,t,a){e.exports=a.p+"static/media/Male4.03059c40.png"},function(e,t,a){e.exports=a.p+"static/media/Male4_edge.fdf1a49e.png"},function(e,t,a){e.exports=a.p+"static/media/miniskirt.4c3fed74.png"},function(e,t,a){e.exports=a.p+"static/media/miniskirt_edge.0be29ff4.png"},function(e,t,a){e.exports=a.p+"static/media/skirt.bf49486d.png"},function(e,t,a){e.exports=a.p+"static/media/skirt_edge.71d8c236.png"},function(e,t,a){e.exports=a.p+"static/media/split-dress.6f974125.png"},function(e,t,a){e.exports=a.p+"static/media/split_dress_edge.3b227e86.png"},function(e,t,a){e.exports=a.p+"static/media/2F76DBD1-17F3-4BA3-A311-441A75D73ECC.fe91b60e.jpeg"},function(e,t,a){e.exports=a.p+"static/media/40F0D756-F5F5-4C2F-9528-170ACBA135A1.e8df2f6d.jpeg"},function(e,t,a){e.exports=a.p+"static/media/843A5D7D-4B09-4260-9846-B930F355755D.96f2fb1a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/69517F51-6E25-4015-9868-4ECF86C6F213_4_5005_c.ef98c4ae.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Female.e15f9ead.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(29),c=a.n(r),i=a(30),o=a(1);var s=e=>{let{images:t,onSelectImage:a,selectedIndex:l}=e;const r=e=>({width:"150px",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",border:e===l?"2px solid blue":"1px solid #ccc",boxSizing:"border-box",cursor:"pointer",overflow:"hidden"}),c={maxWidth:"100%",maxHeight:"100%",objectFit:"contain"};return n.a.createElement("div",null,n.a.createElement("h2",null,"Image Bank"),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map((e,t)=>n.a.createElement("div",{key:t,style:r(t),onClick:()=>a(t)},n.a.createElement("img",{src:e,alt:"object-".concat(t),style:c})))))};var m=e=>{let{textures:t,onSelectTexture:a,selectedTexture:l}=e;const r={margin:"10px",width:"100px",height:"100px",cursor:"pointer"},c={...r,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0",fontSize:"16px",color:"#333",border:null===l?"2px solid red":"1px solid #ccc"};return n.a.createElement("div",null,n.a.createElement("h2",null,"Texture Bank"),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.a.createElement("div",{style:c,onClick:()=>a(null)},"N/A"),t.map((e,t)=>n.a.createElement("img",{key:t,src:e,alt:"texture-".concat(t),style:r,onClick:()=>a(e)}))))};var d=e=>{let{outlines:t,onSelectOutline:a,selectedIndex:l}=e;const r=e=>({width:"150px",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",border:e===l?"2px solid green":"1px solid #ccc",boxSizing:"border-box",cursor:"pointer",overflow:"hidden"}),c={maxWidth:"100%",maxHeight:"100%",objectFit:"contain"};return n.a.createElement("div",null,n.a.createElement("h2",null,"Outline Bank"),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map((e,t)=>n.a.createElement("div",{key:t,style:r(t),onClick:()=>a(t)},n.a.createElement("img",{src:e,alt:"outline-".concat(t),style:c})))))};var u=e=>{let{selectedImage:t,selectedTexture:a,selectedOutline:r,selectedColor:c}=e;const i=Object(l.useRef)(null),o=(e,t,a,l)=>{const n=new Image;n.src=t,n.onload=(()=>{let t=n;(n.width<1500||n.height<1500)&&(t=m(n,a,l)),e.globalAlpha=.85,e.globalCompositeOperation="source-atop",e.drawImage(t,0,0,a,l),c&&d(e,c,a,l),e.globalAlpha=1,e.globalCompositeOperation="source-over"})},s=(e,t,a,l)=>{const n=new Image;n.src=t,n.onload=(()=>{e.drawImage(n,0,0,a,l)})},m=(e,t,a)=>{const l=.25*e.width,n=.25*e.height,r=document.createElement("canvas"),c=r.getContext("2d");r.width=t,r.height=a;for(let i=0;i<r.height;i+=n)for(let t=0;t<r.width;t+=l)c.drawImage(e,t,i,l,n);return r},d=(e,t,a,l)=>{t&&(e.globalAlpha=.4,e.fillStyle=t,e.fillRect(0,0,a,l),e.globalAlpha=1)};return Object(l.useEffect)(()=>{const e=i.current.getContext("2d");t&&((e,t,a,l)=>{const n=new Image;n.src=t,console.log(t),n.onload=(()=>{console.log("HEREEE");const t=.7*n.naturalWidth,r=.7*n.naturalHeight;i.current.width=t,i.current.height=r,e.drawImage(n,0,0,t,r),a&&o(e,a,t,r),l&&s(e,l,t,r)})})(e,t,a,r)},[t,a,r,c]),n.a.createElement("canvas",{ref:i})};var p=e=>{let{onAddImage:t,onAddTexture:a,onAddOutline:l}=e;const r=(e,n)=>{const r=e.target.files[0];if(r){const e=new FileReader;e.onload=(e=>{const r=e.target.result;"image"===n?t(r):"texture"===n?a(r):"outline"===n&&l(r)}),e.readAsDataURL(r)}};return n.a.createElement("div",null,n.a.createElement("h2",null,"Control Panel"),n.a.createElement("input",{type:"file",accept:"image/*",onChange:e=>r(e,"image")}),n.a.createElement("input",{type:"file",accept:"image/*",onChange:e=>r(e,"texture")}),n.a.createElement("input",{type:"file",accept:"image/*",onChange:e=>r(e,"outline")}))};var f=e=>{let{onSelectColor:t,selectedColor:a}=e;const l=e=>({margin:"10px",width:"50px",height:"50px",backgroundColor:e,cursor:"pointer",border:a===e?"2px solid red":"1px solid #ccc"}),r={...l("#fff"),display:"flex",justifyContent:"center",alignItems:"center",fontSize:"16px",color:"#333"};return n.a.createElement("div",null,n.a.createElement("h2",null,"Color Bank"),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.a.createElement("div",{style:r,onClick:()=>t(null)},"N/A"),["#e8dff5","#fce1e4","#fcf4dd","#ddedea","#daeaf6"].map((e,a)=>n.a.createElement("div",{key:a,style:l(e),onClick:()=>t(e)}))))};var h=()=>{const[e,t]=Object(l.useState)([]),[a,r]=Object(l.useState)([]),[c,i]=Object(l.useState)([]),[o,h]=Object(l.useState)(null),[g,x]=Object(l.useState)(null),[b,E]=Object(l.useState)(null),y=e=>{h(e)},v=e[o],w=c[o];return n.a.createElement("div",null,n.a.createElement(s,{images:e,onSelectImage:y,selectedIndex:o}),n.a.createElement(m,{textures:a,onSelectTexture:e=>{x(e)}}),n.a.createElement(d,{outlines:c,onSelectOutline:y,selectedIndex:o}),n.a.createElement(u,{selectedImage:v,selectedTexture:g,selectedOutline:w,selectedColor:b}),n.a.createElement(p,{onAddImage:a=>{t([...e,a])},onAddTexture:e=>{r([...a,e])},onAddOutline:e=>{i([...c,e])}}),n.a.createElement(f,{colors:["#ff0000","#00ff00","#0000ff"],onSelectColor:e=>{E(e)},selectedColor:b}))};var g=()=>n.a.createElement("h1",{class:"text-3xl font-bold underline"},"Hello world!");var x=async e=>{const t=await e.checkout.create();return console.log(t),localStorage.setItem("checkoutId",t.id),t},b=Object(l.createContext)(null);var E=async(e,t)=>{for(let a of e.lineItems)if(a.variant.id===t)return a.id};var y=a(83),v=a(81),w=a(84),k=a(82),N=a(75),C=a(76),S=a(77),F=a(78),j=a(79),I=a(80);const O=[{name:"Most Popular",href:"#",current:!0},{name:"Best Rating",href:"#",current:!1},{name:"Newest",href:"#",current:!1},{name:"Price: Low to High",href:"#",current:!1},{name:"Price: High to Low",href:"#",current:!1}],A=[{id:"multi-level-menu",name:"Garment Type",submenu:[{name:"Blazers & Suits",submenu:[{name:"Silhouette 1",href:"#",index:0},{name:"Silhouette 2",href:"#",index:1},{name:"Silhouette 3",href:"#",index:2},{name:"Silhouette 4",href:"#",index:3}]},{name:"Pants",submenu:[{name:"Silhouette 1",href:"#",index:4},{name:"Silhouette 2",href:"#",index:5},{name:"Silhouette 3",href:"#",index:6},{name:"Silhouette 4",href:"#",index:7}]},{name:"T-Shirts",submenu:[{name:"Silhouette 1",href:"#",index:8},{name:"Silhouette 2",href:"#",index:9},{name:"Silhouette 3",href:"#",index:10},{name:"Silhouette 4",href:"#",index:11}]},{name:"Shirts",submenu:[{name:"Silhouette 1",href:"#",index:12},{name:"Silhouette 2",href:"#",index:0},{name:"Silhouette 3",href:"#",index:0},{name:"Silhouette 4",href:"#",index:0}]},{name:"Skirts",submenu:[{name:"Silhouette 1",href:"#",index:0},{name:"Silhouette 2",href:"#",index:0},{name:"Silhouette 3",href:"#",index:0},{name:"Silhouette 4",href:"#",index:0}]}]}],T=[{id:"gender",name:"Gender",options:[{value:"female",label:"Female",checked:!0},{value:"Male",label:"Male",checked:!1}]},{id:"color",name:"Color",options:[{value:"purple",label:"Purple",checked:!0},{value:"pink",label:"Pink",checked:!1},{value:"yellow",label:"Yellow",checked:!1},{value:"green",label:"Green",checked:!1},{value:"blue",label:"Blue",checked:!1}]},{id:"category",name:"Fabric",options:[{value:"fabric1",label:"Fabric 1",checked:!0},{value:"fabric2",label:"Fabric 2",checked:!1},{value:"fabric3",label:"Fabric 3",checked:!1},{value:"fabric4",label:"Fabric 4",checked:!1}]},{id:"size",name:"Size",options:[{value:"2l",label:"2L",checked:!0},{value:"6l",label:"6L",checked:!1},{value:"12l",label:"12L",checked:!1},{value:"18l",label:"18L",checked:!1},{value:"20l",label:"20L",checked:!1},{value:"40l",label:"40L",checked:!0}]}];function B(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var P=()=>{const{checkoutState:e,setCheckoutState:t}=Object(l.useContext)(b),[r,c]=Object(l.useState)(null),[i,o]=Object(l.useState)(null),[s,m]=Object(l.useState)(null),[d,p]=Object(l.useState)(0),[f,h]=Object(l.useState)(0),[g,x]=Object(l.useState)(0),[E,P]=Object(l.useState)({pos:void 0,silhouette:void 0,color:void 0,fabric:void 0,size:void 0}),[_,z]=Object(l.useState)(!1),L={position:"absolute",top:0,left:0,width:"100%",height:"auto"},M=[[a(39),a(40)],[a(41),a(42)],[a(43),a(44)],[a(45),a(46)],[a(47),a(48)],[a(49),a(50)],[a(51),a(52)],[a(53),a(54)],[a(55),a(56)],[a(57),a(58)],[a(59),a(60)],[a(61),a(62)],[a(63),a(64)]],D=[a(65),a(66),a(67),a(68)],R=async(e,t)=>{"Color"===e?x(t):"Fabric"===e?h(t):"Garment Type"===e&&p(t)};return n.a.createElement("div",{className:"bg-white"},n.a.createElement("div",null,n.a.createElement(y.a.Root,{show:_,as:l.Fragment},n.a.createElement(v.a,{as:"div",className:"relative z-40 lg:hidden",onClose:z},n.a.createElement(y.a.Child,{as:l.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},n.a.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-25"})),n.a.createElement("div",{className:"fixed inset-0 z-40 flex"},n.a.createElement(y.a.Child,{as:l.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"translate-x-full"},n.a.createElement(v.a.Panel,{className:"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"},n.a.createElement("div",{className:"flex items-center justify-between px-4"},n.a.createElement("h2",{className:"text-lg font-medium text-gray-900"},"Filters"),n.a.createElement("button",{type:"button",className:"-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",onClick:()=>z(!1)},n.a.createElement("span",{className:"sr-only"},"Close menu"),n.a.createElement(N.a,{className:"h-6 w-6","aria-hidden":"true"}))),n.a.createElement("form",{className:"mt-4 border-t border-gray-200"},A.map(e=>n.a.createElement(w.a,{as:"div",key:e.id,className:"border-t border-gray-200 py-6"},t=>{let{open:a}=t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"-my-3 flow-root"},n.a.createElement(w.a.Button,{className:"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"font-medium text-gray-900"},e.name),n.a.createElement("span",{className:"ml-6 flex items-center"},a?n.a.createElement(C.a,{className:"h-5 w-5","aria-hidden":"true"}):n.a.createElement(S.a,{className:"h-5 w-5","aria-hidden":"true"})))),n.a.createElement(w.a.Panel,{className:"pt-6"},n.a.createElement("div",{className:"space-y-4"},e.submenu.map(e=>n.a.createElement(w.a,{as:"div",key:e.name},t=>{let{open:a}=t;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a.Button,{className:"flex w-full items-center justify-between text-gray-500 hover:text-gray-900"},n.a.createElement("span",null,e.name),n.a.createElement(F.a,{className:"".concat(a?"transform rotate-180":""," w-5 h-5")})),n.a.createElement(w.a.Panel,{className:"ml-4"},n.a.createElement("ul",null,e.submenu.map(e=>n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.href,className:"block py-2 hover:bg-gray-50"},e.name))))))})))))})),T.map(e=>n.a.createElement(w.a,{as:"div",key:e.id,className:"border-t border-gray-200 px-4 py-6"},t=>{let{open:a}=t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"-mx-2 -my-3 flow-root"},n.a.createElement(w.a.Button,{className:"flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"font-medium text-gray-900"},e.name),n.a.createElement("span",{className:"ml-6 flex items-center"},a?n.a.createElement(C.a,{className:"h-5 w-5","aria-hidden":"true"}):n.a.createElement(S.a,{className:"h-5 w-5","aria-hidden":"true"})))),n.a.createElement(w.a.Panel,{className:"pt-6"},n.a.createElement("div",{className:"space-y-6"},e.options.map((t,a)=>n.a.createElement("div",{key:t.value,className:"flex items-center"},n.a.createElement("input",{id:"filter-mobile-".concat(e.id,"-").concat(a),name:"".concat(e.id,"[]"),defaultValue:t.value,type:"radio",defaultChecked:t.checked,className:"h-4 w-4 rounded-well border-gray-300 text-indigo-600 focus:ring-indigo-500",onClick:!0}),n.a.createElement("label",{htmlFor:"filter-mobile-".concat(e.id,"-").concat(a),className:"ml-3 min-w-0 flex-1 text-gray-500"},t.label))))))})))))))),n.a.createElement("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},n.a.createElement("div",{className:"flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"},n.a.createElement("h1",{className:"text-4xl font-bold tracking-tight text-gray-900"},"Khattoi Customization"),n.a.createElement("div",{className:"flex items-center"},n.a.createElement(k.a,{as:"div",className:"relative inline-block text-left"},n.a.createElement("div",null,n.a.createElement(k.a.Button,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"},"Sort",n.a.createElement(F.a,{className:"-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}))),n.a.createElement(y.a,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},n.a.createElement(k.a.Items,{className:"absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"},n.a.createElement("div",{className:"py-1"},O.map(e=>n.a.createElement(k.a.Item,{key:e.name},t=>{let{active:a}=t;return n.a.createElement("a",{href:e.href,className:B(e.current?"font-medium text-gray-900":"text-gray-500",a?"bg-gray-100":"","block px-4 py-2 text-sm")},e.name)})))))),n.a.createElement("button",{type:"button",className:"-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"},n.a.createElement("span",{className:"sr-only"},"View grid"),n.a.createElement(j.a,{className:"h-5 w-5","aria-hidden":"true"})),n.a.createElement("button",{type:"button",className:"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",onClick:()=>z(!0)},n.a.createElement("span",{className:"sr-only"},"Filters"),n.a.createElement(I.a,{className:"h-5 w-5","aria-hidden":"true"})))),n.a.createElement("section",{"aria-labelledby":"products-heading",className:"pb-24 pt-6"},n.a.createElement("h2",{id:"products-heading",className:"sr-only"},"Products"),n.a.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"},n.a.createElement("form",{className:"hidden lg:block"},A.map(e=>n.a.createElement(w.a,{as:"div",key:e.id,className:"border-t border-b border-gray-200 py-6"},t=>{let{open:a}=t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"-my-3 flow-root"},n.a.createElement(w.a.Button,{className:"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"font-medium text-gray-900"},e.name),n.a.createElement("span",{className:"ml-6 flex items-center"},a?n.a.createElement(C.a,{className:"h-5 w-5","aria-hidden":"true"}):n.a.createElement(S.a,{className:"h-5 w-5","aria-hidden":"true"})))),n.a.createElement(w.a.Panel,{className:"pt-6"},n.a.createElement("div",{className:"space-y-4"},e.submenu.map(t=>n.a.createElement(w.a,{as:"div",key:t.name},a=>{let{open:l}=a;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a.Button,{className:"flex w-full items-center justify-between text-gray-500 hover:text-gray-900"},n.a.createElement("span",null,t.name),n.a.createElement(F.a,{className:"".concat(l?"transform rotate-180":""," w-5 h-5")})),n.a.createElement(w.a.Panel,{className:"ml-4"},n.a.createElement("ul",null,t.submenu.map(t=>n.a.createElement("li",{key:t.name,onClick:()=>R(e.name,t.index)},n.a.createElement("a",{href:t.href,className:"block py-2 hover:bg-gray-50"},t.name))))))})))))})),T.map(e=>n.a.createElement(w.a,{as:"div",key:e.id,className:"border-b border-gray-200 py-6"},t=>{let{open:a}=t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"-my-3 flow-root"},n.a.createElement(w.a.Button,{className:"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"font-medium text-gray-900"},e.name),n.a.createElement("span",{className:"ml-6 flex items-center"},a?n.a.createElement(C.a,{className:"h-5 w-5","aria-hidden":"true"}):n.a.createElement(S.a,{className:"h-5 w-5","aria-hidden":"true"})))),n.a.createElement(w.a.Panel,{className:"pt-6"},n.a.createElement("div",{className:"space-y-4"},e.options.map((t,a)=>n.a.createElement("div",{key:t.value,onClick:()=>R(e.name,a),className:"flex items-center"},n.a.createElement("input",{id:"filter-".concat(e.id,"-").concat(a),name:"".concat(e.id,"[]"),defaultValue:t.value,type:"radio",defaultChecked:t.checked,className:"h-4 w-4 rounded-well` border-gray-300 text-indigo-600 focus:ring-indigo-500"}),n.a.createElement("label",{htmlFor:"filter-".concat(e.id,"-").concat(a),className:"ml-3 text-sm text-gray-600"},t.label))))))}))),n.a.createElement("div",{className:"lg:col-span-3"},n.a.createElement("div",{key:"Name",className:"group relative"},n.a.createElement(u,{selectedImage:M[d][0],selectedTexture:D[f],selectedOutline:M[d][1],selectedColor:["#e8dff5","#fce1e4","#fcf4dd","#ddedea","#daeaf6"][g]}),n.a.createElement("div",{style:{position:"relative",width:"150%",maxWidth:"600px",margin:"auto"}},n.a.createElement("img",{src:a(69),alt:"Mannequin",style:L}),s&&n.a.createElement("img",{src:s,alt:"Bottom",style:L}),i&&n.a.createElement("img",{src:i,alt:"Top",style:L})))))))))};var _=()=>{const{checkoutState:e,setCheckoutState:t}=Object(l.useContext)(b),a=async(l,n)=>{const r=await e.client.product.fetchAll();for(let e=0;e<3;e++)console.log(r[e]);if(null===e.checkout.id&&t({client:e.client,checkout:await x(e.client)}),n)var c=[{variantId:l,quantity:1}];else var i=[await E(e.checkout,l)];try{var o;if(o=n?await e.client.checkout.addLineItems(e.checkout.id,c):await e.client.checkout.removeLineItems(e.checkout.id,i),console.log("Checkout successfully executed."),t({client:e.client,checkout:o}),o.userErrors.length>0)return void console.log("Errors!")}catch(s){console.log("Error on Checkout"),console.log(s.message);for(let r of JSON.parse(s.message))for(let c of r.field)if("checkoutId"===c)return t({client:e.client,checkout:await x(e.client)}),await a(l,n)}};return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m8 l6 offset-m2 offset-l3"},n.a.createElement("div",{className:"card grey darken-4"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},"Support-A-Creator Application"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("button",{className:"\r btn\r waves-effect waves-light\r blue\r right\r ",onClick:()=>a("gid://shopify/ProductVariant/47437356335414",!0)},"Add To Cart",n.a.createElement("i",{className:"material-icons right"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("button",{className:"\r btn\r waves-effect waves-light\r blue\r right\r ",onClick:()=>a("gid://shopify/ProductVariant/47437356335414",!1)},"Remove from Cart",n.a.createElement("i",{className:"material-icons right"}))))))))))},z=a(27),L=a.n(z);a(70);var M=function(){const e="project-aphrodite.myshopify.com",[t,a]=Object(l.useState)({client:void 0,checkout:void 0});return Object(l.useEffect)(()=>{(async()=>{const t=L.a.buildClient({domain:e,storefrontAccessToken:"a315d6f383a61800bf0af3e9dce49d4a"});L.a.buildClient({domain:e,storefrontAccessToken:"a315d6f383a61800bf0af3e9dce49d4a",language:"en-EN"});let l=localStorage.getItem("checkoutId");if(l){console.log("CheckoutId is NOT empty.");const e=await t.checkout.fetch(l);e?(console.log("CheckoutId is NOT expired. Information retrieved from API."),a({client:t,checkout:e})):(console.log("CheckoutId is expired. New cart created."),a({client:t,checkout:await x(t)}))}else console.log("CheckoutId is empty. New cart created."),a({client:t,checkout:await x(t)})})()},[]),n.a.createElement(i.a,null,n.a.createElement(b.Provider,{value:{checkoutState:t,setCheckoutState:a}},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/customize",Component:h}),n.a.createElement(o.a,{exact:!0,path:"/admin",Component:g}),n.a.createElement(o.a,{exact:!0,path:"/checkout",Component:_}),n.a.createElement(o.a,{exact:!0,path:"/",Component:P}))))};var D=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(M,null)),D()}]),[[31,1,2]]]);
//# sourceMappingURL=main.2843516c.chunk.js.map