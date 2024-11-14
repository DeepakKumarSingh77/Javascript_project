const container=document.getElementById("container");
const image=document.getElementById("Qrimage");
const btn=document.getElementById("btn");
const input=document.getElementById("input");

const api="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function Generate() {
    if(input.value){
        let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
        image.src=url;
        container.classList.add("newclass");
    }else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000);

    }
} 

btn.addEventListener("click",function(){
    Generate();
})