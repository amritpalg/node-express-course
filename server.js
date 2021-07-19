const express=require('express');
const app=express();
const mockUserData=[{name:'Mark'},{name:'Jill'}]

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