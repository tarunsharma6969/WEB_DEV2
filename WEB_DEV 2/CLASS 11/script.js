const textInput = document.getElementById("myInput");
textInput.addEventListener("change", (event) => {
//   here event is targeting the entire element Object and event.target is targeting the value of the element Object
    event.preventDefault();
    console.log(event.target.id);

});

const form = document.getElementById("formInput");
const textInput = document.getElementById("myInput")
const courseInput = document.getElementById("course")
const output = document.getElementById("output")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // to get the user input value
    const name = textInput.value
    const course = courseInput.value
    console.log(name);

    // put the name and course value inside the outputbox
    output.innerText = name + " " + course
})