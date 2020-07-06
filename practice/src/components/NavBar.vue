<template>
  <nav>
    <div class="menu-item"> <router-link to="/"> Home</router-link> </div>
    <div class="menu-item"><router-link to="/about"> About</router-link></div>
    <Dropdown title="DropdownMenu" :items="services" />
    <div class="menu-item"><router-link to="/contact"> Contact</router-link></div>
    <div class="menu-item"><router-link to="/search"> Search</router-link></div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link:'#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  
}
nav .menu-item {
  color: black;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>