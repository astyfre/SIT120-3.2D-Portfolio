<template>
    <div id="about">
      <div class="aboutme">
      <h2>About Me</h2>
      <p>{{ intro }}</p>
      <br>
      <p>{{ more }}</p>
    </div>
      <table>
  <thead>
    <tr>
      <th>Skills</th>
      <th>Time Spent Learning</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python</td>
      <td>3 years</td>
      
    </tr>
    <tr>
      <td>Robotics</td>
      <td>1 Year</td>
      
    </tr>
    <tr>
      <td>Web Development</td>
      <td>4 Months</td>
     
    </tr>
    <tr>
      <td>Mobile Development</td>
      <td>8 Months</td>
     
    </tr>
  </tbody>
</table>
    </div>
  </template>
  
  <script>
 import '@/styles.css'; // Add this line to import the CSS file
            export default ({
                name: 'AboutPage',
                data () {
                  return {
                    siteTitle: "Aston's Portfolio",
                    intro: 'I am a passionate student of Computer Science currently in my Bachelors Degree. My skills and intrests are vast, stretching across robotics, web development, app development, embedded systems and cybersecurity. ',
                    more: 'I have spent a lot of time playing with computers my whole life, from video games, to programming, building them and upgrading the hardware. Aside from that I also love all technology, with some of my favourite pass-times being drone flying and 3D printing. I have a huge passion for being physical too as I love the outdoors including camping and hiking. I also spend all my free time in the gym lifting weights and hope to compete in Strongman Competitions and one day become Australias Strongest Man! ',
                  }
                },
            
            })
  </script>
  
  <style scoped>
  .aboutme {
    padding-left: 10%;
    padding-right: 10%;
    background-color: white;
    margin-left: 20%;
    margin-right: 20%;
    box-shadow: 5px 10px 5px rgb(188, 217, 235);
  }
  </style>
  