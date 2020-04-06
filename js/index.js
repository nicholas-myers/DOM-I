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


//////////// GET LINKS /////////////////////
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const linkContent = Object.values(siteContent["nav"]);
  links[i].textContent = linkContent[i];
} //close for

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


const featuresTitle = document.querySelector('.top-content div:first-child h4');
const aboutTitle = document.querySelector('.top-content div:last-child h4');
const servicesTitle = document.querySelector('.bottom-content div:first-child h4');
const productTitle = document.querySelector('.bottom-content div:nth-of-type(2) h4');
const visionTitle = document.querySelector('.bottom-content div:last-child h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

