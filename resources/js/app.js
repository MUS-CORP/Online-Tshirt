import '../css/app.css'
import { createApp, h } from 'vue'
import { Link } from "@inertiajs/vue3";
import { createInertiaApp } from '@inertiajs/vue3'
import "sweetalert2/dist/sweetalert2.min.css";
import AOS from 'aos'
import VueSweetalert2 from 'vue-sweetalert2';
import axios from "axios";
// import Dashboard from "../Js/Pages/Admin/Dashboard.vue";
import 'aos/dist/aos.css' 
createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`)
    return page
  },
  setup({ el, App, props, plugin }) {
    AOS.init()
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(VueSweetalert2)
      
      .component('inertia-link', Link)
      // .component('Dashboard', Dashboard)
      .mount(el)
  },
})