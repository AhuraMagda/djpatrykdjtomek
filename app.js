// GALLERY IMAGES - change color

const galleryImages = document.querySelectorAll(".gallery__wrapper__img");

const changeImgColor = (image) => {
  image.classList.toggle("gray");
};

galleryImages.forEach((image) => {
  image.addEventListener("mouseover", function () {
    changeImgColor(image);
  });
  image.addEventListener("mouseout", function () {
    changeImgColor(image);
  });
  image.addEventListener("click", function () {
    showBigImage(image);
  });
});


// GALLERY IMAGES - make img bigger and put it in the center

const slider = document.createElement("div");
slider.classList.add("gallery__wrapper__slider");

const sliderWrapper = document.createElement("div");
sliderWrapper.classList.add("gallery__wrapper__slider__wrapper");

const sliderImg = document.createElement("img");
sliderImg.classList.add("gallery__wrapper__slider__wrapper__img");

const hideBigImageButton = document.createElement("span");
hideBigImageButton.classList.add("gallery__wrapper__slider__wrapper__btn-hide");

const arrowLeft = document.createElement("span");
arrowLeft.classList.add("gallery__wrapper__slider__wrapper__arrow-left");

const arrowRight = document.createElement("span");
arrowRight.classList.add("gallery__wrapper__slider__wrapper__arrow-right");

const gallery = document.querySelector(".gallery");

const showBigImage = (image) => {
  sliderImg.src = image.src;
  sliderImg.id = image.id;
  gallery.appendChild(slider);
  slider.appendChild(sliderWrapper)
  sliderWrapper.appendChild(arrowLeft);
  sliderWrapper.appendChild(sliderImg);
  sliderWrapper.appendChild(arrowRight);
  sliderWrapper.appendChild(hideBigImageButton);
};

const hideBigImage = () => {
  gallery.removeChild(slider);
};

const changeImgRight = () => {
  let newId;
  let lastIndex = galleryImages.length - 1;
  galleryImages.forEach(
    (image, index) =>
      image.id === sliderImg.id && (newId = index === lastIndex ? 0 : index + 1)
  );
  sliderImg.src = galleryImages[newId].src;
  sliderImg.id = galleryImages[newId].id;
};

const changeImgLeft = () => {
  let newId;
  let lastIndex = galleryImages.length - 1;
  galleryImages.forEach(
    (image, index) =>
      image.id === sliderImg.id && (newId = index === 0 ? lastIndex : index - 1)
  );
  sliderImg.src = galleryImages[newId].src;
  sliderImg.id = galleryImages[newId].id;
};

slider.addEventListener("click", hideBigImage)

arrowRight.addEventListener("click", (e)=> {
  changeImgRight();
  e.stopPropagation();
});

arrowLeft.addEventListener("click", (e) => {
  changeImgLeft();
  e.stopPropagation();
});

hideBigImageButton.addEventListener("click", hideBigImage);

// HAMBURGER
const navLinks = document.querySelectorAll("nav ul a");
const burgerIcon = document.querySelector(".hamburger");
const mobileNav = document.querySelector("nav ul");
const hamburgerTopBun = document.querySelector(".top-bun");
const hamburgerBottomBun = document.querySelector(".bottom-bun");
const hamburgerMeat = document.querySelector(".meat");

const changeBurgerToX = () => {
  hamburgerTopBun.classList.toggle("hamburger__top-bun_clicked");
  hamburgerBottomBun.classList.toggle("hamburger__bottom-bun_clicked");
  hamburgerMeat.classList.toggle("hamburger__meat_clicked");
};

burgerIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("nav__ul__active");
  changeBurgerToX();
});

// nav hidding after click

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("nav__ul__active");
    changeBurgerToX();
  });
});

// add copyright

document.querySelector(
  "#footer__date"
).innerText = `© ${new Date().getFullYear()} DJ\xA0Patryk\xA0DJ\xA0Tomek`;

// preloader

const loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
