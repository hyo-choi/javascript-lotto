/* eslint-disable import/no-unresolved */
/* eslint-disable no-new */
import setEventListeners from './view/setEventListeners.js';
import Lotto from './model/lotto.js';

const init = () => {
  const lotto = new Lotto();
  setEventListeners(lotto);
};

init();
