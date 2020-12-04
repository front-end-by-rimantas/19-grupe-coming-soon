import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/clock/renderClock.js';

import { renderAllProgressBars } from './components/progress-bar/renderAllProgressBars.js';
import { progressBarData } from './data/progressBarData.js';

import { formValidator } from './components/form-validator/formValidator.js';

import { Toast } from './components/toast/Toast.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

const toast = new Toast();
toast.render();
// toast.show('error', 'Cia yra klaida!!!');
// toast.show('success', 'Buvo gera diena!!! ;)');

formValidator('.hero .form', toast);
formValidator('main .form', toast);