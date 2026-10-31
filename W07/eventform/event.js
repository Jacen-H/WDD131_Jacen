const form = document.querySelector("#eventForm");
const attendeeType = document.querySelector("#attendeeType");
const dynamicFieldContainer = document.querySelector("#dynamicFieldContainer");
const dynamicLabel = document.querySelector("#dynamicLabel");
const dynamicInput = document.querySelector("#dynamicInput");
const errorContainer = document.querySelector("#errorContainer");
const output = document.querySelector("#output");
const eventDateInput = document.querySelector("#eventDate");

function updateDynamicField() {
  const type = attendeeType.value;
  
  if (type === "student") {
    dynamicFieldContainer.hidden = false;
    dynamicLabel.textContent = "Student I#";
    dynamicInput.placeholder = "Enter 9-digit student ID";
    dynamicInput.required = true;
  } else if (type === "guest") {
    dynamicFieldContainer.hidden = false;
    dynamicLabel.textContent = "Access Code";
    dynamicInput.placeholder = "Enter event code (EVENT131)";
    dynamicInput.required = true;
  } else {
    dynamicFieldContainer.hidden = true;
    dynamicInput.value = "";
    dynamicInput.required = false;
  }
}

attendeeType.addEventListener("change", updateDynamicField);
updateDynamicField();

function isPastOrToday(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const chosen = new Date(dateString + "T00:00:00"); 
  return chosen <= today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorContainer.textContent = "";
  output.innerHTML = "";
  
  let errors = [];

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const eventDate = eventDateInput.value;
  const type = attendeeType.value;
  const dynamicVal = dynamicInput.value.trim();

  if (!eventDate || isPastOrToday(eventDate)) {
    errors.push("The event date must be later than the current date.");
  }

  if (type === "student") {
    const studentIdRegex = /^\d{9}$/;
    if (!studentIdRegex.test(dynamicVal)) {
      errors.push("Student I# must be exactly 9 digits.");
    }
  } else if (type === "guest") {
    if (dynamicVal !== "EVENT131") {
      errors.push("Invalid access code. Please enter 'EVENT131'.");
    }
  }

  if (errors.length > 0) {
    errorContainer.innerHTML = errors.join("<br>");
    return;
  }

  output.innerHTML = `
    <h2>🎟️ Event Ticket Confirmation</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Event Date:</strong> ${eventDate}</p>
    <p><strong>Attendee Type:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
    <p><strong>${type === "student" ? "Student I#" : "Access Code"}:</strong> ${dynamicVal}</p>
  `;

  form.reset();
  updateDynamicField();
});