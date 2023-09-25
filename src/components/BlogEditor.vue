<template>
  <div>
    <h2>Edit Blog</h2>
    <form @submit.prevent="submitBlog">
      <input v-model="blog.title" type="text" placeholder="Title" class="title" required />
      <br>
      <textarea ref='textarea' v-model="blog.body" placeholder="Body" @input="adjustTextarea" required></textarea>
      <br>
      <button type="submit">{{ 'Save Changes' }}</button>
    </form>
  </div>
</template>

<script>
import '@/styles.css'; // Add this line to import the CSS file
import blogsData from '@/assets/blogs.json';

export default {
  data() {
    return {
      blog: {}
    };
  },
  created() {
    const id = this.$route.params.id;
      const selectedBlog = blogsData.find(blog => blog.id == id); // Use == instead of ===
      if (selectedBlog) {
        this.blog = selectedBlog;
      }
  },
  methods: {
    submitBlog() {
      // Serialize the data to JSON
      const serializedData = JSON.stringify(this.blog);

      // Use localStorage to store the serialized data
      localStorage.setItem('blogData', serializedData);

      alert('Blog data saved successfully!');
    },
    adjustTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    },
  }
};
</script>

<style scoped> 
textarea {
  width: 80%;
  min-height: 100px; /* Set a minimum height */
  height: auto;
  resize: none; /* Disable manual resizing */
}
input[type="text"] {
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: center;
}


</style>
