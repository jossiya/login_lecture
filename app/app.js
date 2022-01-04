"use strict"
//모듈
const express= require("express");
const app= express();

//라우팅
const home=require("./src/routes/home")

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))

app.use("/",home);//홈페이지 기본//use ->>미들웨어

module.exports=app;
