let start = document.getElementById("start")
let skip = document.getElementById("skip")
let music = document.getElementById("backgroundmusic")
let cover = document.getElementById("cover")
let musicbutton = document.getElementById("musicbutton")
let content = document.getElementById("content")


start.addEventListener("click",startmusic)
skip.addEventListener("click",stopmusic)

function startmusic () {
  music.play();
  cover.classList.add("hide")
  musicbutton.innerHTML = "Pause Music"
  content.classList.remove("hide")
}

function stopmusic () {
  music.pause()
  cover.classList.add("hide")
  musicbutton.innerHTML = "Play Music"
  content.classList.remove("hide")
}

musicbutton.addEventListener("click",playPauseMusic)

function playPauseMusic () {
  if (music.paused) {
    music.play();
    musicbutton.innerHTML = "Pause Music"
  } else {
    music.pause();
    musicbutton.innerHTML = "Play Music"
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}