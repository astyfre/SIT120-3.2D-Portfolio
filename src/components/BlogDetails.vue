<template>
    <div class="post">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.body }}</p>
    </div>
  </template>
  
  <script>
  import '@/styles.css';
  import blogsData from '@/assets/blogs.json';
  
  export default {
    data() {
      return {
        blog: {} // Initialize with your blog data
      };
    },
    created() {
      const id = this.$route.params.id;
      const selectedBlog = blogsData.find(blog => blog.id == id); // Use == instead of ===
      if (selectedBlog) {
        this.blog = selectedBlog;
      }
    }
  };
  </script>

<style>
.post{
    padding-left: 20%;
    padding-right: 20%;
}
p{
    font-size: 20px;
}

</style>
  