import Vue from 'vue'

import 'quasar/dist/quasar.css'
import 'quasar/dist/quasar.ie.polyfills'
import lang from 'quasar/lang/zh-hant.js'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: [
    'QInput',
    'QSlider',
    'QBadge',
    'QImg',
    'QCard',
      'QCardSection',
      'QCardActions',
      'QBtn'
  ] /* not needed if importStrategy is not 'manual' */
  ,
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  },
  lang: lang
 })