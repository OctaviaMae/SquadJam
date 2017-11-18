
var frameModule = require("ui/frame");
var http = require("http");
var dialogs = require("ui/dialogs");


exports.loaded = function(){
};

exports.joinGroup= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/joinGroup/joinGroup");

};

exports.createGroup= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/signUp/signUp");
};

