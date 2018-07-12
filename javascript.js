
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
var readBookmarksText = document.querySelector(".read-bookmarks-text");
var unreadBookmarksText = document.querySelector(".unread-bookmarks-text");

// addEventListeners
enterButton.addEventListener("click", submitInput);
websiteTitleInput.addEventListener("keyup", disabledButton);
websiteURLInput.addEventListener("keyup", disabledButton);
bookmarkSection.addEventListener("click", deleteBtnClick);
bookmarkSection.addEventListener("click", readBtnClick);
  
// functions
function deleteBtnClick() {
   if(event.target.classList.contains("delete-btn") && event.target.parentNode.parentNode.classList.contains("read")) {
    minusBookmark();
    minusRead();
    event.target.parentNode.parentNode.remove();
  } else if(event.target.className === "delete-btn") {
    minusBookmark();
    minusUnread();
    event.target.parentNode.parentNode.remove();
  }
}

function readBtnClick(){
if(event.target.classList.contains("read-btn") && event.target.parentNode.parentNode.classList.contains("read")) {
    event.target.parentNode.parentNode.classList.toggle("read");
    event.target.classList.toggle("bookmark-read");
    minusRead();
    plusUnread();
    readBookmarksText.innerText = `read bookmarks: ${readBookmarks}`;
    unreadBookmarksText.innerText = `unread bookmarks: ${unreadBookmarks}`;
  } else if(event.target.classList.contains("read-btn")) {
    event.target.parentNode.parentNode.classList.toggle("read");
    event.target.classList.toggle("bookmark-read");
    plusRead();
    minusUnread();
  }
}

function submitInput(event) {
  event.preventDefault();
  var cardTitle = websiteTitleInput.value;
  var webLink = websiteURLInput.value;
  if (websiteTitleInput.value.length > 0 && websiteURLInput.value.length > 0) {
    publishBookmark();
  } else {
    alert("Please enter a title and address");
  }
}

function publishBookmark() {
  var cardTitle = websiteTitleInput.value;
  var webLink = websiteURLInput.value;
  var card = 
    `<article>
      <h2 class="bookmark-text" aria-label="bookmarked website title">${cardTitle}</h2>
      <hr>
      <a class="bookmark-url" aria-label="bookmarked website address" href="http://${webLink}">${webLink} </a>
      <hr>  
      <div class="btn-wrapper clearfix">
        <button class="read-btn" aria-label="mark bookmark read">Read</button>
        <button class="delete-btn" aria-label="delete bookmark">Delete</button>
      </div>
    </article>`;
  bookmarkSection.innerHTML += card; 
  clearInputs();
  plusBookmark();
  plusUnread();
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

function plusBookmark() {
  bookmarkCount ++;
  totalLinksText.innerText = `total bookmarks: ${bookmarkCount}`;
}

function minusBookmark() {
  bookmarkCount --;
  totalLinksText.innerText = `total bookmarks: ${bookmarkCount}`;
}

function plusRead() {
  readBookmarks ++;
  readBookmarksText.innerText = `read bookmarks: ${readBookmarks}`;
}

function plusUnread() {
  unreadBookmarks ++;
  unreadBookmarksText.innerText = `unread bookmarks: ${unreadBookmarks}`;
}

function minusRead() {
  readBookmarks --;
  readBookmarksText.innerText = `read bookmarks: ${readBookmarks}`;
}

function minusUnread() {
  unreadBookmarks --;
  unreadBookmarksText.innerText = `unread bookmarks: ${unreadBookmarks}`;
}

