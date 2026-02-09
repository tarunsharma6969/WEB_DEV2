// function handleClick(){
//     document.getElementById("btn").textContent="Clicked"
// }

// function handleClick(){
//    const head= document.querySelector("h1");
//    head.style.color="tomato"
//    head.textContent="New heading"
// }

document.getElementById("btn").addEventListener("click",()=>{
     const spanEle=document.createElement("span").textContent = "This is span element";

    const image = document.createElement("img");

    image.setAttribute("src", "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/178bs_Best-Colleges-for-Master-in-Commerce-in-Gurgaon-768x431-1.webp");

    image.setAttribute("alt", "K.R Mangalam");

    document.getElementById("content").append(spanEle);
    document.getElementById("content").append(image);
})