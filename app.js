var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1569/25513386696_e4256c5d9a_m.jpg"},
    {name: "Granite Hill", image: "https://live.staticflickr.com/2367/2527085261_6c7682846c_m.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3462/3891748360_67169c828a_m.jpg"}
]

app.get("/", function(req, res){
   res.render("landing") ;
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

// logic of making new campgrounds and redirect to /campgrounds
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

// shows the form that sends the post request 
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});