// script.js

const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default to allow drop
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    dropzone.appendChild(draggableElement); // Append draggable element to dropzone
});
