import { format } from 'date-fns'

export default class Task {
    constructor(title) {
        this.id = getID();
        this.title = title;
        this.status = false;
        this.description = "";
        this.date_creation = format(new Date(), 'dd/MM/yyyy');
        this.date_finish = "";
    }
    
}

function getID() {
    return Math.floor(Math.random() * (999 - 1) + 1);
}