// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.

let mainTitleElement = document.getElementById("mainTitle");

console.log(mainTitleElement);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."

let paragraphCollection = document.getElementsByTagName("p");

paragraphCollection[1].textContent = "This paragraph has been changed.";

// // Exercise 3: Changing CSS Styles
// // TODO: Select the first list item and change its text color to red

let listItemCollection = document.getElementsByTagName("li");

listItemCollection[0].style.color = "red";

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds

paragraphCollection[0].classList.add("highlight");

let removeHighlightClass = () => {
  paragraphCollection[0].classList.remove("highlight");
};

setTimeout(removeHighlightClass, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list

let newListItem = document.createElement("li");

newListItem.textContent = "Item 4";

let listElement = document.getElementById("list");

listElement.appendChild(newListItem);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list

let lastListItemIndex = listItemCollection.length - 1;

let lastListItem = listItemCollection[lastListItemIndex];

lastListItem.remove();

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"

let buttonElement = document.getElementById("actionButton");

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

buttonElement.addEventListener("click", function () {
  let targetElement = document.getElementById("content");

  if (targetElement.style.display === "none") {
    targetElement.style.display = "block";
  } else {
    targetElement.style.display = "none"; 
  }
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"

inputElement.placeholder = "Enter your name";
