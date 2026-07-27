const products = [
  {id:"cleanser", name:"Gentle Cleanser", desc:"Purifying & Soothing", price:"$18.00", image:"images/cleanser.png", page:"products/cleanser.html"},
  {id:"moisturizer", name:"Hydra Moisturizer", desc:"Deep Hydration & Barrier Support", price:"$24.00", image:"images/moisturizer.png", page:"products/moisturizer.html"},
  {id:"vitamin-c", name:"Vitamin C Serum", desc:"Brightening & Antioxidant", price:"$29.00", image:"images/vitamin-c.png", page:"products/vitamin-c.html"},
  {id:"sunscreen", name:"SPF 50 Sunscreen", desc:"Broad Spectrum UVA + UVB Protection", price:"$22.00", image:"images/sunscreen.png", page:"products/sunscreen.html"}
];
const grid=document.getElementById("productGrid");
if(grid) grid.innerHTML=products.map(p=>`<article class="product-card"><a href="${p.page}"><div class="product-img"><img src="${p.image}" alt="${p.name}"></div></a><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${p.price}</div><a class="btn" href="${p.page}">View Details</a></div></article>`).join("");
document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav-links").classList.remove("open")));
document.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("click",()=>item.classList.toggle("open")));
