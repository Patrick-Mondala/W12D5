import warmUp from "./warmup";
import { Clock } from "./clock";
import { attachDogLinks, dogLinkCreator, handleEnter, handleLeave } from "./drop_down";
import { populateList, addTodo, handleSubmit, handleCheck } from "./todo_list";
import { handleScroll } from "./slide_scroll";

const clockElement = document.getElementById("clock");
const clock = new Clock(clockElement);
attachDogLinks();
handleLeave();
handleEnter();
const possibleTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
populateList(possibleTodos);
handleSubmit();
handleCheck();
handleScroll();

