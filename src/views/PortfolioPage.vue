<template>
    <div id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <img v-if="project.image" v-bind:src="require(`@/assets/${project.image}`)" alt="Project Image" class="project-image">
          <!-- Check if there's a videoLink and display video if available -->
        <!-- <div v-if="project.videoLink">
          <iframe v-html="embedVideo(project.videoLink)" frameborder="1" allowfullscreen></iframe>
        </div> -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import '@/styles.css'; // Add this line to import the CSS file
  import projectsData from '../projects.json'

  export default {
    name: 'PortfolioPage',
    data() {
      return {
        projects: projectsData
      };
    },
    methods: {
    embedVideo(link) {
      const videoId = link.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  };
  </script>
  
  <style scoped>
  /* Add specific styles for the Portfolio component here */
  </style>
  