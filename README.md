qs-1
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
Ans : Using getElementById, you can access a specific element by its ID,
while getElementsByClassName allows you to access all elements that share a specific class name,
and With querySelector, you can select any single element, and with querySelectorAll,
you can access multiple elements of different classes or types. 

qs-2 
How do you create and insert a new element into the DOM?
Ans : step 1 : creat a new elemnt > let newElement = document.createElement("p");
      step 2 : add new content  > newElement.textContent = "Hello, I am new p";
      step 3 : insert content > newElementv.textContent = "Hello, I am new p";

qs-3
What is Event Bubbling and how does it work?
Ans :When I handle an event, it doesn’t go from top to bottom; instead,
it spreads from the bottom to the top like bubbles—this is called event bubbling.
It works like this: if I handle an event on a button, it first happens on the button,
then goes to the button’s parent element, and then to its parent, and so on.

qs-4 
What is Event Delegation in JavaScript? Why is it useful?
Ans : Instead of attaching listeners to many elements, a single listener is added
to the parent element, and the event is checked via event.target to determine on
which child it occurred.

For example, if I have 10 buttons, instead of writing separate code for each,
I put all 10 under a parent and add one event listener to that parent. Later,
using event.target, I can know which button was clicked.

qs- 5
ChatGPT said:

preventDefault() cancels the default behavior of an event. For example,
if you add an event listener to a button, clicking it may normally refresh
the page repeatedly, but using preventDefault() stops that from happening.

stopPropagation() stops an event right there,
preventing it from bubbling or going up to parent elements.
