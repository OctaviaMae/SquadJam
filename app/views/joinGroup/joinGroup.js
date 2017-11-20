/*
The functionality of this page is for a user to be able to join
the playlist that another user has already established. The user
will type in the password id given from the established playlist ID
and will be directed to the playlist page stored with the specified ID.

@Author: Octavia Smith , Azra

*/


var frameModule = require("ui/frame");
var gestures = require('ui/gestures');
var listViewModule = require('ui/list-view');
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var view = require("ui/core/view");


/*

var array = new ObservableArray();

array.push({"artist": "Beyonce", "name": "Irreplacable"});
var pageData = new Observable({myItems: array});

page.bindingContext = pageData;

console.log("we got to the end of the listview element")

};
*/
var playlistID = //make HTTP request for ID
exports.loaded = function(){


exports.joinGroup= function(){
//once password is submitted and valid
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");//store the playList ID

};


//creates a back button on the age
exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();

};

};





