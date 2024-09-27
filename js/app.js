$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

function validateForm() {
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    if (!name || !email || !message) {
     
      errorMessage.textContent = "All fields are required!";
      errorMessage.style.color="red";
      return false;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address!";
      return false;
    }
  
    errorMessage.textContent = "";
  
    return true;
  }
  
  function validateEmail(email) {
   
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return re.test(email);
  }