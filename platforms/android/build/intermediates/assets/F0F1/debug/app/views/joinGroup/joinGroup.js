var frameModule = require("ui/frame");
var gestures = require('ui/gestures');
var listViewModule = require('ui/list-view');
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;


/*

var array = new ObservableArray();

array.push({"artist": "Beyonce", "name": "Irreplacable"});
var pageData = new Observable({myItems: array});

page.bindingContext = pageData;

console.log("we got to the end of the listview element")

};
*/


exports.joinGroup= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/Playlist/Playlist");

};

exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();

}


var view = require("ui/core/view");
var drawer;



