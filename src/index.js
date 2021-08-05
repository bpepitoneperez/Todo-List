import {createSidebar, createTasksBar} from './DOMdisplay';
import './style.css';
import closeBlack from './close-black.png';
import deleteBlack from './delete-black.png';
import deleteWhite from './delete-white.png';
import doneBlack from './done-black.png';
import doneWhite from './done-white.png';
import editBlack from './edit-black.png';
import editWhite from './edit-white.png';

createSidebar();
createTasksBar();

export {closeBlack, deleteBlack, deleteWhite, doneBlack, doneWhite, editBlack, editWhite}