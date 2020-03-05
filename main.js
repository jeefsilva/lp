

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function zoomImg(classImg) {
    var imgRender = document.getElementById(classImg);
    modal.style.display = "block";
    modalImg.src = imgRender.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var dropClose = document.getElementById("close-drop")
var dropDownId = document.getElementById("drop-down")

function dropDown() {
    dropDownId.classList.toggle('closed')
    dropClose.classList.toggle('hide')
}

var logoAmaro = document.getElementById("logo-amaro")
var fieldAmaro = document.getElementById("amaro-field")
var logoSage = document.getElementById("logo-sage")
var fieldSage = document.getElementById("sage-field")
var logoOgilvy = document.getElementById("logo-ogilvy")
var fieldOgilvy = document.getElementById("ogilvy-field")

function logoAmaroEnable() {
  logoAmaro.classList.add("logo-amaro-selected");
  logoAmaro.classList.remove("logo-amaro");
  logoSage.classList.add("logo-sage-deselected");
  logoOgilvy.classList.add("logo-ogilvy");
  logoOgilvy.classList.remove("logo-ogilvy-selected");
  fieldOgilvy.classList.add("display-none");
  fieldAmaro.classList.remove("display-none");
  fieldSage.classList.add("display-none");

}

function logoOgilvyEnable() {
  logoOgilvy.classList.add("logo-ogilvy-selected");
  logoOgilvy.classList.remove("logo-ogilvy");
  logoSage.classList.add("logo-sage-deselected");
  logoAmaro.classList.add("logo-amaro");
  logoAmaro.classList.remove("logo-amaro-selected");
  fieldOgilvy.classList.remove("display-none");
  fieldAmaro.classList.add("display-none");
  fieldSage.classList.add("display-none");
}

function logoSageEnable() {
  logoOgilvy.classList.remove("logo-ogilvy-selected");
  logoOgilvy.classList.add("logo-ogilvy");
  logoSage.classList.remove("logo-sage-deselected");
  logoAmaro.classList.add("logo-amaro");
  logoAmaro.classList.remove("logo-amaro-selected");
  fieldOgilvy.classList.add("display-none");
  fieldAmaro.classList.add("display-none");
  fieldSage.classList.remove("display-none");
}
