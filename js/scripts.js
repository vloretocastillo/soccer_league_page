// STICKY NAVBAR

window.onscroll = () => { makeMenuStickyOnScroll() };
        
let menu = document.getElementById("menu");
let sticky = menu.offsetTop;

let makeMenuStickyOnScroll = () =>{ window.pageYOffset >= sticky ? menu.classList.add("sticky") : menu.classList.remove("sticky");  }


// FORM VALIDATION

let validateForm = () => {

    var name = document.forms["registration"]["first_name"];               
   
    if (name.value == "")                                  
    { 
        alert("Name is a required field"); 
        name.focus(); 
        return false; 
    } 
    alert('good')
}


