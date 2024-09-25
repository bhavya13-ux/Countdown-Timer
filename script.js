let btn=document.querySelector(".btn");
let h=document.getElementById("hour");
let m=document.querySelector("#min");
let s=document.querySelector("#sec");
let popup=document.querySelector(".box");
let startTimer=null;
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
function timer(){
    if(h.value==0 && m.value==0 && s.value==0){
        openPopup();
    }
    else if(s.value!=0){
        s.value--;
    }
    else if(m.value!=0 &&s.value==0){
        s.value=59;
        m.value--;
    }
    else if(h.value!=0&&m.value==0){
        m.value=60;
        h.value--;
    }
}
btn.addEventListener('click',function(){
    function startInterval(){
        startTimer=setInterval(function(){
            timer();
        },1000);
    }
    startInterval();
    })