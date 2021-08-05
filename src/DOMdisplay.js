import {projects, Todo, Project, addTodo, removeTodo, setTodo, updateDescription, updateTitle, updateDate, addProject, removeProject, updateProject} from './structure'
import {closeBlack, deleteBlack, deleteWhite, doneBlack, doneWhite, editBlack, editWhite} from './index'


let currentProject = projects[0];

let newTaskActive = false;

let newProjectActive = false;

let editTaskActive = false;

let editProjectActive = false;
const body = document.body;
const content = document.createElement('div');
content.id = 'content';
body.appendChild(content);

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
        currProj.setAttribute('class', 'project-div');
        let currProjName = document.createElement('div');
        if (project == currentProject) {
            currProj.style.backgroundColor = 'rgb(100, 98, 98)';
        };
        currProjName.setAttribute('class', 'project-names');
        currProjName.addEventListener('click', () => {
            currentProject = project;
            clearTasks();
            clearSidebar();
        });
        currProjName.textContent = project.name;
        currProj.appendChild(currProjName);
        let projectButtons = document.createElement('div');
        projectButtons.setAttribute('class', 'project-buttons');
        currProj.appendChild(projectButtons);
        currProj.addEventListener('mouseenter', function() {
            let editProjectButton = document.createElement('img');
            editProjectButton.src = editWhite;
            editProjectButton.setAttribute('class', 'project-button');
            editProjectButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!editProjectActive) {
                    editProject(currProj, project);
                }
            });
            projectButtons.appendChild(editProjectButton);

            let deleteProjectButton = document.createElement('img');
            deleteProjectButton.src = deleteWhite;
            deleteProjectButton.setAttribute('class', 'project-button');
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
    editTaskActive = false;
    newTaskActive = false;
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
    newTaskButton.addEventListener('click', function() {
        if (!editTaskActive) {
            newTaskForm();
        }
    });
    todoTopDiv.appendChild(newTaskButton);
    todoBar.appendChild(todoTopDiv);

    const doneTopDiv = document.createElement('div');
    doneTopDiv.id = 'done-top-div';
    const doneTitle = document.createElement('h3');
    doneTitle.textContent = 'Completed';
    doneTopDiv.appendChild(doneTitle);
    doneBar.appendChild(doneTopDiv);

    let taskSection = document.createElement('div');
    taskSection.id = "task-section";
    todoBar.appendChild(taskSection);

    let doneSection = document.createElement('div');
    doneSection.id = 'done-section';
    doneBar.appendChild(doneSection);
    if (currentProject == null) {
        let noTasks = document.createElement('p');
        noTasks.id = 'no-tasks';
        noTasks.textContent = 'Add a project';
        taskSection.appendChild(noTasks);
    }
    else {
        let reversedList = currentProject.list.slice();
        if (reversedList.length == 0) {
            let noTasks = document.createElement('p');
            noTasks.id = 'no-tasks';
            noTasks.textContent = 'Add some tasks';
            taskSection.appendChild(noTasks);
        }
        else {
            reversedList.reverse();
            reversedList.forEach(task => {
                let taskDiv = document.createElement('div');
                taskDiv.setAttribute('class', 'task-div');

                let taskLeft = document.createElement('div');
                taskLeft.setAttribute('class', 'task-left');

                let taskInfo = document.createElement('div');
                taskInfo.setAttribute('class', 'task-info')
                let taskComplete = document.createElement('input');
                taskComplete.type = 'checkbox';
                taskComplete.setAttribute('class', 'complete-box');
                if (task.complete) {
                    taskComplete.checked = true;
                }
                taskComplete.addEventListener('click', function() {
                    setTodo(task);
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
                    let editButton = document.createElement('img');
                    editButton.src = editBlack;
                    editButton.setAttribute('class', 'task-button');
                    editButton.addEventListener('click', function() {
                        if(!editTaskActive && !newTaskActive) {
                            editTask(taskDiv, task);
                        }
                    });
                    taskButtons.appendChild(editButton);

                    let deleteButton = document.createElement('img');
                    deleteButton.src = deleteBlack;
                    deleteButton.setAttribute('class', 'task-button');
                    deleteButton.addEventListener('click', function() {
                        removeTodo(task, currentProject);
                        editTaskActive = false;
                        newTaskActive = false;
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
                    doneSection.appendChild(taskDiv);
                }
                else {
                    taskSection.appendChild(taskDiv);
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
        newTaskForm.setAttribute('class', 'new-task-form');
        let newTaskInfo = document.createElement('div');
        newTaskInfo.setAttribute('class', 'new-task-info');
        let newTaskName = document.createElement('input');
        newTaskName.maxLength = '30';
        newTaskName.type = 'text';
        newTaskName.required = true;
        newTaskName.setAttribute('placeholder', 'Enter Task Name');
        newTaskName.setAttribute('class', 'input-stylings');
        newTaskInfo.appendChild(newTaskName);
        let newTaskDate = document.createElement('input');
        newTaskDate.type = 'date';
        newTaskDate.setAttribute('class', 'date-stylings');
        newTaskInfo.appendChild(newTaskDate);
        newTaskForm.appendChild(newTaskInfo);

        let newTaskButtons = document.createElement('div');
        newTaskButtons.setAttribute('class', 'new-task-buttons');
        let cancelButton = document.createElement('img');
        cancelButton.src = closeBlack;
        cancelButton.setAttribute('class', 'task-form-buttons');
        cancelButton.addEventListener('click', function(event) {
            newTaskActive = false;
            clearTasks();
        });
        newTaskButtons.appendChild(cancelButton);

        let submitButton = document.createElement('input');
        submitButton.type = 'image';
        submitButton.src = doneBlack;
        submitButton.setAttribute('class', 'task-form-buttons');
        newTaskButtons.appendChild(submitButton);
        newTaskForm.appendChild(newTaskButtons);

        newTaskForm.addEventListener('keyup', function(e) {
            if (e.key == 'Escape') {
                cancelButton.click();
            }
        });

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
    newProjName.maxLength = '30';
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
    projectForm.setAttribute('class', 'edit-project-div');
    let editName = document.createElement('input');
    editName.maxLength = '30';
    editName.setAttribute('class', 'new-project-input');
    editName.value = project.name;
    projectForm.appendChild(editName);
    let submitButton = document.createElement('input');
    submitButton.setAttribute('class', 'project-edit-buttons');
    submitButton.type = 'image';
    submitButton.src = doneWhite;
    projectForm.appendChild(submitButton);
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateProject(project, editName.value);
        editProjectActive = false;
        clearSidebar();
    });

    projectForm.addEventListener('keyup', function(e) {
        if (e.key == 'Escape') {
            editProjectActive = false;
            clearSidebar();
        }
    });

    div.appendChild(projectForm);
    editName.focus();
}

function editTask (div, task) {
    editTaskActive = true;
    div.style.width = '320px';
    div.style.height = '160px';

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    let taskForm = document.createElement('form');
    taskForm.setAttribute('class', 'edit-task-form');
    let editNameDiv = document.createElement('div');
    editNameDiv.setAttribute('class', 'edit-task-name');
    let editName = document.createElement('input');
    editName.type = 'text';
    editName.required = true;
    editName.maxLength = '30';
    editName.value = task.title;
    editName.setAttribute('class', 'input-stylings');
    editNameDiv.appendChild(editName);
    taskForm.appendChild(editNameDiv);

    let editDescriptionDiv = document.createElement('div');
    editDescriptionDiv.setAttribute('class', 'edit-task-description');
    let editDescription = document.createElement('textarea');
    editDescription.setAttribute('class', 'task-description');
    editDescription.placeholder = 'Description';
    editDescription.value = task.description;
    editDescriptionDiv.appendChild(editDescription);
    taskForm.appendChild(editDescriptionDiv);

    let editBottomDiv = document.createElement('div');
    editBottomDiv.setAttribute('class', 'edit-task-bottom');
    let editDate = document.createElement('input');
    editDate.setAttribute('class', 'date-stylings');
    editDate.type = 'date';
    editDate.value = task.dueDate;
    editBottomDiv.appendChild(editDate);
    
    let editButtonDiv = document.createElement('div');
    let cancelButton = document.createElement('img');
    cancelButton.src = closeBlack;
    cancelButton.setAttribute('class', 'task-form-buttons');
    cancelButton.addEventListener('click', function(event) {
        editTaskActive = false;
        clearTasks();
    });
    editButtonDiv.appendChild(cancelButton);

    let submitButton = document.createElement('input');
    submitButton.type = 'image';
    submitButton.src = doneBlack;
    submitButton.setAttribute('class', 'task-form-buttons');
    editButtonDiv.appendChild(submitButton);

    editBottomDiv.appendChild(editButtonDiv);

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateTitle(task, editName.value);
        updateDescription(task, editDescription.value);
        updateDate(task, editDate.value);
        div.style.width = '300px';
        div.style.heigh= '80px';
        editTaskActive = false;
        clearTasks();
    });
    taskForm.addEventListener('keyup', function(e) {
        if (e.key == 'Escape') {
            cancelButton.click();
        }
    });

    taskForm.appendChild(editBottomDiv);

    div.appendChild(taskForm);
}


content.appendChild(sideBar);
content.appendChild(todoBar);
content.appendChild(doneBar);

export {createSidebar, createTasksBar}