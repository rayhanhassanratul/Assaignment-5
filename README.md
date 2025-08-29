
## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- **`getElementById`**: Selects a single element by its unique `id`.  
- **`getElementsByClassName`**: Returns a live HTMLCollection of all elements with the specified class name.  
- **`querySelector`**: Returns the **first** element that matches a CSS selector.  
- **`querySelectorAll`**: Returns a static NodeList of **all** elements that match a CSS selector.

---

## 2. How do you create and insert a new element into the DOM?

**Steps:**

```javascript
// Step 1: Create a new element
let newElement = document.createElement("p");

// Step 2: Add content to the element
newElement.textContent = "Hello, I am a new paragraph.";

// Step 3: Insert the element into the DOM
document.body.appendChild(newElement);
````

---

## 3. What is Event Bubbling and how does it work?

**Event Bubbling** means that when an event is triggered on an element, it first runs on that element, and then propagates (bubbles) up to its parent elements, all the way up to the root (`document`).

For example:
If you click a button inside a `div`, the click event will first fire on the button, then on the `div`, then on its parent, and so on.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

**Event Delegation** is a technique where instead of attaching individual event listeners to multiple child elements, a single event listener is added to their parent element. Inside the event handler, `event.target` is used to determine which child triggered the event.

**Example:**

```javascript
document.getElementById("button-container").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});
```

**Why it’s useful:**

* Reduces memory usage (fewer listeners).
* Dynamically handles elements that are added later.
* Makes code cleaner and easier to manage.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

* **`preventDefault()`**: Prevents the default action of an event from occurring.
  Example: Preventing a form from submitting or a link from navigating.

* **`stopPropagation()`**: Stops the event from propagating (bubbling) to parent elements.
  Example: A click event on a button won’t bubble up to its parent `div`.


