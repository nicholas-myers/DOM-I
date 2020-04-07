const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
logo.style.filter = "invert(100%)";

//////////// GET LINKS /////////////////////
const nav = document.querySelector("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";

// BLOG
const blogLink = document.createElement("a");
blogLink.href = "#Blog";
blogLink.textContent = "Blog";
nav.appendChild(blogLink);
//PROFILE
const profileLink = document.createElement("a");
profileLink.href = "#Profile";
profileLink.textContent = "Profile";
nav.prepend(profileLink);

const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.style.color = "green";
  link.style.fontSize = "20px";
  link.style.textDecoration = "none";
  link.style.borderRadius = "10px";
  link.style.padding = "5px";
  link.style.fontWeight = "bold";

  link.addEventListener("mouseover", (event) => {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "green";
  });
  link.addEventListener("mouseout", (event) => {
    event.target.style.color = "green";
    event.target.style.backgroundColor = "navy";
  });
}

const link1 = document.querySelector("nav a:nth-of-type(2)");
link1.textContent = siteContent["nav"]["nav-item-1"];
const link2 = document.querySelector("nav a:nth-of-type(3)");
link2.textContent = siteContent["nav"]["nav-item-2"];
const link3 = document.querySelector("nav a:nth-of-type(4)");
link3.textContent = siteContent["nav"]["nav-item-3"];
const link4 = document.querySelector("nav a:nth-of-type(5)");
link4.textContent = siteContent["nav"]["nav-item-4"];
const link5 = document.querySelector("nav a:nth-of-type(6)");
link5.textContent = siteContent["nav"]["nav-item-5"];
const link6 = document.querySelector("nav a:nth-of-type(7)");
link6.textContent = siteContent["nav"]["nav-item-6"];
// for (let i = 0; i < links.length; i++) {
//   const linkContent = Object.values(siteContent["nav"]);
//   links[i].textContent = linkContent[i];
//   links[i].style.color = "green";
//   links[i].style.fontSize = "20px";
//   links[i].style.textDecoration = "none";
//   console.log(linkContent);
// } //close for

///////////////// HEADER ////////////////
const header = document.querySelector("header");
header.style.backgroundColor = "navy";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.padding = "10px";
header.style.borderBottomLeftRadius = "10px";
header.style.borderBottomRightRadius = "10px";
// CREATES NEW LINKS

// nav.addEventListener("mouseover", (event) => {
//   event.target.style.color = "white";
//   event.target.style.backgroundColor = "lightblue";

// });

// nav.addEventListener("mouseout", (event) => {
//   event.target.style.color = "green";
//   event.target.style.backgroundColor = "navy";
// });

/////////////// GET CTA IMG ////////////////////
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
//////////////////// GET MID IMG ///////////////////////
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
midImg.style.borderRadius = "10px";

////////////////////// GET CTA INFO ///////////////////////
const ctaArray = document.querySelector(".cta-text").children;
const ctaButton = ctaArray[1];
const ctaTitle = ctaArray[0];

ctaTitle.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

///////////////// GET MAIN CONTENT ////////////////


// TITLES //
const featuresTitle = document.querySelector(".top-content div:first-child h4");
const aboutTitle = document.querySelector(".top-content div:last-child h4");
const servicesTitle = document.querySelector(
  ".bottom-content div:first-child h4"
);
const productTitle = document.querySelector(
  ".bottom-content div:nth-of-type(2) h4"
);
const visionTitle = document.querySelector(".bottom-content div:last-child h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
productTitle.textContent = siteContent["main-content"]["product-h4"];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

// CONTENT
const featuresContent = document.querySelector(
  ".top-content div:first-child p"
);
const aboutContent = document.querySelector(".top-content div:last-child p");
const servicesContent = document.querySelector(
  ".bottom-content div:first-child p"
);
const productContent = document.querySelector(
  ".bottom-content div:nth-of-type(2) p"
);
const visionContent = document.querySelector(
  ".bottom-content div:last-child p"
);
featuresContent.textContent = siteContent["main-content"]["features-content"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productContent.textContent = siteContent["main-content"]["product-content"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

///create new buttons
const featuresButton = document.createElement("button");
featuresButton.textContent = "Find Out More";
featuresButton.style.padding = "5px";
featuresButton.style.fontSize = "1rem";
const featuresDiv = document.querySelector('.top-content div:first-child');
featuresDiv.appendChild(featuresButton);

featuresButton.addEventListener("click", () => {
  featuresContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});

const aboutButton = document.createElement("button");
aboutButton.textContent = "Find Out More";
aboutButton.style.padding = "5px";
aboutButton.style.fontSize = "1rem";
const aboutDiv = document.querySelector('.top-content div:last-child');
aboutDiv.appendChild(aboutButton);

aboutButton.addEventListener("click", () => {
  aboutContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});

const servicesButton = document.createElement("button");
servicesButton.textContent = "Find Out More";
servicesButton.style.padding = "5px";
servicesButton.style.fontSize = "1rem";
const servicesDiv = document.querySelector('.bottom-content div:first-child');
servicesDiv.appendChild(servicesButton);

servicesButton.addEventListener("click", () => {
  servicesContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});


const productButton = document.createElement("button");
productButton.textContent = "Find Out More";
productButton.style.padding = "5px";
productButton.style.fontSize = "1rem";
const productDiv = document.querySelector('.bottom-content div:nth-of-type(2)');
productDiv.appendChild(productButton);

productButton.addEventListener("click", () => {
  productContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});


const visionButton = document.createElement("button");
visionButton.textContent = "Find Out More";
visionButton.style.padding = "5px";
visionButton.style.fontSize = "1rem";
const visionDiv = document.querySelector('.bottom-content div:last-child');
visionDiv.appendChild(visionButton);

visionButton.addEventListener("click", () => {
  visionContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});










//////////////////////// GET CONTACT ///////////////////////////

const contactTitle = document.querySelector(".contact h4");
const contactAddress = document.querySelector(".contact p:nth-of-type(1)");
const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
const contactEmail = document.querySelector(".contact p:nth-of-type(3)");
contactTitle.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent["contact"]["address"];
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

//////////////////////// GET FOOTER ///////////////////////////
const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];
footerContent.style.color = "white";
const footer = document.querySelector("footer");

footer.style.backgroundColor = "navy";
footer.style.padding = "10px";
footer.style.borderRadius = "10px";
