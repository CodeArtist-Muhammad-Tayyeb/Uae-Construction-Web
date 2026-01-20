const servicesData = {
  fabrication: {
    title: "Structural Steel Fabrication",
    image: "assets/img/services-imgs/structuredesign.png",
    description:
      "At AFK Building and Maintenance Company, Dubai, we specialize in structural steel fabrication for residential, commercial, and industrial projects.",
    points: [
      "Accurate cutting and welding of steel structures",
      "Work according to safety and quality standards",
      "Timely and efficient project execution"
    ]
  },

  welding: {
    title: "Welding & Assembly",
    image: "assets/img/services-imgs/welding.png",
    description:
      "Professional welding and assembly services ensuring strong and durable joints.",
    points: [
      "Certified welders",
      "High-strength joints",
      "On-site and workshop welding"
    ]
  },

  // ADD remaining 6 services here
};

const params = new URLSearchParams(window.location.search);
const serviceKey = params.get("service");

if (serviceKey && servicesData[serviceKey]) {
  document.getElementById("header")?.remove();
  document.getElementById("footer")?.remove();
  document.querySelector(".page-title")?.remove();

  document.getElementById("service-title").textContent =
    servicesData[serviceKey].title;

  document.getElementById("service-image").src =
    servicesData[serviceKey].image;

  document.getElementById("service-description").textContent =
    servicesData[serviceKey].description;

  const ul = document.getElementById("service-points");
  ul.innerHTML = "";

  servicesData[serviceKey].points.forEach(point => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="bi bi-check-circle"></i> ${point}`;
    ul.appendChild(li);
  });
}
