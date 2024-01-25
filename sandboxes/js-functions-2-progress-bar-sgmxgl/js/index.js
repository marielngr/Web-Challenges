console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  if (document.body.clientHeight <= window.innerHeight) {
    return 100;
  }
  const relevantHeight = document.body.clientHeight - window.innerHeight;
  const fraction = window.scrollY / relevantHeight;
  const percent = fraction * 100;
  console.log(percent);
  return percent;
}

document.addEventListener("scroll", () => {
  const percent = calculateScrollPercentage();
  progressBar.style.width = percent + "%";
  console.log("hallo", window.scrollY, percent);
});
