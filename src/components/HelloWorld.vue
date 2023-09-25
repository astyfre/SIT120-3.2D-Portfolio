<template>
    <head>
        <title>Portfolio Website with Vue</title>
        <link rel="stylesheet" type="text/css" href="styles.css"> <!-- call to external styles-->
    </head>


        <div id="app">
            <header>
                <h1> {{siteTitle}}</h1>
            </header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/portfolio">Portfolio</router-link>
                <router-link to="/contact">Contact</router-link>
            </nav>
            
            <main>
                <section id="home">
                    <h2>Welcome to my Portfolio</h2>
                    <p>Here, I showcase my projects and skills.</p>
                </section>
                <section id="about">
                    <h2> About Me</h2>
                    <p>{{ aboutText }}</p>
                </section>
                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <ul>
                        <li v-for="project in projects" :key="project.id">
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.description }}</p>
                            <img v-if="project.image" v-bind:src="require(`@/assets/${project.image}`)" alt="Project Image" class="project-image">
                        </li>
                    </ul>
                </section>
                <section id="contacts">
                    <h2>Contact Me</h2>
                    <p>Email: {{contactEmail}}</p>
                    <label for="subscribe">Subscribe to Newsletter:</label>
                    <input type="checkbox" id="subscribe" v-model="subscribe">
                </section>
            </main>
          
            <footer>
                &copy; 2023 My Portfolio. All Rights Reserved
            </footer>
            
        </div>
</template>

        <script>
        import '@/styles.css'; // Add this line to import the CSS file
            export default ({
                name: 'HomePage',
                data () {
                  return {
                    siteTitle: "Aston's Portfolio",
                    aboutText: 'I am a passionate student of Computer Science currently in my Bachelors Degree. My skills and intrests are vast, stretching across robotics, web development, app development, embedded systems and cybersecurity. ',
                    projects: [
                        {id: 1, title: 'Ecommerce Website', description: 'Description', image: 'eCom.png'},
                        {id: 2, title: 'Maze Solving Robot', description: 'Description', image: 'maze.png'},
                        {id: 3, title: 'Automatic Plant Waterer', description: 'Description', image: 'plantWater.png'},
                    ] ,
                    contactEmail: 'alamport@deakin.edu.au',
                    subscrive: false,
                  }
                },
            
            })
        </script>
  
