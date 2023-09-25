<template>
    <div>
      <h2 >Add New Blog</h2>
      <form @submit.prevent="submitBlog">
        <input v-model="blog.title" type="text" placeholder="Title" required />
        <textarea v-model="blog.body" placeholder="Body" required></textarea>
        <button type="submit">{{ 'Create Blog' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import '@/styles.css'; // Add this line to import the CSS file
  export default {
    data() {
      return {
        blog: {
          title: '',
          body: ''
        }
      };
    },
    methods: {
      submitBlog() {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      const newBlog = {
        id: Date.now(), // Assign a unique ID (using timestamp)
        title: this.blog.title,
        body: this.blog.body
      };
      blogs.push(newBlog);
      localStorage.setItem('blogs', JSON.stringify(blogs));
      this.$router.push('/blogs'); // Redirect to blog list after submitting
      console.log("added blog")
    }
    }
  };
  </script>
  