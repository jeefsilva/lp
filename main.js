

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