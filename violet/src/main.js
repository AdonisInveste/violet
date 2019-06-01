import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import Illustration from './components/Illustration.vue'
import Contact from './components/Contact.vue'
import CustomerForm from './components/CustomerForm.vue'
import ThankYou from './components/ThankYou.vue'



const router = new VueRouter({
  mode: 'history',
  base:__dirname,
  routes: [
    {path: '/',  name:'illustration', component: Illustration },
    {path: '/contact', name:'contact',  component: Contact },
    {path: '/customer-form', name:'customerForm', component: CustomerForm },
    {path: '/thank-you', name:'thankYou', component: ThankYou }
  ]
});


new Vue({
  router,
  template: `
<div>
                  <b-navbar toggleable="lg" type="light" variant="faded">
                          <b-navbar-brand :to="{name:'illustration'}">
                          violet
                          </b-navbar-brand>
                                <b-navbar-toggle target="navigation-collapse"></b-navbar-toggle>

                                      <b-collapse id="navigation-collapse" is-nav>


                                        <!-- right aligned navigation items -->
                                                    <b-navbar-nav class="ml-auto">
                                                              <b-nav-item  :to= " {name: 'customerForm'} "> 
                               
                                                              Contact 
                                  
                                                               </b-nav-item>
                                                              <b-nav-item href="#" >Our mission</b-nav-item>

                                                    </b-navbar-nav>
                                      </b-collapse>
                  </b-navbar>
      <router-view class="view"></router-view>
    </div>
    `
  // el: '#app',
  // render: h => h(App)
}).$mount('#app');


// <div class="collapse navbar-collapse" id="navbarNav">
        //   <ul class="navbar-nav">
        //     <li class="nav-item"><router-link to="/" class="nav-link">Illustration</router-link></li>
        //     <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        //     <li class="nav-item"><router-link to="/contact" class="nav-link">About</router-link></li>
        //   </ul>
        // </div>