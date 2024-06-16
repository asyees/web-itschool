const buttonn = document.getElementById("button__course")
buttonn.classList.remove("pressed__button");
buttonn.addEventListener("click", function(){
    buttonn.classList.toggle("pressed__button");

    // buttonn.classList.remove("pressed__botton");
})