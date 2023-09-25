<template>
<div id="resume">
  <div class="left">
    <h1>Work Experience</h1>
    <h3>Technical Support Officer / CT4 PTY LTD</h3>
    <h4>Nov 2022 - Feb 2023</h4>
    <p>I was part of the Internal Technology Support team where I had to help manage company cyber security, fix ticket issues, general desktop support and act as a global admin.</p>
    <hr>
    <h3>Offside Runner / WM Waste Management</h3>
    <h4>Nov 2022 - <span class="current-span">Current</span></h4>
    <p>I was part of the Internal Technology Support team where I had to help manage company cyber security, fix ticket issues, general desktop support and act as a global admin.</p>
    <hr>
  
    <h1>Education</h1>
    <h3>Computer Science</h3>
    <h4>Feb 2021 - <span class="current-span">Current</span></h4>
    <h4>Deakin University</h4>
    <p>Bachelors Degree</p>
    <hr>
    <h3>White Card</h3>
    <h4>January 2021</h4>
    <h4>Best Restraunt Training</h4>
    <p>General construction induction card</p>
    <hr>
    <h3>VCE</h3>
    <h4>Feb 2014 - Nov 2020</h4>
    <h4>East Doncaster Secondary College</h4>
    <p>81 ATAR</p>
  </div>
  <div class="right">
    <img class="profile-pic" src="@/assets/profile.jpg" style="width:100%" alt="profile pic">
          <div class="w3-display-bottomleft w3-container w3-text-black">
            <h2>Aston Lamport</h2>
          </div>
          <p><i class="fa fa-briefcase"></i>Programmer</p>
          <p><i class="fa fa-home"></i>Melbourne, AUS</p>
          <p><i class="fa fa-envelope"></i>astonlamport@gmail.com</p>
          <p><i class="fa fa-phone"></i>0413851185</p>
          <hr>
          <p class="w3-large"><b>Skills</b></p>
          <p>Coding</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:80%">80%</div>
          </div>
          <p>Web Development</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:40%">40%</div>
          </div>
          <p>Embedded Systems/Robotics</p>
          <div class="progress-container">
              <div class="progress-bar" style="width:60%">60%</div>
            </div>
          <p>App Development</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:65%">65%</div>
          </div>
          
          <br>

          <p class=""><b><i class=""></i>Languages</b></p>
          <p>English</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:100%"></div>
          </div>
          <p>Python</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:65%"></div>
          </div>
          <p>Vue 3</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:70%"></div>
          </div>
          <br>
          <p>C++</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:50%"></div>
          </div>
          <br>
          <p>Javascript</p>
          <div class="progress-container">
            <div class="progress-bar" style="width:75%"></div>
          </div>
          <br>
        
      
  </div>
</div>
  </template>
  
  <script>
import '@/styles.css'; // Add this line to import the CSS file

export default {
  name: 'ResumePage'
}
  </script>
  
  <style scoped>
  #resume {
    display: grid;
    padding-left: 20%;
    padding-right: 20%;
    
    text-align: center;
    grid-template-columns: 70% 30%;
  }
  .progress-container {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 30px;
}

.progress-bar {
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  background-color: #4caf50;
  border-radius: 30px;
}

 .current-span {
  background-color: rgb(3, 29, 172);
  color: white;
  padding: 5px;
  border-radius: 10px;
  flex-direction: column;
 }

 .left, .right {
    
    padding: 10px 20px;
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2); /* Adds a shadow on the right side */
}
.left {
    text-align: center;
}

.right {
  text-align: right;
}
.left:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.right:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.profile-pic{
  max-width: 40%;
}

@media screen and (max-width: 900px) {
    #resume {
    display: block;
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items */
    text-align: center; /* Center text */
  }
  .left, .right {
    
    padding: 10px 10px;
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2); /* Adds a shadow on the right side */
}
}
  </style>
  