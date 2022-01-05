"use strict";
class UserStorage{
    static #users ={ //정적변수 class 객체는 static을 줘야 다른 곳에서 클레스 지정을 안 해도 변수를 바로 불러올 수 있다.//#는 은닉화
        id :["rolety2202" ,"asd"],
        psw : ["jossi1223","asd"],
        name: ["조정민","asd"],
    };

    static getUsers(...fields){
        const users=this.#users;
        const newUsers=fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers
        },{});
        return newUsers;
    }
}

module.exports=UserStorage;