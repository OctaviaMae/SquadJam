var frameModule = require("ui/frame");


exports.loaded = function(){
console.log("hello");
};


exports.back = function(){

var backPage = frameModule.topmost().goBack();

};

exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();

};

exports.createNew= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");
};