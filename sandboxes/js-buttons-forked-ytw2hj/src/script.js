// removes any previous log statements (useful in codesandbox)
console.clear();

// we save a reference to the <button> in a variable called 'button'
const button = document.querySelector("button");

// same for the blog post
const blogPost = document.querySelector(".blog-post");

// camelCase
button.addEventListener("click", () => {
  console.log("click!");
  blogPost.classList.add("important");
  // experiment what the other classList properties do:
  // blogPost.classList.remove("important");
  // blogPost.classList.toggle("important");
});
