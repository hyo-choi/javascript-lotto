/* eslint-disable import/no-unresolved */
import { MODAL } from '../constant/constants.js';
const openModal = () => {
    const $modal = document.querySelector(MODAL);
    $modal.classList.add('open');
};
const closeModal = () => {
    const $modal = document.querySelector(MODAL);
    $modal.classList.remove('open');
};
const showElement = (selector) => {
    var _a;
    (_a = document.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
};
const hideElement = (selector) => {
    var _a;
    (_a = document.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
};
const enableInput = (selector) => {
    const target = document.querySelector(selector);
    target.disabled = false;
};
const disableInput = (selector) => {
    const target = document.querySelector(selector);
    target.disabled = true;
};
const uncheckButton = (selector) => {
    const target = document.querySelector(selector);
    target.checked = false;
};
export { openModal, closeModal, showElement, hideElement, enableInput, disableInput, uncheckButton, };
