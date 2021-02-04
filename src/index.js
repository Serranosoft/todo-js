import renderDOM from './functions/renderDOM'
import {domListeners} from './functions/domListeners'

const init = (() =>  {
    renderDOM();
    domListeners();
})();