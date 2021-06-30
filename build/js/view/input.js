const setInputValue = (selector, value) => {
    const target = document.querySelector(selector);
    target.value = String(value);
};
const getInputValue = (selector) => {
    const target = document.querySelector(selector);
    return target.value;
};
const setInputMinMax = (selector, min, max) => {
    const target = document.querySelector(selector);
    target.min = String(min);
    target.max = String(max);
};
const getInputMax = (selector) => {
    const target = document.querySelector(selector);
    return Number(target.max);
};
export { setInputValue, getInputValue, setInputMinMax, getInputMax, };
