let activeProject;
let storageAux;

import { format } from 'date-fns'
import differenceInDays from 'date-fns/differenceInDays'
import parseISO from 'date-fns/parseISO'

function toggleModal(overlay, projectModal) {
    if (overlay.className === "active" && projectModal.className === "modal active") {
        document.getElementById("project-form").reset();
        overlay.classList.remove("active");
        projectModal.classList.remove("active");
    } else {
        overlay.classList.add("active");
        projectModal.classList.add("active");
    }
}

function getLocalStorage(storage, projectsArray) {

    let storageLength = Object.keys(storage);
    let i = storageLength.length;

    while (i--) {
        if (storage.getItem(storageLength[i]) != null) {
            projectsArray.push(JSON.parse(storage.getItem(storageLength[i])));
        }
    }
    storageAux = storage;
    return projectsArray;
}

function createProject(project) {
    let projectItem = document.createElement("h3");
    projectItem.innerHTML = project.title;
    projectItem.classList.add("task-list");
    document.getElementById("lists").appendChild(projectItem);

    projectItem.addEventListener("click", () => {
        if (activeProject !== project) {
            activeProject = project;

            paintProjectLabel(projectItem);
            renderTasks(project);
            enableAddTaskContainer();
            changeProjectTitle(project);
            showItem(".delete-project"); // display delete project button
            toggleTaskInfo();
        }
    })

    if (document.getElementById("overlay").className === "active") {
        toggleModal(document.getElementById("overlay"), document.getElementById("project-modal"));
    }

}

function paintProjectLabel(projectItem) {

    let arr = [...document.getElementsByClassName("task-list active")];
    arr.forEach(el => { el.classList.remove("active") });

    projectItem.classList.add("active");
}

function createTask(task) {
    activeProject.tasks.push(task);
    updateProject(activeProject);
    renderTasks(activeProject)
}

function renderTasks(project) {
    let task = document.querySelector(".task");
    clearScreen(task);
    for (let i = 0; i < project.tasks.length; i++) {
        // render task item container
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        document.querySelector(".task").appendChild(taskItem);

        // render task status
        let taskStatus = document.createElement("input");
        taskStatus.type = "checkbox";
        taskStatus.classList.add("task-status");
        taskItem.appendChild(taskStatus);
        if (project.tasks[i].status == false) {
            taskStatus.checked = false;
        } else {
            taskStatus.checked = true;
            taskItem.classList.add("task-item-done");
        }

        // render task name
        let taskItemName = document.createElement("span");
        taskItemName.innerHTML = project.tasks[i].title;
        taskItemName.classList.add("task-item-name");
        taskItem.appendChild(taskItemName);

        // render task delete button
        let deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task");
        deleteTask.innerHTML = "X"
        taskItem.appendChild(deleteTask);


        // task listener's
        taskItem.addEventListener("click", () => {
            showTaskInfo(project, project.tasks[i]);

        })

        taskStatus.addEventListener("click", () => {
            changeTaskStatus(project.tasks[i], taskItem);
            updateProject(project);

        })

        deleteTask.addEventListener("click", (e) => {
            project.tasks.splice(project.tasks.indexOf(project.tasks[i]), 1);
            updateProject(project);
            renderTasks(project);
        })
    }

}

function updateProject(project) {
    storageAux.setItem(project.id, JSON.stringify(project));
}

function renderStorage(projectsArray) {
    projectsArray.forEach(element => {
        createProject(element);
    })
}

function clearScreen(parent) {
    if (parent.firstChild != null) {
        while (parent.firstChild.nextSibling) {
            parent.removeChild(parent.firstChild.nextSibling);
        }
        if (parent.firstChild.className === "date-creation") {
            parent.removeChild(parent.firstChild);
        }
    }
}

function enableAddTaskContainer() {
    let addTaskContainer = document.querySelector(".add-task-container");
    if (addTaskContainer.classList.contains("add-task-container-hidden")) {
        addTaskContainer.classList.remove("add-task-container-hidden");
    }
}

function changeProjectTitle(project) {
    let projectTitle = document.getElementById("project-title")
    projectTitle.innerHTML = project.title
}

function showItem(itemClass) {
    let item = document.querySelector(itemClass);
    item.classList.remove("hidden");
}

function checkInput(input) {

    if (input.length > 1 && input.length < 30) {
        return true;
    }
    return false;

}

function showErrorInput() {
    alert("Introduce a valid task")
}

function showTaskInfo(project, task) {
    // aqui hay que hacer un clear screen para desbugear
    let taskInfoContainer = document.querySelector(".task-info");

    clearScreen(taskInfoContainer);
    if (task != undefined) {
        if (taskInfoContainer.classList.contains("task-info-hidden")) {
            taskInfoContainer.classList.remove("task-info-hidden");
        }

        // TASK INFO DATE CREATION DOM ELEMENT
        let taskInfoDateCreation = document.createElement("p");
        taskInfoDateCreation.classList.add("date-creation");
        taskInfoDateCreation.innerHTML = "created "+task.date_creation;
        taskInfoContainer.appendChild(taskInfoDateCreation);


        // TASK INFO TITLE DOM ELEMENT
        let taskInfoTitle = document.createElement("h3");
        taskInfoTitle.classList.add("task-info-title");
        taskInfoTitle.innerHTML = task.title;
        taskInfoContainer.appendChild(taskInfoTitle);


        // TASK INFO DESCRIPTION DOM ELEMENT
        let taskInfoDescr = document.createElement("textarea");
        taskInfoDescr.classList.add("task-description");
        taskInfoDescr.value = task.description;
        taskInfoContainer.appendChild(taskInfoDescr);

        // TASK INFO DATE FINISH LABEL DOM ELEMENT
        let taskInfoDateFinishLabel = document.createElement("p");
        taskInfoDateFinishLabel.classList.add("date-finish-label");
        taskInfoContainer.appendChild(taskInfoDateFinishLabel);
        taskInfoDateFinishLabel.innerHTML = daysLeft(task.date_creation, task.date_finish);
        

        // TASK INFO DATE FINISH DOM ELEMENT
        let taskInfoDateFinish = document.createElement("input");
        taskInfoDateFinish.type = "date";
        taskInfoDateFinish.classList.add("date-finish");
        if (task.date_finish.length > 0) {
            taskInfoDateFinish.value = format(new Date(task.date_finish), 'yyyy-MM-dd');
        } else {
            taskInfoDateFinish.value = "";
        }
        taskInfoContainer.appendChild(taskInfoDateFinish);


        // TASK INFO ACTIONS CONTAINER DOM ELEMENT
        let taskInfoActionContainer = document.createElement("div");
        taskInfoActionContainer.classList.add("task-info-actions");
        taskInfoContainer.appendChild(taskInfoActionContainer);

        // TASK INFO SAVE BUTTON DOM ELEMENT
        let taskInfoSave = document.createElement("button");
        taskInfoSave.classList.add("task-info-save");
        taskInfoSave.classList.add("button");
        taskInfoSave.innerHTML = "Save";
        taskInfoActionContainer.appendChild(taskInfoSave);

        taskInfoSave.addEventListener("click", (e) => {
            taskInfoDateFinishLabel.innerHTML = daysLeft(task.date_creation, taskInfoDateFinish.value);
            saveTaskInfo(project, task, taskInfoDescr.value, taskInfoDateFinish.value);

        })
    }
}

function daysLeft(date1, date2) {
    if(date1 != "" && date2 != "") {
        let label = document.querySelector(".date-finish-label");
        let result = differenceInDays(parseISO(date2), parseISO(format(new Date(date1), "yyyy-dd-MM"))) +" days left";
        if(parseInt(result) < 3) {
            label.setAttribute("style", "color: red");
        } else {
            label.setAttribute("style", "color: green");
        }
        return result;
    } else {
        return "choose a finish date";
    }
}

function saveTaskInfo(project, task, description, date_finish) {

    task.description = description;
    task.date_finish = date_finish;
    updateProject(project);

}

function toggleTaskInfo() {
    let taskInfoContainer = document.querySelector(".task-info");
    if (taskInfoContainer.classList.contains("task-info-hidden")) {

    } else {
        taskInfoContainer.classList.add("task-info-hidden");
    }
}

function changeTaskStatus(task, taskItem) {
    if (task.status == false) {
        task.status = true;
        taskItem.classList.add("task-item-done")

    } else {
        task.status = false;
        taskItem.classList.remove("task-item-done");
    }
}

export {
    toggleModal,
    createProject,
    createTask,
    getLocalStorage,
    renderStorage,
    checkInput,
    showErrorInput,
    activeProject
}