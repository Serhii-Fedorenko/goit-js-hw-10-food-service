import menu from './menu.json';
import menuItemsTpl from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markUp = menuItemsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', markUp);