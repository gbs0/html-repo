const batch = 182; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";
const messageBox = document.getElementById("comment-form");
const messagesList = document.querySelector(".list-unstyled");
console.log(messageBox);
// Your turn to code!

messageBox.addEventListener("submit", (event) => {
  event.preventDefault();
  //Pick the input from user
  const userMessage = document.getElementById("your-message").value;
  console.log(userMessage);
  const userName = document.getElementById("your-name").value;
  console.log(userName);
  // Add a messagem in the HMTL ul
  messagesList.insertAdjacentHTML("beforeend", `<li>${userMessage}(posted <span class="date">10 minutes ago</span>) by ${userName}</li>`);
});
