<template>
  <div id="contacts">
    <h2>Contact Me Directly</h2>
    <p>Email: {{contactEmail}}</p>
    <h3>Or Send Me an Enquiry Below</h3>
    <form id="ContactForm" @submit.prevent="validateForm">
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" v-model="formData.name" required>
      <span id='nameError' class="error">{{ formErrors.name }}</span>
      <br><br>

      <label for="email">Email: </label>
      <input type="email" id="email" name="email" v-model="formData.email" required>
      <span id='emailError' class="error">{{ formErrors.email }}</span>
      <br><br>

      <label for="message">Message: </label>
      <textarea id="message" name="message" v-model="formData.message" required></textarea>
      <span id='messageError' class="error">{{ formErrors.message }}</span>
      <br><br>

      <input type="submit" value="Submit">

    </form>
    <label for="subscribe">Subscribe to Newsletter:</label>
    <input type="checkbox" id="subscribe" v-model="subscribe">
  </div>
</template>

<script>
import '@/styles.css';

export default {
  name: 'ContactPage',
  data() {
    return {
      contactEmail: 'alamport@deakin.edu.au',
      subscribe: false,
      formData: {
        name: '',
        email: '',
        message: ''
      },
      formErrors: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    validateForm() {
      // Reset errors
      this.formErrors = {
        name: '',
        email: '',
        message: ''
      };

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.formData.email)) {
        this.formErrors.email = 'Invalid email address';
        return false;
      }


      alert('Thank you! I will get back to you ASAP.');

      this.formData = {
        name: '',
        email: '',
        message: ''
      };

      return true; // Return true to allow form submission
    }
  }
}
</script>

<style scoped>
/* Add specific styles for the Contact component here */
</style>
