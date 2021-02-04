import renderDOM from './functions/renderDOM'
import {domListeners} from './functions/domListeners'
import {addInitialProjects} from './functions/projectDAO'

const init = (() =>  {
    renderDOM();
    domListeners();
    //addInitialProjects("Shopping List");
    //addInitialProjects("Routine");
})();