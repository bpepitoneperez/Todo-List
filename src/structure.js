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

const Todo = (title, description, dueDate, priority, project) => {
    let index = 0;
    return {
        title,
        description,
        dueDate,
        priority,
        project,
        index,
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

export {Todo, Project, addTodo, removeTodo, addProject, removeProject}