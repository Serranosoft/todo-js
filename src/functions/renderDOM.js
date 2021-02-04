function renderDOM() {
    let content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);

    let listPanel = document.createElement("div");
    listPanel.id = "list-panel";
    content.appendChild(listPanel);

    let titleListPanel = document.createElement("h2");
    titleListPanel.innerHTML = "Task Lists"
    titleListPanel.classList.add("title");
    listPanel.appendChild(titleListPanel);

    let projectsList = document.createElement("div");
    projectsList.id = "lists";
    listPanel.appendChild(projectsList);

    let addAProject = document.createElement("h3");
    addAProject.innerHTML = "+ Add a project"
    addAProject.id = "open-project-modal";
    addAProject.classList.add("task-list")
    addAProject.classList.add("add-list");
    projectsList.appendChild(addAProject);

    let tasksPanel = document.createElement("div");
    tasksPanel.id = "tasks-panel";
    content.appendChild(tasksPanel);

    let titleTasksPanel = document.createElement("h2");
    titleTasksPanel.classList.add("title");
    titleTasksPanel.id = "project-title";
    tasksPanel.appendChild(titleTasksPanel);

    let deleteProyect = document.createElement("button");
    deleteProyect.classList.add("delete-project");
    deleteProyect.classList.add("hidden");
    deleteProyect.innerHTML = "Delete project";
    tasksPanel.appendChild(deleteProyect);


    let tasksGrid = document.createElement("div");
    tasksGrid.classList.add("tasks-grid");
    tasksPanel.appendChild(tasksGrid);


    let task = document.createElement("div");
    task.classList.add("task");
    tasksGrid.appendChild(task);

    let addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("add-task-container");
    addTaskContainer.classList.add("add-task-container-hidden");
    task.appendChild(addTaskContainer);

    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.classList.add("task-input");
    addTaskContainer.appendChild(taskInput);

    let addTask = document.createElement("button");
    addTask.classList.add("add-task");
    addTask.innerHTML = "+";
    addTaskContainer.appendChild(addTask);

    let taskInfoContainer = document.createElement("div");
    taskInfoContainer.classList.add("task-info");
    taskInfoContainer.classList.add("task-info-hidden");
    tasksGrid.appendChild(taskInfoContainer);

};

export default renderDOM;