import { compareAsc, format, formatDistanceToNowStrict } from 'date-fns'
let projects = [];
let projectsIndex = 0;

let storage = true;

if (storageAvailable('localStorage')) {
    storage = true;
    if(!localStorage.getItem('projects')) {
    } 
    else {
        let retrieved = localStorage.getItem('projects');
        retrieved = JSON.parse(retrieved);
        projects = [...retrieved];
        projectsIndex = projects.length;
    }
}
else {
    storage = false;
}


function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function updateLocal() {
    if (storage) {
        localStorage.clear();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}




let today = new Date();
today = format(today, 'MM-dd-yyyy');


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
    // if (dueDate != "") {
    //     dueDate = format(dueDate, 'MM-dd-yyyy');
    // }
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
    updateLocal();
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
    updateLocal();
}

const setTodo = (todo) => {
    todo.complete = !todo.complete;
    updateLocal();
}

const updateDescription = (todo, description) => {
    todo.description = description;
    updateLocal();
}

const updateTitle = (todo, title) => {
    todo.title = title;
    updateLocal();
}

const updateDate = (todo, date) => {
    //console.log(date);
    todo.dueDate = date;
    // if (todo.dueDate != "") {
    //     let date = new Date(todo.dueDate);
    //     todo.dueDate = format(date, 'MM-dd-yyyy');
    //     console.log(todo.dueDate);
    // }
    updateLocal();
}

const addProject = (proj) => {
    projects.push(proj);
    projectsIndex++;
    updateLocal();
}

const removeProject = (index) => {
    projects.splice(index, 1);
    projects.forEach(project => {
        if (project.index >= index) {
            project.index = project.index - 1;
        }
    });
    projectsIndex--;
    updateLocal();
}

const updateProject = (project, name) => {
    project.name = name;
    updateLocal();
}

if (projects.length == 0) {
    let defaultProject = Project('Default');
    addProject(defaultProject);

    let todo1 = Todo('Try it out', 'Create more tasks', new Date(2025, 11, 31));

    addTodo(todo1, defaultProject);
}


export {projects,
     projectsIndex, Todo, Project, addTodo, removeTodo, setTodo, updateDescription, updateTitle, updateDate, addProject, removeProject, updateProject}