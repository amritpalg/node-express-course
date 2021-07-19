const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
const mockUserData=[{name:'Mark'},{name:'Jill'}]

app.post("/login",function(req,res){

    const username=req.body.username;
    const password=req.body.password;

    if(username==="admin" && password==="admin")
    {
        res.json({
            success:true,
            message:'Password and username match',
            token:'123456789'
        })
    }
    else
    {
        res.json({
            success:false,
            message:'Password and username does not match.'
        })
    }
})

app.get("/users", function(req,res){
    res.json({
        success:true,
        message:"success",
        users:mockUserData  
    })
})

app.get("/user/:id", function(req,res){
    console.log(req.params.id);
    res.json({
        success:true,
        message:"success",
        users:req.params.id
    })
})

app.listen(8000,function(){
console.log("Server is running");
});