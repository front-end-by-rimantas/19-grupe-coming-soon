import { validation } from './validationRules.js';

/**
 * Formos validavima atliekanti funkcija, kuri automatiskai atpazista kokiems ivesties laukams kokias reikia taikyti valydacijos taisykles ir pagal tai atvaizduoja atitinkamus pranesimus
 * 
 * @param {string} selector CSS like selector
 * @param {Object} toastObject Objektas i kuri reikia kreiptis, norint atvaizduoti pranesimus: tiek sekmes, tiek klaidos.
 * @returns {boolean} Funkcijai sekmingai suveikus grazinamas `true`, priesingu atveju `false`;
 */
function formValidator(selector, toastObject) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    if (!submitBtnDOM) {
        toastObject.show('error', 'ERROR: formoje nerasta input:submit mygtukas.');
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    if (allElements.length === 0) {
        toastObject.show('error', 'ERROR: formoje nerasta nei vieno input ar textarea elementu.');
        return false;
    }

    submitBtnDOM.addEventListener('click', event => {
        event.preventDefault();
        let errorCount = 0;

        for (let input of allElements) {
            const validationRule = input.dataset.validation;
            const text = input.value;

            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                toastObject.show('error', error);
                errorCount++;
                break;  // padaro, jog klaidos pranesima mestu ties pirma sutikta klaida
            }
        }

        if (errorCount === 0) {
            toastObject.show('success', 'Siumciam info...');
        }
    })

    return true;
}

export { formValidator }