"use strict"
const users={
    id :["rolety2202"],
    psw: ["jossi1223"]
}

const output={
     home :(req,res)=>{
        res.render("home/index")
    },
     login :(req,res)=>{
        res.render("home/login")
    }
    
    
}
const process={

    login: (req, res)=> {
        const id= req.body.id,
        psw=req.body.psw;

        if(users.id.includes(id)){
            const idx=users.id.indexOf(id)
            if(users.psw[idx]===psw){
                return res.json({
                    success :true,
                })
                
            }
        }
        return res.json({
            success : false,
            msg:"로그인에 실패하셨습니다."
        })
    },
}

module.exports={
    output,
    process,
}