const setInputValue = (selector, value) => {
    const target = document.querySelector(selector);
    if (!target) {
        return;
    }
    target.value = String(value);
};
const getInputValue = (selector) => {
    const target = document.querySelector(selector);
    if (!target) {
        return '';
    }
    return target.value;
};
const setInputMinMax = (selector, min, max) => {
    const target = document.querySelector(selector);
    if (!target) {
        return;
    }
    target.min = String(min);
    target.max = String(max);
};
const getInputMax = (selector) => {
    const target = document.querySelector(selector);
    if (!target) {
        return -1;
    }
    return Number(target.max);
};
export { setInputValue, getInputValue, setInputMinMax, getInputMax, };
