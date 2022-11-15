import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faSquarePlus, faSquareMinus, faPercent, faSquareCheck, faCoins);

import "./assets/main.css";

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
