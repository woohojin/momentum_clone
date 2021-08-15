const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("#todo-form input");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function makeTodo(newTodo) {
  const list = document.createElement("li");
  todoList.appendChild(list);

  const span = document.createElement("span");
  span.innerText = newTodo;
  list.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  list.appendChild(button);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  makeTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(makeTodo);
}
