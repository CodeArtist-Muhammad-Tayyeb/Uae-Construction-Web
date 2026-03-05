// document.addEventListener("DOMContentLoaded", function () {

//   const params = new URLSearchParams(window.location.search);
//   const service = params.get("service");

//   const services = {

//     fabrication:{
//       title:"Structural Steel Fabrication",
//       image:"assets/img/services-imgs/structuredesign.png",
//       text:"Structural steel fabrication for residential and commercial construction.",
//       points:[
//         "Accurate cutting and welding of steel structures",
//         "High quality fabrication standards",
//         "Reliable and durable steel solutions"
//       ]
//     },

//     racking:{
//       title:"Racking & Shelving",
//       image:"assets/img/services-imgs/steel1.jpg",
//       text:"Smart warehouse storage systems.",
//       points:[
//         "Heavy duty warehouse racks",
//         "Efficient storage management",
//         "Space optimization"
//       ]
//     },

//     mezzanine:{
//       title:"Mezzanine Floors",
//       image:"assets/img/services-imgs/mezzanine.png",
//       text:"Extra storage floors for warehouses.",
//       points:[
//         "Steel mezzanine structures",
//         "Safe and durable platforms",
//         "Maximize vertical space"
//       ]
//     },

//     tiles:{
//       title:"Tiles & Marble",
//       image:"assets/img/services-imgs/tiles.png",
//       text:"Professional tile and marble finishing.",
//       points:[
//         "Luxury marble flooring",
//         "High quality tile installation",
//         "Durable finishing"
//       ]
//     },

//     glass:{
//       title:"Glass & Gypsum Partitions",
//       image:"assets/img/services-imgs/glass.png",
//       text:"Modern office partition solutions.",
//       points:[
//         "Glass office cabins",
//         "Gypsum partition walls",
//         "Modern workspace design"
//       ]
//     },

//     ac:{
//       title:"AC Installation & Maintenance",
//       image:"assets/img/services-imgs/ac.png",
//       text:"Complete AC installation and servicing.",
//       points:[
//         "Split AC installation",
//         "AC maintenance services",
//         "Emergency repair"
//       ]
//     }

//   };

//   const data = services[service] || services["fabrication"];

//   document.getElementById("service-title").innerText = data.title;
//   document.getElementById("service-image").src = data.image;
//   document.getElementById("service-text").innerText = data.text;

//   const list = document.getElementById("service-points");
//   list.innerHTML="";

//   data.points.forEach(point=>{
//     const li=document.createElement("li");
//     li.innerHTML='<i class="bi bi-check-circle"></i> <span>'+point+'</span>';
//     list.appendChild(li);
//   });

// });








document.addEventListener("DOMContentLoaded", function () {

const params = new URLSearchParams(window.location.search);
const service = params.get("service") || "fabrication";

const services = {

fabrication:{
title:"Structural Steel Fabrication",
image:"assets/img/services-imgs/structuredesign.png",
text:"We provide professional steel fabrication services.",
points:[
"Steel beam fabrication",
"Industrial welding",
"Heavy structure assembly"
],
sub:[
"Structural Steel Fabrication",
"Welding & Assembly",
"Metal Cutting & Shaping",
"Industrial Component Fabrication",
"Finished Fabricated Structures"
]
},

racking:{
title:"Racking & Shelving",
image:"assets/img/services-imgs/racking.png",
text:"Warehouse storage systems.",
points:[
"Industrial racks",
"Heavy storage shelves",
"Warehouse layout design"
],
sub:[
"Pallet Racking",
"Heavy Duty Shelves",
"Warehouse Storage",
"Industrial Storage",
"Custom Rack Systems"
]
},

mezzanine:{
title:"Mezzanine Floors",
image:"assets/img/services-imgs/mezzanine.png",
text:"Strong mezzanine floor systems for warehouses, offices, and industrial spaces to maximize vertical storage and workspace.",
points:[
"Custom steel mezzanine floor design",
"Heavy load bearing structures",
"Efficient use of vertical space"
],
sub:[
"Steel Mezzanine Floors",
"Warehouse Mezzanine Platforms",
"Office Mezzanine Structures",
"Industrial Storage Floors",
"Custom Mezzanine Solutions"
]
},

tiles:{
title:"Tiles & Marble",
image:"assets/img/services-imgs/tiles.png",
text:"Professional tiles and marble installation services for residential and commercial projects.",
points:[
"Premium marble flooring installation",
"High quality tile finishing",
"Long-lasting and durable surfaces"
],
sub:[
"Marble Floor Installation",
"Ceramic Tile Installation",
"Porcelain Tile Flooring",
"Wall Tile Finishing",
"Luxury Marble Designs"
]
},

glass:{
title:"Glass & Gypsum Partitions",
image:"assets/img/services-imgs/glass.png",
text:"Modern glass and gypsum partition solutions for offices and commercial interiors.",
points:[
"Glass office partitions",
"Gypsum wall systems",
"Modern interior space division"
],
sub:[
"Office Glass Partitions",
"Frameless Glass Cabins",
"Gypsum Board Partitions",
"Decorative Wall Panels",
"Interior Office Dividers"
]
},

ac:{
title:"AC Installation & Maintenance",
image:"assets/img/services-imgs/ac.png",
text:"Professional air conditioning installation, servicing, and maintenance for homes, offices, and commercial buildings.",
points:[
"Split AC installation",
"Regular AC servicing and maintenance",
"Emergency repair solutions"
],
sub:[
"AC Installation Services",
"AC Repair & Troubleshooting",
"Preventive Maintenance",
"Central AC Systems",
"Commercial AC Solutions"
]
}

};

const data = services[service];

document.getElementById("service-title").innerText = data.title;
document.getElementById("service-image").src = data.image;
document.getElementById("service-text").innerText = data.text;

const points=document.getElementById("service-points");
points.innerHTML="";

data.points.forEach(p=>{
let li=document.createElement("li");
li.innerHTML='<i class="bi bi-check-circle"></i> <span>'+p+'</span>';
points.appendChild(li);
});

const list=document.getElementById("services-list");
list.innerHTML="";

data.sub.forEach((item,i)=>{
let a=document.createElement("a");
a.href="#";
a.innerText=item;
if(i===0) a.classList.add("active");
list.appendChild(a);
});

});