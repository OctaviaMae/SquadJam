var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');



exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();

};

/*exports.loaded = function(args){
console.log("hello exports.loaded executed");

var page = args.object;

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
*/