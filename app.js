





// HEADER text appearing

const navLogo = document.querySelector(".logo");

const introTextUp1 = document.querySelector(".intro-up-1");
const introTextUp2 = document.querySelector(".intro-up-2");
const introTextUp3 = document.querySelector(".intro-up-3");

const introTextDown1 = document.querySelector(".intro-down-1");
const introTextDown2 = document.querySelector(".intro-down-2");
const introTextDown3 = document.querySelector(".intro-down-3");


const moveIntroText = () => {

    setTimeout(() => {
        introTextUp1.style.display = "block";
        introTextUp2.style.display = "block";
        introTextUp3.style.display = "block";
        introTextDown1.style.display = "block";
        introTextDown2.style.display = "block";
        introTextDown3.style.display = "block";
    }, "0")

    setTimeout(() => {
        introTextUp1.style.top = "65px";
        introTextUp2.style.top = "30px";
        introTextUp3.style.top = "0px";
    
        introTextDown1.style.top = "155px";
        introTextDown2.style.top = "190px";
        introTextDown3.style.top = "220px";
    }, "1")
}

moveIntroText()

// navLogo.addEventListener("click", moveIntroText)

// GALLERY IMAGES - change opacity

const galleryImages = document.querySelectorAll(".gallery-image")
console.log(galleryImages)

const changeOpacity = (image) => {
    image.style.opacity = image.style.opacity === "1" ? ".5" : "1";
}

// GALLERY IMAGES - make img bigger and put it in the center

const bigImageContainer = document.createElement('div')
bigImageContainer.classList.add("big-image-container")

const bigImage = document.createElement('img')
bigImage.classList.add("big-image")

const hideBigImageButton = document.createElement('span')
hideBigImageButton.classList.add("hide-bigimage-button")

const arrowLeft = document.createElement('span')
arrowLeft.classList.add("arrow-left")

const arrowRight = document.createElement('span')
arrowRight.classList.add("arrow-right")

const gallery = document.querySelector(".gallery-container")



const showBigImage = (image) => {
    // sprawdź czy zdjęcie już jest? jak tak to REMOVE a jak nie to
    bigImage.src = image.src
    gallery.appendChild(bigImageContainer)
    bigImageContainer.appendChild(arrowLeft)
    bigImageContainer.appendChild(bigImage)
    bigImageContainer.appendChild(arrowRight)
    bigImageContainer.appendChild(hideBigImageButton)
    // albo jeśli jest tylko zmień bigImage.src = image.src, bardziej optymalnie?
}

const hideBigImage = () => {
    gallery.removeChild(bigImageContainer)
}

const changeImg = () => {
    console.log(bigImage.src) 
    // sprawdź który to index w naszym array of images
    // ustaw, że teraz ma być zdjęcie o indexie + 1 albo tam pierwszym
}

galleryImages.forEach(image => {
    image.addEventListener("mouseover", function() {changeOpacity(image)});
    image.addEventListener("mouseout", function() {changeOpacity(image)});
    image.addEventListener("click", function() {showBigImage(image)});
    }
)

arrowRight.addEventListener("click", changeImg)

hideBigImageButton.addEventListener("click", hideBigImage)