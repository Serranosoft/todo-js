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

    /* TEST TASK LIST EXAMPLE */
    /*let listTest = document.createElement("h3");
    listTest.innerHTML = "Shopping List"
    listTest.classList.add("task-list");
    projectsList.appendChild(listTest);*/

    /* ****** */

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

    /* TEST TASK ITEM EXAMPLE */

    /*let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    task.appendChild(taskItem);

    
    let taskStatus = document.createElement("input");
    taskStatus.type = "checkbox";
    taskStatus.classList.add("task-status");
    taskItem.appendChild(taskStatus);

    let taskItemName = document.createElement("span");
    taskItemName.innerHTML = "Fruit"
    taskItemName.classList.add("task-item-name");
    taskItem.appendChild(taskItemName);*/


    /* PENDING */

    // let deleteTask = document.createElement("button");
    // deleteTask.classList.add("delete-task");
    // taskItem.appendChild(deleteTask)
    /* ***** */

    /* TEST FOR LATER */
    let taskInfoContainer = document.createElement("div");
    taskInfoContainer.classList.add("task-info");
    taskInfoContainer.classList.add("task-info-hidden");
    tasksGrid.appendChild(taskInfoContainer);

    /*let taskInfoDate = document.createElement("p");
    taskInfoDate.classList.add("date-creation");
    taskInfoContainer.appendChild(taskInfoDate);

    let taskInfoTitle = document.createElement("h3");
    taskInfoTitle.innerHTML = "Ir a pasear al perro";
    taskInfoTitle.classList.add("task-info-title");
    taskInfoContainer.appendChild(taskInfoTitle);

    let taskInfoDescr = document.createElement("textarea");
    taskInfoDescr.classList.add("task-description");
    taskInfoContainer.appendChild(taskInfoDescr);

    let taskInfoDateFinish = document.createElement("input");
    taskInfoDateFinish.type = "date";
    taskInfoDateFinish.classList.add("date-finish");
    taskInfoContainer.appendChild(taskInfoDateFinish);

    let taskInfoActionContainer = document.createElement("div");
    taskInfoActionContainer.classList.add("task-info-actions");
    taskInfoContainer.appendChild(taskInfoActionContainer);

    let taskInfoSave = document.createElement("button");
    taskInfoSave.classList.add("task-info-save");
    taskInfoSave.classList.add("button");
    taskInfoSave.innerHTML = "Save";
    taskInfoActionContainer.appendChild(taskInfoSave);*/

    /*let taskInfoCancel = document.createElement("button");
    taskInfoCancel.classList.add("task-info-cancel");
    taskInfoCancel.classList.add("button");
    taskInfoCancel.innerHTML = "Cancel";
    taskInfoActionContainer.appendChild(taskInfoCancel);*/

/* ***** */
};

export default renderDOM;