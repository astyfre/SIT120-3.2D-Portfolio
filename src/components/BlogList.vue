<template>
    <div>
      <h2>Blog List</h2>
      <ul>
        <li v-for="blog in blogs" :key="blog.id" v-show="blog.display">
        <router-link :to="'/blogDetail/' + blog.id" @click="navigateToBlogDetail(blog.id)">{{ blog.title }}</router-link>
        <button v-if="isLoggedIn" @click="navigateToBlogEdit(blog.id)">Edit</button>
        <button v-if="isLoggedIn" @click="deleteBlog(blog.id)">Delete</button>
      </li>
      </ul>
    </div>
  </template>
  
  <script>
  import '@/styles.css'; // Add this line to import the CSS file
  import blogsData from '@/assets/blogs.json'


  export default {
    data() {
      return {
        blogs: [],
      };
    },
    computed: {
      isLoggedIn() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        return isLoggedIn === 'true';
      }
    },
    created() {
    const blogsFromLocalStorage = JSON.parse(localStorage.getItem('blogs')) || [];
    const combinedBlogs = [...blogsFromLocalStorage, ...blogsData];
    this.blogs = combinedBlogs.map(blog => ({ ...blog, display: true }));
  },
    methods: {
      editBlog(id) {
      this.$router.push({ name: 'BlogEditor', params: { id } });
      },
      deleteBlog(id) {
         
      const updatedBlogs = this.blogs.map(blog => {
        if (blog.id === id) {
          return { ...blog, display: false };
        }
        return blog;
      });
      this.blogs = updatedBlogs;
      },
      navigateToBlogDetail(id) {
        console.log("Clicked blog with id:", id); 
        this.$router.push({ name: 'BlogDetail', params: { id } });
      },
      navigateToBlogEdit(id) {
        console.log("Clicked edit with id:", id); 
          this.$router.push({ name: 'BlogEditor', params: { id } });
      }
      
    }
  };
  </script>
  