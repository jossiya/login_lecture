"use strict"
//모듈
const express= require("express");
// const bodyPaser=require("body-parser");
const app= express();
const dotenv= require("dotenv");//개발환경 동일하게 환경변수 등록
dotenv.config();

//라우팅
const home=require("./src/routes/home")

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결



app.use("/",home);//홈페이지 기본//use ->>미들웨어 등록해줌 

module.exports=app;
