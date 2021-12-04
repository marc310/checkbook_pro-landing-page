
// pure js below
// back to top
var backButton = document.getElementById("backToTop");
var menu = document.getElementById("menu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    backButton.style.display = "block";
    setTimeout(function() {
        backButton.style.opacity = 1;
    },500)
    menu.style.position = "fixed";
  } else {
    backButton.style.opacity = 0;
    backButton.style.display = "none";
    menu.style.position = "relative";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// menu prevent close
var element = document.getElementById('menu_links'); 
var menu_chk = document.getElementById('show-menu');
element.addEventListener('click', () => {
    let menu_state = menu_chk.checked == false ? false : menu_chk.checked = false;
}); 

// play video
var playVideo = (e)=>{
    let id = e.target.parentNode.id
    let button = document.getElementById(id);
    let video = e.target.parentNode.nextElementSibling.id;
    let audioBtn = document.getElementById('bt_mute');
    // console.log(e.target.parentNode.nextElementSibling.id)
    button.style.display = 'none';
    audioBtn.style.opacity = 1;
    document.getElementById(video).play();
}

const spokeVideo = document.getElementById('spokeVideo');
var muteVideo = () => {
  spokeVideo.muted == true ? mute() : unmute();
}

let mute = () => {
  audioBtn = document.getElementById('audioBtn');
  audioBtn.classList.remove('fa-volume-mute')
  audioBtn.classList.add('fa-volume-up')
  spokeVideo.muted = false
}
let unmute = () => {
  audioBtn = document.getElementById('audioBtn');
  audioBtn.classList.add('fa-volume-mute')
  audioBtn.classList.remove('fa-volume-up')
  spokeVideo.muted = true
}

document.getElementById('spokeVideo').addEventListener('ended',showButton,false);
function showButton() {
    play_button = document.getElementById('spokeVideoPlay');
    play_button.style.display = 'flex';
}


