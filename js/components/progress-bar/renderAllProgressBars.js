import { isValidProgressBarsList } from './isValidProgressBarsList.js';
import { isValidSingleProgressBar } from './isValidSingleProgressBar.js';
import { renderProgressBar } from './renderProgressBar.js';

/**
 * 
 * @param {Object[]} data
 * @param {string} data[].selector CSS like selectorius, kaip rasti vieta, kur sugeneruoti turini
 * @param {string} data[].title Progress bar pavadinimas
 * @param {number} data[].value Progress bar reiksme procentais
 * @returns {boolean} Funkcijai tinkamai suveikus grazinas `true`, priesingu atveju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarsList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    }

    const allProgressBars = document.querySelectorAll('.progress-bar');

    addEventListener('scroll', () => {
        const screenBottom = innerHeight + scrollY;

        for (let bar of allProgressBars) {
            const barBottom = bar.offsetHeight + bar.offsetTop;
            if (screenBottom >= barBottom) {
                bar.classList.add('animate');
            }
        }
    })

    return true;
}

export { renderAllProgressBars }