document.addEventListener("DOMContentLoaded", function(event) { 
    burger = document.getElementById("burger");
    navigation = document.getElementById("navigation");
    burger.addEventListener("click", function() {
        if (burger.classList.contains("active")) {
            burger.classList.remove("active");
            navigation.style.display = "none";            
        } else {
            burger.classList.add("active");
            navigation.style.display = "block";
        }        
    }, false);
});  
