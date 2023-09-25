<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    </head>
<footer class="footer">
  <div class="left">
  
  <p class="findme"><b>Find me on social media.</b></p>
  <div class="social-icons">
    <a href="https://www.linkedin.com/in/aston-lamport-7348b8202/"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.facebook.com/profile.php?id=100009442536644"><i class="fab fa-facebook"></i></a>
    <a href="https://github.com/astyfre"><i class="fab fa-github"></i></a>
</div>
<div class="address">
    <p>Doncaster East, Victoria 3109</p>
    <p>Australia</p>
</div>
</div>    
<div class="right">
<div class="copyright">
    &copy; 2023 Aston Lamport
  </div>
<div class="contact-info">
    <p class="contactme"><b>Contact Me Here</b></p>
    <p>Email: astonlamport@gmail.com</p>
    <p>Phone: (+61) 413-851-185</p>
  </div>
</div>
  
</footer>
</template>


<script>
</script>

<style>
.footer {
  display: grid;
  background-color: #000047;
  color: white;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
  grid-template-columns: auto auto;
  
}
.contactme, .findme{
  color: white;
}
.address {
  margin-top: 10px;
  font-size: 14px;
  color: #ccc;
}
.contact-info {
  margin-top: 10px;
  font-size: 14px;
  color: #ccc;
}
.social-icons a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.social-icons a:hover {
  color: aqua; /* Change color on hover */
}

.left-column, .right-column {
    text-align: left;
    padding: 0 20px;
}

@media screen and (max-width: 900px) {
    .footer {
  display: block;
  flex-direction: column;
  align-items: center; /* Center items */
  text-align: center; /* Center text */
 }

}
</style>
