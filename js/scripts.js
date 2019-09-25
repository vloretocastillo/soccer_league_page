// STICKY NAVBAR && BACK TO TOP BUTTON 

window.onscroll = () => { 
    makeMenuStickyOnScroll() 
    backToTopOnScroll()
};
        
let menu = document.getElementById("menu");
let sticky = menu.offsetTop;
let backToTopBtn = document.getElementById("back-top-btn")
let footer = document.getElementById("footer");
let mainContainer = document.getElementById("policies");


let makeMenuStickyOnScroll = () => { 
    window.scrollY >= sticky ? menu.classList.add("sticky") : menu.classList.remove("sticky"); 
}

let backToTopOnScroll = () => {

    // console.log(sticky)
    // console.log("window inner height:", window.innerHeight)
    console.log("footer height: ", footer.offsetHeight)
    // console.log("footer top: ", footer.offsetTop)
    // console.log("window scroll y: ", window.scrollY)
    // console.log("footer suma: ", footer.offsetTop + footer.offsetHeight)
    // console.log("mainContainer: ", mainContainer.offsetTop )
    // console.log(window.innerHeight, window.scrollY)
    console.log("window.innerheight + window.scrollY: ", (footer.offsetTop + footer.offsetHeight) - (window.innerHeight + window.scrollY) )
    console.log('-')

    let someCalculation = (footer.offsetTop + footer.offsetHeight) - (window.innerHeight + window.scrollY)

    

    if (window.scrollY >= sticky) {
        backToTopBtn.classList.remove("hide-me")
    } else {
        backToTopBtn.classList.add("hide-me")
    }

    if (footer.offsetHeight >= someCalculation) {
        console.log('we have to hide it')
        console.log(backToTopBtn.offsetTop)

        backToTopBtn.classList.add("fix-me")
    } else {
        backToTopBtn
    }

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


