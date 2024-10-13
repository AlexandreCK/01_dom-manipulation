# DOM Manipulation Challenge

Welcome to the **DOM Manipulation Challenge**! Your task is to perform various actions on DOM elements using JavaScript by creating and linking an `index.js` file to the provided `index.html` and `style.css` files.

You are **not allowed to modify** the provided `index.html` or `style.css` files. All your DOM manipulations should be done strictly through JavaScript.

## Instructions

1. **Create an `index.js` file**.

   - The `index.js` file will contain your JavaScript code to manipulate the DOM.
   - You must link this file to the provided `index.html`.

2. **Paste the exercise instructions (in the form of comments)** into the `index.js` file.

   - The exercises from the examples below should be added as comments, with your solution below each corresponding comment.

3. **Perform the following DOM Manipulation tasks** (as described in the comments below).

---

## Challenge Steps

The following exercises must be completed in `index.js`. Each exercise is explained as a comment, and your code should be written beneath the comment to fulfill the task:

### Exercise 1: Selecting Elements

```js
// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
```

### Exercise 2: Changing HTML Content

```js
// EXERCISE 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
```

### Exercise 3: Changing CSS Styles

```js
// EXERCISE 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red
```

### Exercise 4: Adding/Removing Classes

```js
// EXERCISE 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds
```

### Exercise 5: Creating and Appending Elements

```js
// EXERCISE 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list
```

### Exercise 6: Removing Elements

```js
// EXERCISE 6: Removing Elements
// TODO: Remove the last list item from the unordered list
```

### Exercise 7: Handling Events

```js
// EXERCISE 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"
```

### Exercise 8: Handling Events

```js
// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div
```

### Exercise 9: Handling Events

```js
// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div
```

### Exercise 10: Handling Events

```js
// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Insert your name"
```

---

## 1. Control Version

To ensure your project follows proper version control practices, you will need to create a repository, manage branches, and follow the pull request workflow.

### Steps to Setup Version Control

1. **Create a repository** from the provided template.

   - The repository name should be `01_dom-manipulation`.
   - Follow the template’s instructions to get started.

2. **Create a new branch** called `develop`.

   - All development work for the exercises must be done in this branch.

3. **Commit your changes** as you progress through the exercises.

   - Each exercise solution should be committed with descriptive commit messages.

4. **Push the `develop` branch** to the repository.

---

## 2. CI/CD Workflow

We’ll be using a CI/CD workflow for this project to ensure a smooth development and deployment process. Below are the steps for setting up the branching strategy and deployment process:

### Branching Strategy

- **Main Branch**: This branch will represent the **production** environment. Only the teacher will approve and merge changes into the `main` branch.
- **Develop Branch**: All exercises must be developed in the `develop` branch.

### Workflow

1. **Develop in the `develop` branch**:

   - As mentioned above, all DOM manipulation exercises should be coded in the `develop` branch.
   - Conventional commits should be made for each completed exercise. (`CONVENTIONAL_COMMITS` documentation [[↗]](./CONVENTIONAL_COMMITS.md))

2. **Create a Pull Request (PR)**:

   - Once all exercises are completed, create a pull request to merge `develop` into the `main` branch.
   - The pull request should include a brief description of the changes and why they should be merged.
   - Only the teacher can review and approve the pull request. Ensure that you request the teacher as a reviewer.

3. **Teacher Approval**:

   - The teacher will review the pull request. Feedback may be provided for any necessary adjustments.
   - Once approved by the teacher, the pull request can be merged into the `main` branch.

4. **Deployment**:
   - Upon merging into the `main` branch, the solution must be deployed into production.
   - The deployment process can be automated using CI/CD tools, or the teacher will guide on how to deploy the final solution.

---

## How to Submit

1. Ensure your `index.js` file is linked correctly to the `index.html`.
2. Complete all the exercises within the `index.js` file, ensuring they meet the requirements.
3. Push your changes to the `develop` branch.
4. Create a pull request to merge your `develop` branch into `main`.
5. Await teacher approval and feedback.

---

## Tips

- Use `console.log()` to debug and verify if elements are being selected or modified correctly.
- Make sure the `index.js` file is linked correctly to the `index.html`.
- Refer back to the examples in the `README.md` for guidance on DOM manipulation methods.

Good luck, and follow the workflow to ensure a smooth development process!
