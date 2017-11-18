var frameModule = require("ui/frame");


exports.back = function(){

var backPage = frameModule.topmost().goBack();

};

exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();

};

exports.createNew= function(id, user){
    var url = "http://46cdb31b.ngrok.io/api/playlist";    
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Session-Id: id, username: user })
    }).then(r => { return r.json(); }).then(function (r) {
    return result;
}).catch(failOnError(done));
