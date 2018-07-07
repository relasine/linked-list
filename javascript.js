// querySelectors

var websiteTitleInput = document.querySelector("#website-title");
var websiteURLInput = document.querySelector("#website-url");
var enterButton = document.querySelector("#enter-button");
var title1 = document.querySelector("#title1");
var title2 = document.querySelector("#title2");
var title3 = document.querySelector("#title3");
var title4 = document.querySelector("#title4");
var link1 = document.querySelector("#link1");
var link2 = document.querySelector("#link2");
var link3 = document.querySelector("#link3");
var link4 = document.querySelector("#link4");
var readButton1 = document.querySelector("#read-btn1");
var readButton2 = document.querySelector("#read-btn2");
var readButton3 = document.querySelector("#read-btn3");
var readButton4 = document.querySelector("#read-btn4");
var deleteButton = document.querySelector("#delete-btn1");
var deleteButton = document.querySelector("#delete-btn2");
var deleteButton = document.querySelector("#delete-btn3");
var deleteButton = document.querySelector("#delete-btn4");

// addEventListeners
enterButton.addEventListener("click", submitInput);
websiteTitleInput.addEventListener("keyup", disabledButton);
websiteURLInput.addEventListener("keyup", disabledButton);
readButton1.addEventListener("click", markRead1);
readButton2.addEventListener("click", markRead2);
readButton3.addEventListener("click", markRead3);
readButton4.addEventListener("click", markRead4);
deleteButton1.addEventListener("click", deleteArticle1);
deleteButton2.addEventListener("click", deleteArticle2);
deleteButton3.addEventListener("click", deleteArticle3);
deleteButton4.addEventListener("click", deleteArticle4);

// functions
function enterButton() {
  //if article1 blank, populate
  //else if article2 blank, populate
  //else if article3 blank, populate
  //else if article4 blank, populate
  //else throw full message
}

function disabledButton() {
  if (websiteTitleInput.length > 0 && websiteURLInput.length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}

function markRead1() {
  if (readButton1.classList.contains(read) {
    readButton1.classList.remove(read);
  } else {
    readButton1.classList.add(read);
  }
}

function markRead2() {
  if (readButton2.classList.contains(read) {
    readButton2.classList.remove(read);
  } else {
    readButton2.classList.add(read);
  }
}

function markRead3() {
  if (readButton3.classList.contains(read) {
    readButton3.classList.remove(read);
  } else {
    readButton3.classList.add(read);
  }
}

function markRead4() {
  if (readButton4.classList.contains(read) {
    readButton4.classList.remove(read);
  } else {
    readButton4.classList.add(read);
  }
}

function deleteArticle1() {
  // delete the article card
}