import { isValidEmail, isValidName, isValidText } from './validationRules.js';

function formValidator(selector) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    submitBtnDOM.addEventListener('click', () => {
        let errorCount = 0;
        console.clear();

        for (let input of allElements) {
            const validationRule = input.dataset.validation;
            const text = input.value;

            const nameError = isValidName(text);
            const emailError = isValidEmail(text);
            const textError = isValidText(text);

            if (validationRule === 'name' && nameError !== true) {
                console.log(nameError);
                errorCount++;
            }
            if (validationRule === 'email' && emailError !== true) {
                console.log(emailError);
                errorCount++;
            }
            if (validationRule === 'text' && textError !== true) {
                console.log(textError);
                errorCount++;
            }
        }

        if (errorCount === 0) {
            console.log('Siumciam info...');
        }
    })
}

export { formValidator }