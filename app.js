var express = require("express");
var app = express();
var path = require("path");

var port = 3000;

app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("monkey");
});

app.get("/repeat/:Name/:times",function(req,res){
    var count = parseInt(req.params.times);
    var name = req.params.Name;
    var ans = "";
    for(i=0;i<count;i++)
        ans+=name + " ";
    res.render("print",{ans:ans});
});

app.get("*",(req,res)=>{
    res.send("STARRRR");
});

app.listen(port,()=>{
    console.log("server is running on port:"+port);
});