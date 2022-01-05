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
    static getUserInfo(id){
        const users=this.#users;
        const idx= users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=>[id, psw, name]
        const userInfo = usersKeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});
        return userInfo   
        
    }
    static save(userInfo){
        const users=this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psw.push(userInfo.psw);
        // users.belong.push(userInfo.belong);
        // users.email.push(userInfo.email);
        return {success:true}
    }
}

module.exports=UserStorage;