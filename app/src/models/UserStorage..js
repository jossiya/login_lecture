"use strict";
const fs =require("fs").promises
//정적변수 class 객체는 static을 줘야 다른 곳에서 클레스 지정을 안 해도 변수를 바로 불러올 수 있다.//#는 은닉화
class UserStorage{
    // static getUsers(...fields){
    
    // }
    static getUserInfo(id){
        
    }
    static save(userInfo){
    
    }
}

module.exports=UserStorage;