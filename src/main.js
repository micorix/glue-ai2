// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueApexCharts from 'vue-apexcharts'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  if(isClient){
    const VueConfetti = require('vue-confetti').default
    
    Vue.use(VueConfetti)
  }
  Vue.component('apexchart', VueApexCharts)
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Spartan:wght@800&display=swap" rel="stylesheet'
  })
}
