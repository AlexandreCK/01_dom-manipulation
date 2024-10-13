// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.

let mainTitleElement = document.getElementById("mainTitle");

console.log(mainTitleElement);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."

let allParagraphCollection = document.getElementsByTagName("p");

allParagraphCollection[1].textContent = "This paragraph has been changed.";

// // Exercise 3: Changing CSS Styles
// // TODO: Select the first list item and change its text color to red

let allListCollection = document.getElementsByTagName("li");

allListCollection[0].style.color = "red";

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds

allParagraphCollection[0].classList.add("highlight");

let removeHighlightClass = () => {
  return allParagraphCollection[0].classList.remove("highlight");
};

setTimeout(removeHighlightClass, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list

let newLi = document.createElement("li");

newLi.textContent = "Item 4";

let referenceElement = document.getElementById("list");

referenceElement.appendChild(newLi);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list

let listElements = document.getElementsByTagName("li");

let lastLiIndex = listElements.length - 1;

let liToRemove = listElements[lastLiIndex];

liToRemove.remove();

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"

buttonElement = document.getElementById("actionButton");

buttonElement.addEventListener("click", function () {
  alert("Button clicked!");
});

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div

let inputElement = document.getElementById("inputField");

let resultElement = document.getElementById("result");

inputElement.addEventListener("change", function () {
  resultElement.innerText = inputElement.value;
});

// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div

let visibilityButtonElement = document.getElementById("actionButton");

visibilityButtonElement.addEventListener("click", function () {
  let targetElement = document.getElementById("content");

  targetElement.style.display = "none";
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"

let inputFieldElement = document.getElementById("inputField");

inputFieldElement.placeholder = "Enter your name";
