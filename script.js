/* Strict mode */
'use strict';
/* Variables */
const button = document.querySelectorAll('.button');
const modalWindow = document.querySelector('.modal_window');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
/* Open window function */
const openWindow = function() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
/* Close window function */
const closeWindow = function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

/* Show modal window */
for(let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function() {
    openWindow();
  })
}
/* Hide modal window with escape key*/
document.addEventListener('keydown', function(e) {
  if(!modalWindow.classList.contains('hidden') && e.key === 'Escape') {
    closeWindow();
  }
})
/* Hide modal window clicking on the x icon */
close.addEventListener('click', function() {
  closeWindow();
})
/* Hide modal window clicking on outside of the window */
overlay.addEventListener('click', function() {
  closeWindow();
})

