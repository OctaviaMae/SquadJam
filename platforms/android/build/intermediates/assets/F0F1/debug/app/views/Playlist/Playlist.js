var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');
var labelModules = require('ui/label');
var http = require("http");

var node = require('nativescript-nodeify');
var request = require("request");




var label = new labelModules.Label();
label.on(gestures.GestureTypes.swipe, function(args){
console.log("swipe direction: " + args.direction);
});


exports.loaded = function(args){
;


var page = args.object;
var playlistId = "JCO0MW";


/*request
  .get('http://songapp.ddns.net:8000/api/songs')
  .on('response', function(response) {
    console.log("helllllloooooooooooooo") // 200
  })

*/

page.bindingContext = {
    myItems: [{
        "artist": "Beyonce",
        "name": "Rocket"
    }, {
        "artist": "The Nomands",
        "name": "Yakalalo"
    }]
}
}

exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();
}




   // Add onNavigatingTo to module.exports so it can be accessed in the XML page


