import {Todo, Project, addTodo, removeTodo, addProject, removeProject} from './structure'

let defaultProject = Project('default');
addProject(defaultProject);
console.log(defaultProject);

let todo1 = Todo('clean', 'clean the room', 'tomorrow', 'low', defaultProject);
console.log(todo1);

let todo2 = Todo('cook', 'cook food', 'tonight', 'low', defaultProject);
console.log(todo2);

let todo3 = Todo('task1', 'do a thing 1', 'tomorrow', 'low', defaultProject);
console.log(todo3);

let todo4 = Todo('task2', 'do a thing 2', 'tomorrow', 'low', defaultProject);
console.log(todo4);

let todo5 = Todo('task3', 'do a third thing', 'tomorrow', 'low', defaultProject);
console.log(todo5);

addTodo(todo1, defaultProject);
addTodo(todo2, defaultProject);
addTodo(todo3, defaultProject);
addTodo(todo5, defaultProject);
addTodo(todo4, defaultProject);

console.log(defaultProject);

removeTodo(todo2, defaultProject);

console.log(defaultProject);
