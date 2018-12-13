import AbstractView from './abstract-view';

export default class ModalErrorView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
    <section class="modal">
    <div class="modal__inner">
      <h2 class="modal__title">Произошла ошибка!</h2>
      <p class="modal__text modal__text--error">${this.error ? this.error : ` Пожалуйста, перезагрузите страницу.`}
        </div>
      </section>
`;
  }
}
