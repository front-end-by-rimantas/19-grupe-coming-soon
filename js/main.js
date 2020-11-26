import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/clock/renderClock.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');