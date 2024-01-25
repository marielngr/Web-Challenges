console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const addClass = (element, className) => element.classList.add(className);
const addTextContent = (element, textContent) =>
  (element.textContent = textContent);
const addChild = (parent, child) => parent.appendChild(child);

function newPost() {
  const body = document.querySelector('[data-js="body"]');
  const newArticle = document.createElement("article");
  addClass(newArticle, "post");
  const newParagraph = document.createElement("p");
  addClass(newParagraph, "post__content");
  addTextContent(newParagraph, "This is a new Post.");
  const newFooter = document.createElement("footer");
  addClass(newFooter, "post__footer");
  const newSpan = document.createElement("span");
  addClass(newSpan, "post__username");
  addTextContent(newSpan, "@username");
  const newButton = document.createElement("button");
  addClass(newButton, "post__button");
  addTextContent(newButton, "♥ Like");
  newButton.type = "button";
  newButton.setAttribute("data-js", "like-button2");
  addChild(body, newArticle);
  addChild(newArticle, newParagraph);
  addChild(newArticle, newFooter); 
  addChild(newFooter, newSpan);
  addChild(newFooter, newButton);
  const likeButton2 = document.querySelector('[data-js="like-button2"]');
  likeButton2.addEventListener("click", handleLikeButtonClick);
}

newPost();
