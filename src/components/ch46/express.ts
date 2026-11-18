import express from "express";

const app = express()

//创建get请求
app.get('/api/v1/data',(req,res)=>{
    console.log(req.url)
    res.json({
        code:200,
        message:"请求成功"
    })
})

//端口号10010
app.listen(10010)
