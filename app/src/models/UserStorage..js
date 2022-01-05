"use strict";
const db= require("../config/db")
//정적변수 class 객체는 static을 줘야 다른 곳에서 클레스 지정을 안 해도 변수를 바로 불러올 수 있다.//#는 은닉화
class UserStorage{
    // static getUsers(...fields){
    
    // }
    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            // const query = "SELECT * FROM users2 WHERE id= ?;";
            // db.query(query, [id], (err, data)=>{
            //     if(err) reject(`${err}`);
                
            //     resolve(data[0]);
            // }); 
        });
    }
    
    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            // const query = "INSERT INTO users2(id, name, psword, belong, email) value(?, ?, ?, ?, ?)";
            // db.query(query,
            //     [userInfo.id, userInfo.name, userInfo.psword, userInfo.belong, userInfo.email], 
            //     (err)=>{
            //     if(err) reject(`${err}`);
            //     resolve({success : true});
            // }); 
        });
    }
}

module.exports=UserStorage;