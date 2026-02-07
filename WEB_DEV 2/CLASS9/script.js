// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph);

// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);
console.log(newParagraph); 
// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

// remove Element
// remove the first paragraph of container
const rev = document.querySelector("#container p");
rev.remove();

const image = document.createElement("img");

image.setAttribute(
  "src",
  "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/178bs_Best-Colleges-for-Master-in-Commerce-in-Gurgaon-768x431-1.webp"
);

image.setAttribute("alt", "K.R Mangalam");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);

let date = new Date();
console.log(date);
setInterval(() => {
  let time = new Date();
  console.log(time);let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let clock = document.getElementById("digi clock");
}100
