<template>
  <div id="app">
   <NavHeader></NavHeader>
    <router-view />
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import NavHeader from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
    name: 'App',
    components: { 
      NavHeader,
      FooterComp,
    },
  }


</script>


<style>
h1 {
  flex-grow: 1;
  text-align: center;
  
}

#app{
    height: auto;
    min-height: 100vh;
    background-color: #dff8ff;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

footer {
    background-color: #000047;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-bottom: 0px;

}
</style>



<head>
  <title></title>
</head>