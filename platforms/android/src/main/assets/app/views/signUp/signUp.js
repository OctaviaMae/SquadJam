/*

The functionality of this page is to connect the signIn function to its corresponding
XML file. It currently consists of an observable object that stores hard-coded
email and password examples
Once the group creates a group, the server will send a code that will be that playlist's ID
@Author Azra , Octavia Smith

Date: November 13, 2017

*/
var playlistId;// creates a global variable
var observableModule = require("data/observable");

// user has to be bound to the information the user sends
var user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

var frameModule = require("ui/frame");
//conects the information to the Sign-up page
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

/*
This method is bound to the "SignIn" button. It will verify if the informaton inputted is valid
It will then POST the information to the server and hold it open throughout the navigation of the app
The function automatically go to the Search Page if the information is valid
*/
exports.signIn = function() {
    alert("Signing in"); //Change to a dialogue button
    //if information is valid:
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");
    // a function that binds the information given from the email and
    //password to the server. Potentially a POST request

};
/*
This method is bound to the "Sign-Up" button. It will verify if the informaton inputted is valid
It will then POST the information to the server and hold it open throughout the navigation of the app
The function automatically go to the Search Page if the information is valid
*/
exports.register = function() {
    // first checks if the information is valid.
    //binds the information and sends it to the server.
    alert("Signing Up") // change this box to a dialogue box instead of an alert.
    //if information is valid:
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");
};