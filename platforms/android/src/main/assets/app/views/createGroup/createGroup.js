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
      var url = "http://46cdb31b.ngrok.io/api/playlist";
     fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Session-Id: id, username: user })
     }).then(r => { return r.json(); }).then(function (r) {
        exports.playlistID= result;
     }).catch(failOnError(done));

    var topmost = frameModule.topmost();
    topmost.navigate("views/Playlist/Playlist");
};