
var frameModule = require("ui/frame");



exports.joinGroup= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/joinGroup/joinGroup");

};

exports.createGroup= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/createGroup/createGroup");
};
