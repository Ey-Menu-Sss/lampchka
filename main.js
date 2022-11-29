let img = document.querySelector(".bla");
let body = document.querySelector("body");
img.style.width = "200px";
img.style.marginTop = "50px";

setInterval(() => {
  let src = img.getAttribute("src");
  if (
    src === "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
  ) {
    img.setAttribute(
      "src",
      "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
    );
  } else {
    img.setAttribute(
      "src",
      "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
    );
  }
}, 1000);




