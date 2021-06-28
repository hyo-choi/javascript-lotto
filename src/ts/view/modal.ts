const $showResultButton = document.querySelector('.open-result-modal-button')!;
const $modalClose = document.querySelector('.modal-close')!;
const $modal = document.querySelector('.modal')!;
const $lottoNumbersToggleButton = document.querySelector('.lotto-numbers-toggle-button')!;

const onModalShow = () => {
  $modal.classList.add('open');
};

const onModalClose = () => {
  $modal.classList.remove('open');
};

const setModal = () => {
  $showResultButton.addEventListener('click', onModalShow);
  $modalClose.addEventListener('click', onModalClose);
};

export default setModal;
