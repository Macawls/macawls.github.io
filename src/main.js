import { createApp } from 'vue'
import App from './App.vue'
import { TroisJSVuePlugin } from 'troisjs';
import 'devicon/devicon.min.css'
import 'animate.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCirclePlay, faCirclePause, faBackwardStep, faForwardStep, faXmark)

createApp(App)
.use(TroisJSVuePlugin)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')