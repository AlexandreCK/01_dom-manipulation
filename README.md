Here's the complete `README.md` with all sections numbered and the updated explanation of `window.document` and `globalThis`:

---

# DOM Manipulation with JavaScript

This guide provides an overview of the most common actions you can perform on DOM elements using JavaScript.

## Table of Contents

1. [Introduction to Web APIs](#1-introduction-to-web-apis)
2. [The `window` and `globalThis`](#2-the-windowdocument-and-globalthis)
3. [Selecting Elements](#3-selecting-elements)
4. [Changing HTML Content](#4-changing-html-content)
5. [Changing CSS Styles](#5-changing-css-styles)
6. [Adding/Removing Classes](#6-addingremoving-classes)
7. [Creating and Appending Elements](#7-creating-and-appending-elements)
8. [Removing Elements](#8-removing-elements)
9. [Handling Events](#9-handling-events)

---

## 1. Introduction to Web APIs

Web APIs are interfaces provided by the browser that allow you to interact with various components of a web page. They expose functionalities like modifying the content of the page (DOM manipulation), interacting with the network, responding to user input, and much more.

### Examples of Common Web APIs:

- **DOM (Document Object Model) API**: Allows you to manipulate HTML and XML documents by accessing elements, attributes, and content.
- **Fetch API**: Provides an interface for fetching resources across the network.
- **Local Storage API**: Enables you to store key-value pairs in a web browser.
- **Geolocation API**: Gives access to the geographical location of a user’s device.

These APIs help make the web more interactive by providing an environment in which you can build dynamic web applications that respond to user actions.

---

## 2. The `window` and `globalThis`

In web development, the global `window` object represents the browser window and is the root of the DOM hierarchy. The `document` object, accessible as `window.document`, is a property of the `window` object and represents the entire webpage loaded in the browser.

The `document` object provides the interface for interacting with the DOM (Document Object Model) of the webpage, allowing you to access, manipulate, and modify elements, styles, and content dynamically.

### The `globalThis` Object

Starting with modern JavaScript (ES2020), the `globalThis` object was introduced to access the global object in any JavaScript environment. In a browser, `globalThis` is equivalent to the `window` object.

- In the browser environment: `globalThis === window`
- In Node.js or other JavaScript environments: `globalThis` points to the global object of that environment.

This ensures consistency when writing JavaScript code that might run in different environments.

### Example:

```js
console.log(globalThis === window); // true in browsers
```

Using `globalThis` makes your code more portable, but when specifically targeting browser environments, using `window` is more common.

### The `window.document`

The `document` object is part of the `window` (or `globalThis` in the browser) and serves as the primary way to interact with the web page’s structure. It represents the entire HTML document loaded into the browser and provides numerous methods to access and manipulate elements in the DOM.

You can:

- **Select elements** using methods like `getElementById` or `querySelector`.
- **Create new elements** dynamically with `document.createElement`.
- **Listen for events** like user clicks or form submissions using `addEventListener`.

### Example:

```js
// Accessing the document using window or globalThis
console.log(window.document === globalThis.document); // true

// Manipulating the document
document.title = "New Page Title"; // Changes the page title
```

In essence, `window.document` (or `globalThis.document`) is the gateway through which you can programmatically interact with the web page, making it dynamic and responsive.

---

## 3. Selecting Elements

To manipulate elements in the DOM, you first need to select them. You can do this using several methods:

### Example: Select by ID

```js
let element = document.getElementById("myElement");
```

### Example: Select by Class Name

```js
let elements = document.getElementsByClassName("myClass");
```

### Example: Select by Query Selector (ID, class, or tag)

```js
let element = document.querySelector("#myElement"); // Selects by ID
let elements = document.querySelectorAll(".myClass"); // Selects all by class
```

---

## 4. Changing HTML Content

You can change the content of an element using `innerHTML`, `textContent`, or other properties.

### Example: Change HTML inside an element

```js
let element = document.getElementById("myElement");
element.innerHTML = "<p>New content</p>";
```

### Example: Change Text Content

```js
element.textContent = "New text content";
```

---

## 5. Changing CSS Styles

You can modify the inline styles of an element using `style`.

### Example: Change the background color

```js
element.style.backgroundColor = "lightblue";
```

### Example: Change multiple styles

```js
element.style.cssText = "color: red; font-size: 20px;";
```

---

## 6. Adding/Removing Classes

Manipulating classes is a common action to change the styling or behavior of elements.

### Example: Add a class

```js
element.classList.add("newClass");
```

### Example: Remove a class

```js
element.classList.remove("oldClass");
```

### Example: Toggle a class

```js
element.classList.toggle("active");
```

---

## 7. Creating and Appending Elements

You can create new elements and append them to the DOM.

### Example: Create and append a new element

```js
let newElement = document.createElement("div");
newElement.textContent = "I am a new element";
document.body.appendChild(newElement);
```

### Example: Insert an element before another

```js
let parentElement = document.getElementById("parent");
let referenceElement = document.getElementById("child");
parentElement.insertBefore(newElement, referenceElement);
```

---

## 8. Removing Elements

You can also remove elements from the DOM.

### Example: Remove an element

```js
let elementToRemove = document.getElementById("myElement");
elementToRemove.remove();
```

---

## 9. Handling Events

You can attach event listeners to handle user interactions.

### Example: Click Event

```js
element.addEventListener("click", function () {
  alert("Element clicked!");
});
```

### Example: Change Event (for inputs)

```js
let inputElement = document.getElementById("myInput");
inputElement.addEventListener("change", function () {
  console.log("Input value changed to: ", inputElement.value);
});
```

---

## Conclusion

These are some of the main actions you can perform to manipulate the DOM with JavaScript. By using these methods, you can dynamically create, update, style, and remove elements to create interactive and dynamic web pages.
