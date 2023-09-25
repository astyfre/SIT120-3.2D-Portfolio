<template>
<header>
    <img src="@/assets/AnabolicLifestyle-logo.png" class="logo">
    <h1> {{siteTitle}}</h1>
  </header>
  <div id="nav">
    <nav>
    <ul>
        <li><router-link to="/" class="nav-link">ResumePage</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
        <li><router-link to="/login" class="nav-link">Login</router-link></li>
        <li><router-link to="/blogs" class="nav-link">Blogs</router-link></li>
    </ul>
    </nav>
   
  </div>

</template>

<script>
import '@/styles.css';

export default {
  name: 'App',
  created() {
    document.title = 'Astons Portfolio Website';
    
  },
  data () {
    return {
      siteTitle: "Astons Portfolio"
    }
  } 
}
</script>

<style>
#nav{
    background-color: rgb(3, 29, 172);
    color: white;
    padding: 0.5rem;
    text-align: center;
}
</style>