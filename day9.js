// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("myElement").textContent = "New Text Content";

// Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".myClass").style.backgroundColor = "lightblue";

// Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div.";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.textContent = "New list item";
document.querySelector("ul").appendChild(newLi);

// Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element.
const parentElement = document.getElementById("parentElement");
if (parentElement.lastElementChild) {
  parentElement.removeChild(parentElement.lastElementChild);
}

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const img = document.querySelector("img");
img.setAttribute("src", "./image.png");
img.setAttribute("width", "200px");
img.setAttribute("height", "150px");

// Task 8: Add and remove a CSS class to/from an HTML element.
const classElement = document.querySelector(".classElement");
classElement.classList.add("newClass");
classElement.classList.remove("oldClass");

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("myButton").addEventListener("click", () => {
  document.getElementById("myParagraph").textContent =
    "Paragraph text changed!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("hoverElement").addEventListener("mouseover", () => {
  document.getElementById("hoverElement").style.borderColor = "red";
});
