"use strict"
const id =document.querySelector("#id"),
    name=document.querySelector("#name"),
    psw =document.querySelector("#psw"),
    confirmPsw=document.querySelector("#confirm-psw"),
    belong=document.querySelector("#belong"),
    email=document.querySelector("#email"),
    registerBtn =document.querySelector("#btn");


registerBtn.addEventListener("click",register);
function register(){
    if(!id.value) return alert("아이디를 입력해주세요");
    if(psw.value !== confirmPsw.value) return alert("비밀번호가 일치하지 않습니다.");
    

    const req={
    id: id.value,
    psw: psw.value,
    belong:belong.value,
    email:email.value,
    };
    fetch("/register",{
        method :"POST",          //body를 통해서 전달할 떄 post method로 요청해야한다.
        headers:{                  //header는 내가 전달하는 데이터가 JSON이다라고 표현 하는 거것이고, 내가 보내는 타입을 명시하는 것은 Content-Type이다.
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req),                 //제이슨문자로 요청한다는 뜻
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href="/login";   
        }else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생 머리 빠지게 찾아라!"))
    })
}