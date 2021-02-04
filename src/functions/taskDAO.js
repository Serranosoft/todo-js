import Task from "../classes/taskConstructor";
import { createTask } from "../helpers/helpers";

const addTask = ((title) => {

    let t = new Task(title);
    createTask(t);

});


export {
    addTask
}