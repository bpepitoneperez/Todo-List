import {projects, Todo, Project, addTodo, removeTodo, addProject, removeProject} from './structure'

let currentProject = projects[0];

let newTaskActive = false;

let newProjectActive = false;

let editTaskActive = false;

let editProjectActive = false;

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
    sideTitle.textContent = 'Too-Much To-Do';
    sideBar.appendChild(sideTitle);

    const projectList = document.createElement('div');
    projects.forEach(project => {
        let currProj = document.createElement('div');
        let currProjName = document.createElement('div');
        if (project == currentProject) {
            currProj.style.backgroundColor = 'rgb(100, 98, 98)';
        };
        currProj.setAttribute('class', 'project-links');
        currProjName.addEventListener('click', () => {
            currentProject = project;
            clearTasks();
            clearSidebar();
        });
        currProjName.textContent = project.name;
        currProj.appendChild(currProjName);
        let projectButtons = document.createElement('div');
        currProj.appendChild(projectButtons);
        currProj.addEventListener('mouseenter', function() {
            let editProjectButton = document.createElement('button');
            editProjectButton.textContent = "#";
            editProjectButton.setAttribute('class', 'project-buttons');
            editProjectButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!editProjectActive) {
                    editProject(currProj, project);
                }
            });
            projectButtons.appendChild(editProjectButton);

            let deleteProjectButton = document.createElement('button');
            deleteProjectButton.textContent = 'X';
            deleteProjectButton.setAttribute('class', 'project-buttons');
            deleteProjectButton.addEventListener('click', function(e) {
                e.stopPropagation();
                editProjectActive = false;
                removeProject(project.index);
                currentProject = projects[0];
                clearSidebar();
                clearTasks();
            });
            projectButtons.appendChild(deleteProjectButton);
        });
        currProj.addEventListener('mouseleave', function() {
            while (projectButtons.firstChild) {
                projectButtons.removeChild(projectButtons.firstChild);
            };
        })
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
    while (doneBar.firstChild) {
        doneBar.removeChild(doneBar.firstChild);
    }
    createTasksBar();
};

function clearSidebar() {
    while(sideBar.firstChild) {
        sideBar.removeChild(sideBar.firstChild);
    }
    createSidebar();
}

function createTasksBar() {
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

    const doneTopDiv = document.createElement('div');
    doneTopDiv.id = 'done-top-div';
    const doneTitle = document.createElement('h3');
    doneTitle.textContent = 'Completed';
    doneTopDiv.appendChild(doneTitle);
    doneBar.appendChild(doneTopDiv);

    if (currentProject == null) {
        let noTasks = document.createElement('p');
        noTasks.id = 'no-tasks';
        noTasks.textContent = 'Add a project';
        todoBar.appendChild(noTasks);
    }
    else {
        let reversedList = currentProject.list.slice();
        if (reversedList.length == 0) {
            let noTasks = document.createElement('p');
            noTasks.id = 'no-tasks';
            noTasks.textContent = 'Add some tasks';
            todoBar.appendChild(noTasks);
        }
        else {
            reversedList.reverse();
            reversedList.forEach(task => {
                let taskDiv = document.createElement('div');
                taskDiv.setAttribute('class', 'task-div');

                let taskLeft = document.createElement('div');
                taskLeft.setAttribute('class', 'task-left');

                let taskInfo = document.createElement('div');
                let taskComplete = document.createElement('input');
                taskComplete.type = 'checkbox';
                taskComplete.setAttribute('class', 'complete-box');
                if (task.complete) {
                    taskComplete.checked = true;
                }
                taskComplete.addEventListener('click', function() {
                    task.complete = !task.complete;
                    clearTasks();
                });
                taskInfo.appendChild(taskComplete);
                let taskName = document.createElement('p');
                taskName.setAttribute('class', 'task-name');
                taskName.textContent = task.title;
                taskInfo.appendChild(taskName);
                taskLeft.appendChild(taskInfo);

                let taskDuedate = document.createElement('p');
                taskDuedate.setAttribute('class', 'task-due-date');
                taskDuedate.textContent = task.dueDate;
                taskLeft.appendChild(taskDuedate);
                taskDiv.appendChild(taskLeft);

                let taskButtons = document.createElement('div');
                taskButtons.setAttribute('class', 'task-buttons');
                taskDiv.appendChild(taskButtons);
                taskDiv.addEventListener('mouseenter', function() {
                    let editButton = document.createElement('button');
                    editButton.textContent = '#';
                    editButton.setAttribute('class', 'task-button');
                    editButton.addEventListener('click', function() {
                        if(!editTaskActive) {
                            editTask(taskDiv, task);
                        }
                    });
                    taskButtons.appendChild(editButton);

                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'X';
                    deleteButton.setAttribute('class', 'task-button');
                    deleteButton.addEventListener('click', function() {
                        removeTodo(task, currentProject);
                        editTaskActive = false;
                        clearTasks();
                    });
                    taskButtons.appendChild(deleteButton);
                });
                taskDiv.addEventListener('mouseleave', function() {
                    while (taskButtons.firstChild) {
                        taskButtons.removeChild(taskButtons.firstChild);
                    }
                });
                if (task.complete) {
                    doneBar.appendChild(taskDiv);
                }
                else {
                    todoBar.appendChild(taskDiv);
                }
                
            });
        }
    }
    
}

function newTaskForm() {
    if (currentProject != null) {
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

        newTaskForm.addEventListener('keyup', function(e) {
            if (e.key == 'Escape') {
                newTaskActive = false;
                clearTasks();
            }
        });

        newTaskDiv.appendChild(newTaskForm);
        let titleBar = document.getElementById('todo-top-div');
        todoBar.insertBefore(newTaskDiv, titleBar.nextSibling);
        newTaskName.focus();
    }
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
    newProjName.id = 'new-project-name';
    newProjName.type = 'text';
    newProjName.style.width = '100px';
    newProjName.required = true;
    newForm.appendChild(newProjName);
    newForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let projName = newProjName.value;
        let project = Project(projName);
        addProject(project);
        currentProject = project;
        newProjectActive = false;
        clearSidebar();
        clearTasks();
    });

    newForm.addEventListener('keyup', function(e) {
        if (e.key == 'Escape') {
            newProjectActive = false;
            clearSidebar();
        }
    });

    newProjectDiv.appendChild(newForm);
    let plusButton = document.getElementById('new-project-button');
    sideBar.insertBefore(newProjectDiv, plusButton);
    newProjName.focus();
};

function editProject(div, project) {
    editProjectActive = true;
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    let projectForm = document.createElement('form');
    let editName = document.createElement('input');
    editName.value = project.name;
    projectForm.appendChild(editName);
    let cancelButton = document.createElement('button');
    cancelButton.setAttribute('class', 'project-edit-buttons');
    cancelButton.textContent = 'X';
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        editProjectActive = false;
        clearSidebar();
    });
    projectForm.appendChild(cancelButton);
    let submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'project-edit-buttons');
    submitButton.textContent = "v/";
    submitButton.type = 'submit';
    projectForm.appendChild(submitButton);
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        project.name = editName.value;
        editProjectActive = false;
        clearSidebar();
    });

    projectForm.addEventListener('keyup', function(e) {
        if (e.key == 'Enter') {
            submitButton.click();
        }
        else if (e.key == 'Escape') {
            cancelButton.click();
        }
    });

    div.appendChild(projectForm);
}

function editTask (div, task) {
    editTaskActive = true;
    div.style.width = '320px';
    div.style.height = '120px';

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    let taskForm = document.createElement('form');
    let editName = document.createElement('input');
    editName.type = 'text';
    editName.required = true;
    editName.value = task.title;
    taskForm.appendChild(editName);

    let editDescription = document.createElement('input');
    editDescription.type = 'textarea';
    editDescription.value = task.description;
    taskForm.appendChild(editDescription);

    let editDate = document.createElement('input');
    editDate.type = 'date';
    editDate.value = task.dueDate;
    taskForm.appendChild(editDate);

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        editTaskActive = false;
        clearTasks();
    });
    taskForm.appendChild(cancelButton);

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = "Submit";
    taskForm.appendChild(submitButton);
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        task.title = editName.value;
        task.description = editDescription.value;
        task.dueDate = editDate.value;
        div.style.width = '300px';
        div.style.heigh= '80px';
        editTaskActive = false;
        clearTasks();
    });
    taskForm.addEventListener('keyup', function(e) {
        if (e.key == 'Enter') {
            submitButton.click();
        }
        else if (e.key == 'Escape') {
            cancelButton.click();
        }
    });

    div.appendChild(taskForm);
}


content.appendChild(sideBar);
content.appendChild(todoBar);
content.appendChild(doneBar);

export {createSidebar, createTasksBar}