import {projects, Todo, Project, addTodo, removeTodo, addProject, removeProject} from './structure'

let currentProject = projects[0];

let newTaskActive = false;

let newProjectActive = false;

const content = document.getElementById('content');

const sideBar = document.createElement('div');
sideBar.id = 'side-bar';

const todoBar = document.createElement('div');
todoBar.id = 'todo-bar';

const doneBar = document.createElement('div');
doneBar.id = 'done-bar';

const createSidebar = () => {
    const sideTitle = document.createElement('p');
    sideTitle.id = 'side-title';
    sideTitle.textContent = 'Too Much To Do';
    sideBar.appendChild(sideTitle);

    const projectList = document.createElement('div');
    projects.forEach(project => {
        let currProj = document.createElement('div');
        if (project == currentProject) {
            currProj.style.color = 'red';
        };
        currProj.setAttribute('class', 'project-links');
        currProj.addEventListener('click', () => {
            currentProject = project;
            clearTasks();
            clearSidebar();
        });
        currProj.textContent = project.name;
        projectList.appendChild(currProj);
    });

    sideBar.appendChild(projectList);
    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'new-project-button';
    newProjectButton.textContent = '+';
    newProjectButton.addEventListener('click', newProjectForm);

    sideBar.appendChild(newProjectButton);

}

function clearTasks() {
    while (todoBar.firstChild) {
        todoBar.removeChild(todoBar.firstChild);
    }
    createTodoBar();
};

function clearSidebar() {
    while(sideBar.firstChild) {
        sideBar.removeChild(sideBar.firstChild);
    }
    createSidebar();
}

function createTodoBar() {
    const todoTopDiv = document.createElement('div');
    todoTopDiv.id = 'todo-top-div';
    const todoTitle = document.createElement('h3');
    todoTitle.textContent = 'To Do';
    todoTopDiv.appendChild(todoTitle);
    const newTaskButton = document.createElement('button');
    newTaskButton.id = 'new-task-button';
    newTaskButton.textContent = '+';
    newTaskButton.addEventListener('click', newTaskForm);
    todoTopDiv.appendChild(newTaskButton);
    todoBar.appendChild(todoTopDiv);
    let reversedList = currentProject.list.slice();
    reversedList.reverse();
    reversedList.forEach(task => {
        let taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'task-div');
        let taskName = document.createElement('p');
        taskName.setAttribute('class', 'task-name');
        taskName.textContent = task.title;
        taskDiv.appendChild(taskName);
        let taskDuedate = document.createElement('p');
        taskDuedate.setAttribute('class', 'task-due-date');
        taskDuedate.textContent = task.dueDate;
        taskDiv.appendChild(taskDuedate);
        let taskPriority = document.createElement('p');
        taskPriority.setAttribute('class', 'task-priority');
        taskPriority.textContent = task.priority;
        taskDiv.appendChild(taskPriority);
        todoBar.appendChild(taskDiv);
    });
}

function newTaskForm() {
    if (newTaskActive) {
        let lastNewTask = document.getElementById('new-task-div')
        todoBar.removeChild(lastNewTask);
    }
    newTaskActive = true;
    let name = "";
    let description = "";
    let date = "";

    let newTaskDiv = document.createElement('div');
    newTaskDiv.setAttribute('class', 'task-div');
    newTaskDiv.id = 'new-task-div';
    let newTaskForm = document.createElement('form');
    let newTaskName = document.createElement('input');
    newTaskName.type = 'text';
    newTaskName.required = true;
    newTaskName.setAttribute('placeholder', 'Enter Task Name');
    newTaskForm.appendChild(newTaskName);
    let newTaskDate = document.createElement('input');
    newTaskDate.type = 'date';
    newTaskForm.appendChild(newTaskDate);

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = "Create";
    newTaskForm.appendChild(submitButton);
    newTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        name = newTaskName.value;
        date = newTaskDate.value;
        let todo = Todo(name, description, date, currentProject);
        addTodo(todo, currentProject);
        newTaskActive = false;
        clearTasks();
    });


    newTaskDiv.appendChild(newTaskForm);
    let titleBar = document.getElementById('todo-top-div');
    todoBar.insertBefore(newTaskDiv, titleBar.nextSibling);
}

function newProjectForm () {
    if (newProjectActive) {
        let lastNewProject = document.getElementById('new-proj-div')
        sideBar.removeChild(lastNewProject);
    }
    newProjectActive = true;
    let newProjectDiv = document.createElement('div');
    newProjectDiv.id = 'new-proj-div';
    let newForm = document.createElement('form');
    let newProjName = document.createElement('input');
    newProjName.type = 'text';
    newProjName.style.width = '100px';
    newProjName.required = true;
    newForm.appendChild(newProjName);
    newForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let projName = newProjName.value;
        let project = Project(projName);
        addProject(project);
        newProjectActive = false;
        clearSidebar();
    });

    newProjectDiv.appendChild(newForm);
    let plusButton = document.getElementById('new-project-button');
    sideBar.insertBefore(newProjectDiv, plusButton);
};
 




content.appendChild(sideBar);
content.appendChild(todoBar);
content.appendChild(doneBar);

export {createSidebar, createTodoBar}