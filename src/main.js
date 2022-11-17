import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faPlus, faMinus, faPercent, faCheck, faCoins, faEuroSign, faCaretDown);

import "./assets/main.css";

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
