const express = require("express");
const port = 1000;

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded());

let students =[
    {id: 1,name: "fenil", skill: "web devloper"},
    {id: 2,name: "keval", skill: "web appliction"},
];

app.get("/",(req,res)=>{
    res.render("index",{students});
});

app.post("/addData",(req,res)=>{
    req.body.id = students.length +1;
    students.push(req.body);
    res.redirect("/");
});

app.get("/deleteData",(req,res)=>{
    let deleteRecord =students.filter((item)=> item.id !=req.query.id);
    students=deleteRecord;
    res.redirect("/");
});

app.get("/editData/:id",(req,res)=>{
    let singleData =students.find((item)=> item.id == req.params.id);
    res.render("edit",{singleData});

});


app.post("/updateData",(req,res)=>{
    students.forEach((students)=>{
        if(students.id == req.body.id){
            (students.id = req.body.id),
            (students.name = req.body.name),
            (students.skill = req.body.skill);
        }
        else{
            students;
        }
    });
    res.redirect("/");
});

app.listen(port,(err)=>{
    err? console.log(err) : console.log("server started on port" +port);
});