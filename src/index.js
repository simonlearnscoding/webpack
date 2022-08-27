import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    //lodash now imported
    element.textContent = myName('Simon')
    return element
}

document.body.appendChild(component());