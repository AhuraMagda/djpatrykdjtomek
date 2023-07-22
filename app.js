














// text appearing

const navLogo = document.querySelector(".logo")

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
        introTextDown3.style.top = "220px"
    }, "1")


}


navLogo.addEventListener("click", moveIntroText)