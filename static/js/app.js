const messages = document.getElementById("chat-messages");
const options = document.getElementById("chat-options");

let userData = {};

// Add message with avatar and emoji
function addMessage(content, isBot = true, emoji = "") {
  const message = document.createElement("div");
  message.classList.add("chat-message", isBot ? "bot-message" : "user-message");

  // const avatar = document.createElement("img");
  // avatar.src = isBot ? "assets/bot.png" : "assets/user.png"; // Bot/User avatar URLs
  // message.appendChild(avatar);

  const text = document.createElement("span");
  text.textContent = emoji ? `${emoji} ${content}` : content;
  message.appendChild(text);

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

// Show buttons or inputs dynamically
function showOptions(buttons) {
  options.innerHTML = ""; // Clear previous options
  buttons.forEach((btn) => {
    const button = document.createElement("button");
    button.textContent = btn.label;
    button.classList.add("chat-button");
    button.onclick = btn.action;
    options.appendChild(button);
  });
}

function askInput(question, key) {
  console.log("asked input clalles"); //remove this
  addMessage(question, true, "📝");
  options.innerHTML = `
    <input type="text" id="${key}" class="chat-input" placeholder="Enter ${key}..." />
    <button class="chat-button" id="submit-btn">Submit</button>
  `;

  const inputField = document.getElementById(key);
  const submitButton = document.getElementById("submit-btn");

  submitButton.onclick = () => submitInput(key);

  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      console.log("enter presses");
      submitButton.click();
    }
  });

  inputField.focus();
}

function submitInput(key) {
  const input = document.getElementById(key).value.trim();
  if (input) {
    userData[key] = input;
    addMessage(input, false, "✅");
    proceed(key);
  } else {
    alert("Please provide a valid input.");
  }
}

// Initial flow
addMessage("👋 Hi! This is a chatbot from Smart-Fit!");
addMessage("How can I help you today?");
showOptions([
  { label: "I want to gain weight", action: () => nextStep("gain weight") },
  { label: "I want to lose weight", action: () => nextStep("lose weight") },
  { label: "I want to stay fit", action: () => nextStep("stay fit") },
]);

function nextStep(goal) {
  userData.goal = goal;
  addMessage(`You selected: ${goal}`, false, "✅");
  addMessage("What is your gender? Please select below:", true, "👤");
  showOptions([
    { label: "Male", action: () => proceedWithGender("Male") },
    { label: "Female", action: () => proceedWithGender("Female") },
    { label: "Other", action: () => proceedWithGender("Other") },
  ]);
}

function proceedWithGender(gender) {
  userData.gender = gender;
  addMessage(`Gender: ${gender}`, false, "✅");
  askInput("How old are you?", "age");
}

function proceed(key) {
  if (key === "age") {
    askInput("What is your height (in cm)?", "height");
  } else if (key === "height") {
    askInput("What is your weight (in kg)?", "weight");
  } else {
    calculateHealthDetails();
  }
}

//this is jus a test
document.getElementById("home-btn").addEventListener("click", function () {
  window.location.href = "{{ url_for('home') }}"; // Redirect to home page
});

// Calculate and show health-related messages
async function calculateHealthDetails() {
  const { height, weight, age, gender, goal } = userData;

  // Display results
  addMessage("💡 Here are your fitness tips!");
  addMessage(`Fetching exercise suggestions... 🔄`);
  try {
    const response = await fetch("http://localhost:9000/get-exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const { suggestions } = await response.json();

    addMessage("💪 Here are your suggested exercises:");
    suggestions.forEach((exercise) => addMessage(exercise, true, "🏋"));
  } catch (error) {
    addMessage(
      "❌ Error fetching exercise suggestions. Please try again later.",
      true,
    );
  }
  options.innerHTML = ""; // Clear options
}
