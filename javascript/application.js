import { Application, Controller } from '@hotwired/stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)


// DATA ATTRIBUTES

// Data Controller - conectar parte do HTML ao controller de stimulus;
// Data Action - escutar eventos no lugar do enventListener;
// Data Target - selecionar elementos do HTML;
// Data Value - passar valores do HTML pro controller de JS;


















// RECAP

// const button = document.getElementById('click-me');
// console.log(button);
// const button = document.querySelector('#click-me');

// button.addEventListener('click', () => {
//   console.log('o botão foi clicado');
//   button.classList.remove('btn-primary');
//   button.classList.add('btn-danger');
//   button.innerText = 'Bingo!!';
//   button.setAttribute('disabled', '');

// })
