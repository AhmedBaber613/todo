let button = document.querySelector(".button");
let todoss = document.querySelector(".todos");

const beeZy = () => {
  let input = document.querySelector("input").value;
  const addTodo = document.createElement('li');
  const btn = document.createElement('button');
  btn.classList.add("btn");
  btn.textContent = "X";
  addTodo.textContent = input;
  todoss.appendChild(addTodo);
  addTodo.appendChild(btn);
};

// Attach event listener to the parent element
todoss.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
    // Get the parent <li> element of the clicked button
    const listItem = event.target.closest('li');
    
    // Remove the <li> element from the DOM
    listItem.remove();
  }
});

button.onclick = beeZy;
