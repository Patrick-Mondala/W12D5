
const possibleTodos = JSON.parse(window.localStorage.getItem("todos"));
const todos = possibleTodos || [];
const ul = document.getElementsByClassName("todos").item(0);
const form = document.getElementsByClassName("add-todo-form").item(0);

function addTodo () {
  const storage = window.localStorage;
  const input = document.getElementsByName("add-todo").item(0);
  const todo = { input: input.value, done: false };
  todos.push(todo);
  storage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  populateList(todos);
}

function populateList(arr) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  arr.forEach((listItem, ind) => {
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.innerHTML = listItem.input;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = listItem.done;
    checkbox.dataset.index = ind;
  
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  })
}

function handleSubmit() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
  })
}

function handleCheck() {
  ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "INPUT") {
      const current = e.target;
      const index = current.dataset.index;
      todos[index].done = !todos[index].done;
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  })
}

export {populateList, addTodo, handleSubmit, handleCheck};