// querySelectors

var bookmarkCount = 0;
var readBookmarks = 0;
var unreadBookmarks = 0;
var websiteTitleInput = document.querySelector("#website-title");
var websiteURLInput = document.querySelector("#website-url");
var enterButton = document.querySelector(".submit-button");
var title = document.querySelector(".bookmark-text");
var link = document.querySelector(".bookmark-url");
var readButton = document.querySelector(".read-btn");
var deleteButton = document.querySelector(".delete-btn");
var bookmarkSection = document.querySelector(".right-stored");
var totalLinksText = document.querySelector(".total-links")
var readBookmarksText = document.querySelector(".read-bookmarks-text")
var unreadBookmarksText = document.querySelector(".unread-bookmarks-text")

// addEventListeners
enterButton.addEventListener("click", submitInput);
websiteTitleInput.addEventListener("keyup", disabledButton);
websiteURLInput.addEventListener("keyup", disabledButton);
bookmarkSection.addEventListener("click", deleteBtnClick);
bookmarkSection.addEventListener("click", readBtnClick);
  
// functions

function deleteBtnClick() {
   if(event.target.classList.contains("delete-btn") && event.target.parentNode.parentNode.classList.contains("read")) {
    bookmarkCount --;
    readBookmarks --;
    event.target.parentNode.parentNode.remove();
  } else if(event.target.className === "delete-btn") {
    bookmarkCount --;
    unreadBookmarks --;
    event.target.parentNode.parentNode.remove();
  }
}

function readBtnClick(){
if(event.target.classList.contains("read-btn") && event.target.parentNode.parentNode.classList.contains("read")) {
    event.target.parentNode.parentNode.classList.toggle("read");
    event.target.classList.toggle("bookmark-read");
    readBookmarks --;
    unreadBookmarks ++;
  } else if(event.target.classList.contains("read-btn")) {
    event.target.parentNode.parentNode.classList.toggle("read");
    event.target.classList.toggle("bookmark-read");
    readBookmarks ++;
    unreadBookmarks --;
  };
}

function submitInput(event) {
  event.preventDefault();
  var cardTitle = websiteTitleInput.value;
  var webLink = websiteURLInput.value;
  var card = 
    `<article>
      <h2 class="bookmark-text">${cardTitle}</h2>
      <hr>
      <a class="bookmark-url" href="${webLink}">${webLink}</a>
      <hr>
      <div class="btn-wrapper clearfix">
        <button class="read-btn">Read</button>
        <button class="delete-btn">Delete</button>
      </div>
    </article>`;
  bookmarkSection.innerHTML += card; 
  clearInputs();
  bookmarkCount ++;
  unreadBookmarks ++;
}

function clickDeleteButton() {
  if(event.target.className === "delete-btn") {
    event.target.parentNode.parentNode.remove();
  }
}

function clickReadButton() {
  if(event.target.className === "read-btn") {
    event.target.parentNode.parentNode.classList.toggle("read");
  }
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

// function markRead() {
//   console.log("button works");
//   if (event.parentNode.parentNode.classList.contains(read)) {
//     event.parentNode.parentNode.remove(read);
//   } else {
//     event.parentNode.parentNode.classList.add(read);
//   }
// }

function deleteArticle() {
  // delete the article card
}