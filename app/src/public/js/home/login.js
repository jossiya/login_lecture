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
}