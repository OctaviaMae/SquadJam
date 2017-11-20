
/*
This code displays/ populates the playlist list of availabe songs from an HTTP request to our server.
The playlist will populate from the given the information that will be sent from a function
in the search function. It will then display the list of songs along with a "like" button
that will count the amount of likes for each song.


@Authors: Azraa, Octavia,  Erik, Raphael with assistance from Miles




*/
var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');
var labelModules = require('ui/label');
var http = require("http");
var UserViewModel = require("../../shared/view-models/user-view-model");
var observableModule = require("data/observable").Observable;
var fetchModule = require("fetch");

var playlistId;

exports.loaded = function(args){

var page = args.object;

//stores the information from the server in a URL
exports.onSubmit = function(args){
var searchBar = args.object;
var searchValue = searchBar.text.toLowerCase();

var url = "http://81721477.ngrok.io/api/search/" + searchValue;

console.log(url);


fetchModule.fetch(url).then(response => {return response.json();}).then(function(r){
      console.log(JSON.stringify(r.entries));
       page.bindingContext = r;
       console.log("DONE");


       }
     );
}

/*page.bindingContext = {
    myItems: [{
        "artist": "Beyonce",
        "name": "Rocket"
    }, {
        "artist": "The Nomands",
        "name": "Yakalalo"
    }]
}
*/

function countLikes(counter) {
    if (counter = 1) {
        return counter + "like";
        }
    else{

        return counter + "likes";
     }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 0;
    viewModel.message = countLikes(viewModel.counter);

    viewModel.onTap = function() {
        this.counter++;
        this.set("Like", countLikes(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;






/*function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = { };
}
exports.pageLoaded = pageLoaded;

exports.getRequest = function() {
    fetchModule.fetch("http://songapp.ddns.net/api/songs", {
        method: "GET"
    })
    .then(function(response)
    {
      console.log("itens gotten");

        alert({title: "GET Response", message: JSON.stringify(response), okButtonText: "Close"});
    }, function(error) {
        console.log(JSON.stringify(error));
    })
}

*/

/*
var getResponse;
	http.getString("http://songapp.ddns.net:8000/api/songs").then(function (r) {
    dialogs.alert(r);
	getResponse = JSON.parse(r);
	dialogs.alert(JSON.stringify(getResponse));
	//dialogs.alert(getResponse.building.name);
	//dialogs.alert(getResponse.Dowing.machines);
}, function (e) {
    //// Argument (e) is Error!
    throw exception(e);
});

http.request({ url: "http://songapp.ddns.net:8000/api/songs", method: "GET" }).then(function (response) {
    //// Argument (response) is HttpResponse!
    var statusCode = response.statusCode;
    console.log("it works!");
}, function (e) {
    //// Argument (e) is Error!
});

}

var page = args.object;
var playlistId = "JCO0MW";

http.request({ url: "http://songapp.ddns.net:8000/api/songs", method: "GET" }).then(function (response) {
    //// Argument (response) is HttpResponse!
    var statusCode = response.statusCode;
    console.log("it works!");
}, function (e) {
    //// Argument (e) is Error!
});
http.getString("http://songapp.ddns.net:8000/api/songs").then(function (r)) {
     console.log(r);
}, function (e) {
     console.log(e);
    //// Argument (e) is Error!
});


request
  .get('http://songapp.ddns.net:8000/api/songs')
  .on('response', function(response) {
    console.log("helllllloooooooooooooo") // 200
  })


page.bindingContext = {
    myItems: [{
        "artist": "Beyonce",
        "name": "Rocket"
    }, {
        "artist": "The Nomands",
        "name": "Yakalalo"
    }]
}
};

var label = new labelModules.Label();
label.on(gestures.GestureTypes.swipe, function(args){
console.log("swipe direction: " + args.direction);
});

   // Add onNavigatingTo to module.exports so it can be accessed in the XML page


exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();
};





*/
