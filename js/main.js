let button_toggle=document.querySelector(".btn_menu");
let menu=document.querySelector(".menu")
let btn_close=document.querySelector(".btn_close");
let button=document.querySelectorAll(".button li");

button_toggle.addEventListener("click",()=>{
    menu.classList.remove("d-hidden");
    menu.classList.add("d-block");
    button_toggle.style.display="none";
    btn_close.style.display="block";

})
btn_close.addEventListener("click",()=>{
    menu.classList.remove("d-block");
    menu.classList.add("d-hidden");
    btn_close.style.display="none";
    button_toggle.style.display="block";
})

let reward_btn=document.querySelectorAll(".reward");
let close_btn=document.querySelectorAll(".close");
reward_btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        let Alet_ID=button.dataset.alert; 
        let Alert_BOX=document.getElementById(Alet_ID);
        Alert_BOX.classList.add("alert");
        Alert_BOX.classList.remove("d-card_hidden");
        if(Alert_BOX.classList.contains("alert")){
            close_btn.forEach((f)=>{
                f.addEventListener("click",()=>{
                    Alert_BOX.classList.remove("alert");
                    Alert_BOX.classList.add("d-card_hidden");
                })
            })
        }
    })
})
