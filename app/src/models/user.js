"use stsrict"
const UserStorage=require("./UserStorage.")

class User{
    constructor(body){
        this.body=body;
    }

    login(){
        const client= this.body;
        const { id ,psw }=UserStorage.getUserInfo(client.id)
        
        if(id){
            if(id === client.id && psw === client.psw){
                return{success : true};
            }
        return {success : false, msg : "비밀번호가 틀렸습니다."}
        }
        return{ succsess : false, msg :"존재하지 않는 아이디 입니다."}
    }
}








module.exports=User


