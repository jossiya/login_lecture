"use strict"
const id =document.querySelector("#id");
const psw =document.querySelector("#psw")
const loginBtn =document.querySelector("button")


loginBtn.addEventListener("click",login);
function login(){
const req={
    id: id.value,
    psw: psw.value,
    };
    fetch("/login",{
        method :"POST",          //body를 통해서 전달할 떄 post method로 요청해야한다.
        headers:{                  //header는 내가 전달하는 데이터가 JSON이다라고 표현 하는 거것이고, 내가 보내는 타입을 명시하는 것은 Content-Type이다.
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req),                 //제이슨문자로 요청한다는 뜻
    });
}