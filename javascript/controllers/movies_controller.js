import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'list']

  static values = {
    baseUrl: String
  }

  connect() {
    console.log(this.element);
  }

  search(e) {
    e.preventDefault();
    console.log('O form foi submetido');
    const inputValue = this.inputTarget.value;

    this.listTarget.innerHTML = '';

    const url = `${this.baseUrlValue}?s=${inputValue}&apikey=adf1f2d7`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        data.Search.forEach((movie) => {
          console.log(movie.Title);
          const movieTag = `<li class="col"><img src=${movie.Poster} class="img-fluid">${movie.Title}</li>`;

          this.listTarget.insertAdjacentHTML('beforeend', movieTag);
        })

      });
  }
}
