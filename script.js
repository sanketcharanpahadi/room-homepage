const obj = [
  {
    "furniture-benefit": ` We provide unmatched quality, comfort, and style for property owners
    across the country. Our experts combine form and function in bringing
    your vision to life. Create a room in your own style with our
    collection and make your property a reflection of you and what you
    love.`,
    title: `Discover innovative ways to decorate`,
    image: "images/desktop-image-hero-1.jpg",
  },
  {
    "furniture-benefit": ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
    title: `We are available all across the globe`,
    image: "images/desktop-image-hero-2.jpg",
  },
  {
    "furniture-benefit": ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
    title: ` Manufactured with the best materials`,
    image: "images/desktop-image-hero-3.jpg",
  },
];
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");
const furnitureBenefit = document.querySelector(".furniture-benefit");
const title = document.querySelector(".title");
const navBar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const popupMenu = document.querySelector(".popup-menu");
const links = document.querySelector(".links");
let count = 0;

function active() {
  closeBtn.classList.toggle("active");
  popupMenu.classList.toggle("active");
  links.classList.toggle("active");
}

nextBtn.addEventListener("click", function () {
  if (count > 1) {
    count = 2;
  } else count++;
  furnitureBenefit.textContent = obj[count]["furniture-benefit"];
  title.textContent = obj[count].title;
  navBar.style.backgroundImage = `url(${obj[count].image})`;
});

prevBtn.addEventListener("click", function () {
  if (count < 1) {
    count = 0;
  } else {
    count--;
  }
  furnitureBenefit.textContent = obj[count]["furniture-benefit"];
  title.textContent = obj[count].title;
  navBar.style.backgroundImage = `url(${obj[count].image})`;
});

hamburger.addEventListener("click", active);
closeBtn.addEventListener("click", active);
