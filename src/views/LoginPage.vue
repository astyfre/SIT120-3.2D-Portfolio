<template>
    <div>
        <div v-if="isLoggedIn">
      <h2>Hello {{ username }}</h2>
      <button @click="logout">Logout</button>
      <li><router-link to="/blogs" class="admin-link">View Blogs</router-link></li>
      <BlogAdd></BlogAdd>
    </div>
    <div v-else>
      <div class="tabs">
        <button @click="activeTab = 'login'" :class="{ active: activeTab === 'login' }">Login</button>
        <button @click="activeTab = 'register'" :class="{ active: activeTab === 'register' }">Register</button>
      </div>
      <div v-if="activeTab === 'login'">
        <h2>Admin Login</h2>
        <form @submit.prevent="login">
          <input v-model="username" type="text" placeholder="Username" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
      <div v-else>
        <h2>Register</h2>
        <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input v-model="confirmPassword" type="password" id="confirmPassword" required />
      </div>
      <button type="submit">Register</button>
    </form>
    
      </div>
    </div>
    </div>
  </template>
  
  <script>
   import '@/styles.css'; // Add this line to import the CSS file
 import BlogAdd from '@/components/BlogAdd.vue';
  
  export default {
    data() {
        return {
            components: {
              BlogAdd,
            },
            username: '',
            password: '',
            confirmPassword: '',
            activeTab: 'login',
            isLoggedIn: false,
        };
    },
    methods: {
        login() {
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            let loginSuccessful = false; // Add a flag to track successful login
            for (const user of registeredUsers) {
                if (this.username === user.username && this.password === user.password) {
                    loginSuccessful = true; // Set the flag to true
                    alert('Login successful!');
                    this.isLoggedIn = true;

                    // Store isLoggedIn status in localStorage
                    localStorage.setItem('isLoggedIn', 'true');
                    break; // Exit the loop
                }
            }
            if (!loginSuccessful) {
                alert('Invalid credentials'); // Only show if login was not successful
            }
        },
        register() {
            if (this.password !== this.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            const newUser = {
                username: this.username,
                password: this.password,
            };
            // Load existing registered users from JSON file
            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            // Add the new user
            registeredUsers.push(newUser);
            // Save updated list of registered users back to JSON file
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            alert(`Registered with username: ${this.username}`);
        },
        logout() {
            this.isLoggedIn = false; // Set the user as logged out
            localStorage.removeItem('isLoggedIn');
        },
        
    },
    created() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
        this.isLoggedIn = true;
        }
      },
    components: { BlogAdd }
};
  </script>
  
  <style scoped>
  
  .tabs button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .tabs button.active {
    color: white;
    background-color: #1497be;
  }
  
  .tabs button:focus {
    outline: none;
  }
  </style>
  