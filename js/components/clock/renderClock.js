// Target date is New Year evening. 
// 2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris rodo kiek liko laiko iki artimiausiu Naujuju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys
 * @returns {boolean} Jei funkcija sekmingai ivykdo savo funkcionaluma, tai grazina `true`, priesingu atveju - `false`
 */
function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas');
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }

    // einamieji metai  (2020)
    const date = new Date();
    const currentYear = date.getFullYear();

    // naujakas = einamieji metai + 1 (2020 + 1 = 2021)
    const newYear = currentYear + 1;

    // susikonstruojame pilna data: ${naujakas}-01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();

    // einamasis laikas yyyy-mm-dd hh:mm:ss
    const currentTimeMiliseconds = date.getTime();

    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    let secondsLeft = timeLeft / 1000;

    // is skirtumo apskaiciuojame likusias dienas, valandas, minutes ir sekundes

    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft -= days * 60 * 60 * 24;

    const hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft -= hours * 60 * 60;

    const minutes = Math.floor(secondsLeft / 60);

    const seconds = Math.floor(secondsLeft - minutes * 60);

    const HTML = `<div class="time-box">
                    <div class="time">${days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    return true;
}

export { renderClock }