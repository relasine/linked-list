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


// functions
function submitInput() {
  event.preventDefault();
  console.log("working");
  var article = document.createElement("article");
  bookmarkSection.appendChild(article);
  var h2Element = document.createElement("h2");
  h2Element.className = "bookmark-text";
  var h2Text = document.createTextNode(websiteTitleInput.value);
  h2Element.appendChild(h2Text);
  article.appendChild(h2Element);
  var hr1 = document.createElement("hr");
  article.appendChild(hr1);
  var webLink = document.createElement("a");
  webLink.className = "bookmark-url";
  webLink.href = websiteURLInput.value;
  webLink.innerHTML = websiteURLInput.value;
  article.appendChild(webLink);
  var hr2 = document.createElement("hr");
  article.appendChild(hr2);
  var wrapperDiv = document.createElement("div");
  wrapperDiv.className = "btn-wrapper clearfix";
  article.appendChild(wrapperDiv);
  var readButton = document.createElement("button");
  readButton.className = "read-btn";
  var readButtonText = document.createTextNode("Read");
  readButton.appendChild(readButtonText);
  wrapperDiv.appendChild(readButton);
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  var deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  wrapperDiv.appendChild(deleteButton);
  clearInputs();
  readButton.addEventListener("click", markRead);
  deleteButton.addEventListener("click", deleteArticle);
}

function clearInputs() {
  enterButton.disabled = true;
  websiteTitleInput.value = "";
  websiteURLInput.value = "";
}

function enableEventListeners() {

}

function disabledButton() {
  if (websiteTitleInput.value.length > 0 && websiteURLInput.value.length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}

function markRead() {
  // if (readButton.classList.contains(read)) {
  //   readButton.classList.remove(read);
  // } else {
  //   readButton.classList.add(read);
  // }
}

function deleteArticle() {
  // delete the article card
}