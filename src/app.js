const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 8000;
const hbs=require('hbs');


const staticpath=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../template/views")
const partial_path=path.join(__dirname,"../template/partials")

app.set('view engine','hbs')
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:'Opps! Page not found'
    })
})
app.listen(port,()=>{
    console.log(`listening at port number ${port}`);
})