




// navLogo.addEventListener("click", moveIntroText)

// GALLERY IMAGES - change opacity

const galleryImages = document.querySelectorAll(".gallery__img")
console.log(galleryImages)

const changeImgColor = (image) => {
    image.classList.toggle("gray")
    console.log("halo")
}

// GALLERY IMAGES - make img bigger and put it in the center

const bigImageContainer = document.createElement('div')
bigImageContainer.classList.add("gallery__big-img__container")

const bigImage = document.createElement('img')
bigImage.classList.add("gallery__big-img")

const hideBigImageButton = document.createElement('span')
hideBigImageButton.classList.add("gallery__big-img__btn-hide")

const arrowLeft = document.createElement('span')
arrowLeft.classList.add("gallery__big-img__arrow-left")

const arrowRight = document.createElement('span')
arrowRight.classList.add("gallery__big-img__arrow-right")

const gallery = document.querySelector(".gallery")



const showBigImage = (image) => {
    bigImage.src = image.src
    bigImage.id = image.id
    gallery.appendChild(bigImageContainer)
    bigImageContainer.appendChild(arrowLeft)
    bigImageContainer.appendChild(bigImage)
    bigImageContainer.appendChild(arrowRight)
    bigImageContainer.appendChild(hideBigImageButton)
}

const hideBigImage = () => {
    gallery.removeChild(bigImageContainer)
}

const changeImgRight = () => {
    let newId;
    let lastIndex = galleryImages.length-1
    galleryImages.forEach((image, index) => image.id === bigImage.id && (newId = (index === lastIndex ? 0 : index+1)));
    bigImage.src = galleryImages[newId].src
    bigImage.id = galleryImages[newId].id
}

const changeImgLeft = () => {
    let newId;
    let lastIndex = galleryImages.length-1
    galleryImages.forEach((image, index) => image.id === bigImage.id && (newId = (index === 0 ? lastIndex : index-1)));
    bigImage.src = galleryImages[newId].src
    bigImage.id = galleryImages[newId].id
}

galleryImages.forEach(image => {
    image.addEventListener("mouseover", function() {changeImgColor(image)});
    image.addEventListener("mouseout", function() {changeImgColor(image)});
    image.addEventListener("click", function() {showBigImage(image)});
    }
)

arrowRight.addEventListener("click", changeImgRight)
arrowLeft.addEventListener("click", changeImgLeft)

hideBigImageButton.addEventListener("click", hideBigImage)


// HAMBURGER
const navLinks = document.querySelectorAll("nav ul a")
const burgerIcon = document.querySelector(".hamburger")
const mobileNav = document.querySelector("nav ul");
const hamburgerTopBun = document.querySelector(".top-bun")
const hamburgerBottomBun = document.querySelector(".bottom-bun")
const hamburgerMeat = document.querySelector(".meat")

const changeBurgerToX = () => {
    hamburgerTopBun.classList.toggle("hamburger--top-bun_clicked")
    hamburgerBottomBun.classList.toggle("hamburger--bottom-bun_clicked")
    hamburgerMeat.classList.toggle("hamburger--meat_clicked")
}

burgerIcon.addEventListener('click', function() {
    mobileNav.classList.toggle('nav-active'); 
    changeBurgerToX();
})


// nav hidding after click

navLinks.forEach(link=>{link.addEventListener("click", () => {
    mobileNav.classList.remove('nav-active');
    changeBurgerToX();
})})



// add copyright

document.querySelector("#footer__date").innerText = `Copyright © ${new Date().getFullYear()} Migas`;