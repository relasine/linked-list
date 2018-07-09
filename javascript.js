// querySelectors

var websiteTitleInput = document.querySelector("#website-title");
var websiteURLInput = document.querySelector("#website-url");
var enterButton = document.querySelector(".submit-button");
var title = document.querySelector(".bookmark-text");
var link = document.querySelector(".bookmark-url");
var readButton = document.querySelector(".read-btn");
var deleteButton = document.querySelector(".delete-btn");
var bookmarkSection = document.querySelector(".right-stored");

// addEventListeners
enterButton.addEventListener("click", submitInput);
websiteTitleInput.addEventListener("keyup", disabledButton);
websiteURLInput.addEventListener("keyup", disabledButton);
bookmarkSection.addEventListener("click", function(event) {
  if(event.target.className === "delete-btn") {
    event.target.parentNode.parentNode.remove()
  }
});

// functions
function submitInput(event) {
  event.preventDefault();
  var cardTitle = websiteTitleInput.value;
  var webLink = websiteURLInput.value;
  var card = 
    `<article>
      <h2 class="bookmark-text">${cardTitle}</h2>
      <hr>
      <a class="bookmark-url" href="#">${webLink}</a>
      <hr>
      <div class="btn-wrapper clearfix">
        <button class="read-btn">Read</p>
        <button class="delete-btn">Delete</p>
      </div>
    </article>`
  bookmarkSection.innerHTML += card; 
  clearInputs();
  // deleteButton.addEventListener("click", deleteArticle);
  // readButton.addEventListener("click", markRead);
}

function clearInputs() {
  enterButton.disabled = true;
  websiteTitleInput.value = "";
  websiteURLInput.value = "";
}

function disabledButton() {
  if (websiteTitleInput.value.length > 0 && websiteURLInput.value.length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}

function markRead() {
  console.log("button works");
  // if (readButton.classList.contains(read)) {
  //   readButton.classList.remove(read);
  // } else {
  //   readButton.classList.add(read);
  // }
}

function deleteArticle() {
  // delete the article card
}