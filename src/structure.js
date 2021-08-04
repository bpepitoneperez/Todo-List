import { compareAsc, format } from 'date-fns'

const projects = [];
let projectsIndex = 0;



const Project = (name) => {
    let list = [];
    let todoIndex = 0;
    let index = projectsIndex;
    return {
        name,
        index,
        todoIndex,
        list,
    }
}

const Todo = (title, description, dueDate) => {
    let index = 0;
    let complete = false;
    return {
        title,
        description,
        dueDate,
        index,
        complete,
    }
}

const addTodo = (todo, project) => {
    let correct = projects[project.index];
    correct.list.push(todo);
    todo.index = correct.todoIndex;
    correct.todoIndex++;
}

const removeTodo = (todo, project) => {
    let correct = projects[project.index];
    correct.list.splice(todo.index, 1);
    correct.list.forEach(thing => {
        if (thing.index >= todo.index) {
            thing.index--;
        }
    });
    correct.todoIndex--;
}

const addProject = (proj) => {
    projects.push(proj);
    projectsIndex++;
}

const removeProject = (index) => {
    projects.splice(index, 1);
    projects.forEach(project => {
        if (project.index >= index) {
            project.index = project.index - 1;
        }
    });
    projectsIndex--;
}

let defaultProject = Project('Default');
addProject(defaultProject);

let todo1 = Todo('Try it out', 'Create more tasks', new Date(2021, 12, 21));

addTodo(todo1, defaultProject);

export {projects, Todo, Project, addTodo, removeTodo, addProject, removeProject}