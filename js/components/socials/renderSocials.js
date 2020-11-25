import { inputValidation } from "./inputValidation.js";


function renderSocials(data) {
    // input validation
    if (!inputValidation(data)) {
        return false;
    }

    // logic
    const socialsDOM = document.querySelector('footer > .row');
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string' ||
            item.link === '') {
            continue;
        }
        if (typeof item.icon !== 'string' ||
            item.icon === '') {
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.');
        return false;
    }

    // return
    socialsDOM.innerHTML = HTML;
    return true;
}

export { renderSocials }