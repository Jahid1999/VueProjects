import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Search from './components/Search.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const Myrouter= new VueRouter({

  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/contact',
      component: Contact
    },
    {
      path:'/about',
      component: About
    },

    {
      path:'/search',
      component: Search
    },
  ],
  mode:'history'
})

new Vue({
  router : Myrouter,
  render: h => h(App),
}).$mount('#app')
