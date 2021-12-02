
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