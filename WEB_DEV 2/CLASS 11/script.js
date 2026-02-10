
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");


function createEventCard(title, date, category, description) {
  const eventCard = document.createElement("div");
  eventCard.className = "event-card";

  eventCard.innerHTML = `
    <h3>${title}</h3>
    <p><b>Date:</b> ${date}</p>
    <p><b>Category:</b> ${category}</p>
    <p>${description}</p>
  `;

  return eventCard;
}

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = eventTitle.value;
  const date = eventDate.value;
  const category = eventCategory.value;
  const description = eventDescription.value;

  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.remove();

  const card = createEventCard(title, date, category, description);
  eventContainer.appendChild(card);

  eventForm.reset();
});

clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
});

addSampleBtn.addEventListener("click", () => {
  eventContainer.innerHTML = ""; 

  const sampleEvents = [
    ["Tech Conference", "2026-02-15", "Conference", "A conference about latest technologies."],
    ["Web Workshop", "2026-02-20", "Workshop", "Learn web development basics."],
    ["Friends Meetup", "2026-02-25", "Meetup", "Meet friends and network."]
  ];

  sampleEvents.forEach((e) => {
    const card = createEventCard(e[0], e[1], e[2], e[3]);
    eventContainer.appendChild(card);
  });
});


const demoContent = document.getElementById("demoContent");

document.addEventListener("keydown", () => {
  demoContent.innerText = "🔥 DOM changed! You pressed a key!";
});


const form = document.getElementById("formInput");
const textInput = document.getElementById("myInput");
const courseInput = document.getElementById("course");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = textInput.value;
  const course = courseInput.value;

  output.innerText = name + " " + course;
});

textInput.addEventListener("change", (event) => {
  console.log("Changed Input ID:", event.target.id);
});
