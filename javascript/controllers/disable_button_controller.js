import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['link', 'button']

  connect() {
  }

  disable(e) {
    this.buttonTarget.classList.remove('btn-primary');
    this.buttonTarget.classList.add('btn-danger');
    this.buttonTarget.innerText = 'Bingo!!';
    this.buttonTarget.setAttribute('disabled', '');

    this.linkTarget.classList.remove('d-none');
  }

  reset() {
    console.log('o link foi clicado');
    this.buttonTarget.classList.add('btn-primary');
    this.buttonTarget.classList.remove('btn-danger');
    this.buttonTarget.innerText = 'Click me!';
    this.buttonTarget.removeAttribute('disabled');

    this.linkTarget.classList.add('d-none');
  }
}
