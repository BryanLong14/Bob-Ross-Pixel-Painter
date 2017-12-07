//Bryan' code goes here

const body = document.querySelector('body');
var brush;
var drag = false;

function createCanvas () {
  var canvasDiv = document.createElement('div');
  canvasDiv.classList.add('canvas');
  body.appendChild(canvasDiv);
  for (var i = 0; i < 40000; i++) {
    var pixels = document.createElement('div');
    pixels.classList.add('pixels');
    pixels.style.backgroundColor = "";
    pixels.addEventListener("click", element => {
      brush = document.querySelector('input').value;
      element.target.style.backgroundColor = brush;
    })
    pixels.addEventListener("mouseover", colorDrag)
    canvasDiv.appendChild(pixels);
  };
};
createCanvas();

function colorDrag(e) {
  if(drag === true) {
    brush = document.querySelector('input').value;
    e.target.style.backgroundColor = brush;
  };
};

function dragChange() {
  document.querySelector(".canvas").addEventListener("mousedown", function () {
    drag = true
  });
  window.addEventListener("mouseup", function () {
    drag = false
    document.querySelector(".canvas").style.cursor = "default"
  });
};
dragChange()


function myFunction() {
    document.getElementById.style.cursor = "URL";
};


// function createPalette () {
//   var palleteDiv = document.createElement('div');
//   palleteDiv.classList.add('pallete');
//   body.appendChild(palleteDiv);
//   for (var i = 0; i < 10; i++) {
//     var coloredPixels = document.createElement('div');
//     coloredPixels.classList.add('coloredPixels');
//     coloredPixels.style.backgroundColor = "blue";
//     coloredPixels.addEventListener("click", element => {
//       brush = element.target.style.backgroundColor;
//       document.querySelector(
//         "body > div.current-color"
//       ).style.backgroundColor = brush;
//     });
//     palleteDiv.appendChild(coloredPixels);
//   };
// };
// createPalette();
