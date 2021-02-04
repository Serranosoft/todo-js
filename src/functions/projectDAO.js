import Project from '../classes/projectConstructor'
import {createProject, createInitialProjects, removeProject} from '../helpers/helpers';

const projectArray = [];

const addProject = ((title, storage) => {

    let p = new Project(title);

    createProject(p);
    storage.setItem(p.id, JSON.stringify(p));
});

const deleteProject = ((project, storage) => {
    storage.removeItem(project.id);
    location.reload();
})



/*const addInitialProjects = ((title) => {

    let p = new Project(title);

    createInitialProjects(p);

});*/


export { addProject, /*addInitialProjects*/ deleteProject }
