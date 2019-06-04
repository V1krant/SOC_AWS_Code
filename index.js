const express = require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static());

app.get("/",function(req,res,next){

    res.send("HI, This is my first node server.");

});
app.get("/first",function(req,res,next){

    res.send("HI, This is my second node server.");

});
app.get("/second",function(req,res,next){

    res.send("HI, This is my third node server.");

});

app.post("/query",function(req,res,next){
    res.send(JSON.stringify(req.body));

});

app.listen(3000);

// const express = require('express');
// const bodyparser = require('body-parser')
// const app = express();
// app.set("view engine","ejs");
 
// app.use(express.static("static"));
 
// app.use(bodyparser.urlencoded({extended:false}));

// app.set("view engine", "ejs");
 
// app.get("/", function(req, res, next) {
//     res.send("Hi, This is my first node server");
// });
 
// app.get("/first", function(req, res, next) {
//     res.send("Hi, This is my first node server, first page");
// });
 
// app.get("/second", function(req, res, next) {
//     res.send("Hi, This is my first node server, second page");
// });
 
// app.post("/query", function(req, res, next) {
//     // res.send(Math.random() + " " + JSON.stringify(req.body));
//     if(! req.body.username) {
//         res.send("Username field is empty");
//         return;
//     }
//     if(! req.body.password) {
//         res.send("Password field is empty");
//         return;
//     }

//     res.send("Your username is "+req.body.username+" and password is "+req.body.password);
// });
// app.get("/random",function(req,res,next){
//     res.send(""+(Math.floor(Math.random()*100000)));
// });

// app.get("/third",function(req,res,next){
//     if(req.query.q == "node")
//     {
//     res.render("test1",
//     {
//         title:"title",
//         topic:"Node_EJS_Temp",
//         status:0,
//         fruits: ["apple","banana","orange"],
//         error: {code: 0,msg: "no error"}
//     });
//     } else if (req.query.q == "python")
//     {
//         res.render("test1",
//         {
//             title:"Python",
//             topic:"Intro",
//             status:1,
//             fruits: ["coconut","peach","Watermelon","app"],
//             error: {code: 0,msg: "not started"}
//         });
//     }
//     else{
//         res.render("test1",
//         {
//             title:"title in else",
//             topic:"Node_EJS_Temp in else",
//             status:2,
//             fruits: [],
//             error: {code:1 ,msg: "topic not found"}
//         });
//     }
// });
 
// app.listen(3000);

// const express = require('express');
// const bodyparser = require('body-parser')
// const app = express();
 
// app.use(express.static("static"));
 
// app.use(bodyparser.urlencoded({extended:false}));
 
// app.set("view engine", "ejs");
 
// app.get("/", function(req, res, next) {
//     res.send("Hi, This is my first node server");
// });
 
// app.get("/first", function(req, res, next) {
//     if(req.query.greeting == "1")
//         res.send("Hi, This is second route");
//     else
//         res.send("Bye, from the second route");
//     // res.send("Hi, This is my first node server, first page");
// });
 
// app.get("/second", function(req, res, next) {
//     res.send("Hi, This is my first node server, second page");
// });
 
// app.post("/query", function(req, res, next) {
//     // res.send(Math.random() + " " + JSON.stringify(req.body));
//     if(! req.body.username) {
//         res.send("Username field is empty");
//         return;
//     }
//     if(! req.body.password) {
//         res.send("Password field is empty");
//         return;
//     }
 
//     res.send("Your username is "+req.body.username+" and password is "+req.body.password);
// });
 
// app.get("/random", function(req, res, next) {
//     res.send(""+Math.floor(Math.random()*100000));
// });
 
// app.get("/third", function(req, res, next) {
//     res.render("test1");
// });
 
// app.listen(3000);















// const express = require('express');
// const app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// app.get("/random",function(req,res,next){
//     res.send(""+(Math.floor(Math.random()*100000)));
// });
 
// app.post("/sayhello",function(req,res,next){
//     console.log("Hello " + req.body.name+" !");
// });

// app.post('/mydata',function (req,res,next){
//     res.send("Your name is"+req.body.name);
// });


// app.listen(8080);


// var express = require('express');
// var app = express();

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.sendFile('index.html');
// });

// app.post('/submit-student-data', function (req, res) {
//     var name = req.body.firstName + ' ' + req.body.lastName;
    
//     res.send(name + ' Submitted Successfully!');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });



































