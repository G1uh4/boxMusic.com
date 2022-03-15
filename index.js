const BoxOne = document.getElementById("musicBoxOne")
const BoxTwo = document.getElementById("musicBoxTwo")
const BoxThree = document.getElementById("musicBoxThree")
const BoxFour = document.getElementById("musicBoxFour")
const BoxFive = document.getElementById("musicBoxFive")
const BoxSix = document.getElementById("musicBoxSix")
const BoxSeven = document.getElementById("musicBoxSeven")
const animation = document.getElementById("showAnimations")

function addSoundOne(){
    const soundOne = new Audio("./Sounds/SoundOne.mp3")
    soundOne.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/poof.png"> 
    ` 
}
BoxOne.addEventListener("click", addSoundOne)

function addSecondSound(){
    const soundTwo = new Audio("./Sounds/SoundThree.mp3")
    soundTwo.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/cry.png"> 
    ` 
}
BoxTwo.addEventListener("click", addSecondSound)

function addThirdSound(){
    const soundThree = new Audio("./Sounds/SoundFour.mp3")
    soundThree.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/wtf.png"> 
    ` 
}
BoxThree.addEventListener("click", addThirdSound)

function addFourthSound(){
    const soundFour = new Audio("./Sounds/SoundFive.mp3")
    soundFour.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/cold.png"> 
    ` 
}
BoxFour.addEventListener("click", addFourthSound)

function addFifthSound(){
    const soundFive = new Audio("./Sounds/SoundSix.mp3")
    soundFive.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/cry.png"> 
    ` 
}
BoxFive.addEventListener("click", addFifthSound)

function addSixthSound(){
    const soundSix = new Audio("./Sounds/SoundSeven.mp3")
    soundSix.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/kiss.png"> 
    ` 
}
BoxSix.addEventListener("click", addSixthSound)

function addSeventhSound(){
    const soundSeven = new Audio("./Sounds/SoundTwo.mp3")
    soundSeven.play()
    animation.innerHTML = `
    <img class="animationIcon" src="images/noMouth.png"> 
    ` 
}
BoxSeven.addEventListener("click", addSeventhSound)