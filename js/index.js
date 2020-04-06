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
logo.style.filter = "invert(100%)"

//////////// GET LINKS /////////////////////
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const linkContent = Object.values(siteContent["nav"]);
  links[i].textContent = linkContent[i];
  links[i].style.color = "green";
  links[i].style.fontSize = "20px";
  links[i].style.textDecoration = "none";
} //close for


///////////////// HEADER ////////////////
const header = document.querySelector('header');
header.style.backgroundColor = "navy";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.padding = "10px";
header.style.borderBottomLeftRadius = "10px";
header.style.borderBottomRightRadius = "10px";
// CREATES NEW LINKS
const nav = document.querySelector('nav');
nav.style.display = "flex";
nav.style.justifyContent = "space-around";
nav.style.alignItems = "center";

// BLOG
const blogLink = document.createElement('a');
blogLink.href = '#Blog';
blogLink.textContent = 'Blog';
nav.appendChild(blogLink);
blogLink.style.color = "green";
blogLink.style.fontSize = "20px";
blogLink.style.textDecoration = "none";
//PROFILE
const profileLink = document.createElement('a');
profileLink.href = '#Profile';
profileLink.textContent = 'Profile';
nav.prepend(profileLink);
profileLink.style.color = "green";
profileLink.style.fontSize = "20px";
profileLink.style.textDecoration = "none";


/////////////// GET CTA IMG ////////////////////
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
//////////////////// GET MID IMG ///////////////////////
const midImg = document.getElementById('middle-img');
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


////////////////////// GET CTA INFO ///////////////////////
const ctaArray = document.querySelector('.cta-text').children;
const ctaButton = ctaArray[1];
const ctaTitle = ctaArray[0];

ctaTitle.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];


///////////////// GET MAIN CONTENT ////////////////

// TITLES //
const featuresTitle = document.querySelector('.top-content div:first-child h4');
const aboutTitle = document.querySelector('.top-content div:last-child h4');
const servicesTitle = document.querySelector('.bottom-content div:first-child h4');
const productTitle = document.querySelector('.bottom-content div:nth-of-type(2) h4');
const visionTitle = document.querySelector('.bottom-content div:last-child h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
productTitle.textContent = siteContent["main-content"]["product-h4"];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

// CONTENT
const featuresContent = document.querySelector('.top-content div:first-child p');
const aboutContent = document.querySelector('.top-content div:last-child p');
const servicesContent = document.querySelector('.bottom-content div:first-child p');
const productContent = document.querySelector('.bottom-content div:nth-of-type(2) p');
const visionContent = document.querySelector('.bottom-content div:last-child p');
featuresContent.textContent = siteContent["main-content"]["features-content"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productContent.textContent = siteContent["main-content"]["product-content"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

//////////////////////// GET CONTACT ///////////////////////////

const contactTitle = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactTitle.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent["contact"]["address"];
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

//////////////////////// GET FOOTER ///////////////////////////
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent["footer"]["copyright"];

