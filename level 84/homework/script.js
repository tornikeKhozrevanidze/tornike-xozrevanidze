let div = document.querySelector("div")
document.addEventListener("keydown", function(event){
    if(event.key == 'ArrowRight'){
        div.style.transform = "translate(45vw)"
    }else if(event.key == 'ArrowUp'){
        div.style.transform = "translate(0px, -45vh)"
    }else if(event.key == 'ArrowLeft'){
        div.style.transform = "translate(-45vw, 0px)"
    }
    else if(event.key == 'ArrowDown'){
        div.style.transform = "translate(0px, 45vh)"
    }
    
})

document.addEventListener("keyup", function(event){
    if(event.key == 'ArrowRight'){
        div.style.transform = "translate(0px)"
    }else if(event.key == 'ArrowUp'){
        div.style.transform = "translate(0px, 0px)"
    }else if(event.key == 'ArrowLeft'){
        div.style.transform = "translate(0px, 0px)"
    }else if(event.key == 'ArrowDown'){
        div.style.transform = "translate(0px, 0px)"
    }
    
})







