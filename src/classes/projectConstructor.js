export default class Project {
    constructor(title) {
        this.id = getID();
        this.title = title;
        this.tasks = [];
    }
    
}

function getID() {
    return Math.floor(Math.random() * (999 - 1) + 1);
}