let img = document.querySelector(".bla");
let body = document.querySelector("body");
img.style.width = "200px";
img.style.marginTop = "50px";

function on() {
  let src = img.getAttribute("src");
  if (
    src === "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
  ) {
    img.setAttribute("src","https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg")

  }
}

function off() {
  let src = img.getAttribute("src");
  if (
    src === "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
  ) {
    img.setAttribute("src","https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg")

  }
}


