console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//add EventListener to like button with function `handleLikeButtonClick``

//create:  article / <p class=post__content> / <footer class="post__footer"> --> <span class="..." / button

function createCard() {
  const article = document.createElement("article");
  article.classList.add("post");

  const paragraph = document.createElement("p");
  paragraph.classList.add("post__content");
  paragraph.textContent =
    "This is a new entry! I try to be as cool as the first.";
  article.append(paragraph);

  const footer = document.createElement("footer");
  footer.classList.add("post__footer");
  article.append(footer);

  const footerSpan = document.createElement("span");
  footerSpan.classList.add("post__username");
  footerSpan.textContent = "@username";
  footer.append(footerSpan);

  const footerButton = document.createElement("button");
  footerButton.type = "button";
  footerButton.classList.add("post__button");
  footerButton.setAttribute("data-js", "like-button2");
  footerButton.textContent = " ♥ Like";
  footer.append(footerButton);

  document.body.append(article);

  const likeButton2 = document.querySelector('[data-js="like-button2"]');
  likeButton2.addEventListener("click", handleLikeButtonClick);
}

createCard();
