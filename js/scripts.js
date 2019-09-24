// STICKY NAVBAR

window.onscroll = () => { makeMenuStickyOnScroll() };
        
let menu = document.getElementById("menu");
let sticky = menu.offsetTop;



let makeMenuStickyOnScroll = () =>{ 
    console.log(sticky)
    window.pageYOffset >= sticky ? menu.classList.add("sticky") : menu.classList.remove("sticky");  
}


// FORM VALIDATION






























let validateForm = () => {

    var first_name = document.forms["registration"]["first_name"];     
    var last_name = document.forms["registration"]["last_name"];            
   
    if (first_name.value == "") { 
        alert("Name is a required field"); 
        name.focus(); 
        return false; 
    } 

    if (last_name.value == "") { 
        alert("Name is a required field"); 
        name.focus(); 
        return false; 
    } 


    
}


