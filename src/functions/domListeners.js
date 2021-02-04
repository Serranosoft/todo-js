import { addProject, deleteProject } from './projectDAO'
import { getLocalStorage, toggleModal, renderStorage, checkInput, showErrorInput, activeProject } from '../helpers/helpers'
import { addTask } from './taskDAO';

const domListeners = (() => {

    let projectsArray = [];
    const storage = window.localStorage;
    projectsArray = getLocalStorage(storage, projectsArray);

    renderStorage(projectsArray);
    
    const openProjectModal = document.getElementById("open-project-modal");
    const closeProjectModal = document.getElementById("close-project-modal");
    const overlay = document.getElementById("overlay");
    const projectModal = document.getElementById("project-modal");
    const addProjectBtn = document.getElementById("add-project");
    const projectTitleInput = document.getElementById("project-title-input");
    const addTaskBtn = document.querySelector(".add-task")
    const taskTitleInput = document.querySelector(".task-input");
    const deleteProjectButton = document.querySelector(".delete-project");

    openProjectModal.addEventListener("click", () => {
        toggleModal(overlay, projectModal);
    })

    closeProjectModal.addEventListener("click", () => {
        toggleModal(overlay, projectModal);
    })

    addProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(checkInput(projectTitleInput.value)) {
            addProject(projectTitleInput.value, storage);
        } else {
            showErrorInput();
        }
    })

    addTaskBtn.addEventListener("click", () => {
        if(checkInput(taskTitleInput.value)) {
            addTask(taskTitleInput.value);
        } else {
            showErrorInput();
        }
    })

    deleteProjectButton.addEventListener("click", () => {
        deleteProject(activeProject, storage);
    })

});


export { domListeners }


