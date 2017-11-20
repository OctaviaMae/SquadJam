/*
The functionality of this page is to provide functionality to
the Search Page. It will bind the infromation from the Search
Bar. It will make an HTTP GET request to the server. The
results of the information parsed will be displayed back
on the search pages a list bounded to the List-view items
established in the XML files

@ Author: Raphael Wieland, Azra, Eric Hartik, and Octavia Smith



*/

var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');
var fetchModule = require("fetch");
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var labelModule = require ("ui/label");

var page;
// allows the "Back" button to go back to the page before it

exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();


};



exports.onSubmit = function(args){
var searchBar = args.object;
var searchValue = searchBar.text.toLowerCase();

var url = "http://81721477.ngrok.io/api/search/" + searchValue;

console.log(url);


fetchModule.fetch(url).then(response => {return response.json();}).then(function(r){
      console.log(JSON.stringify(r.entries));
      page.bindingContext= r;
      console.log("DONE");
})

}

exports.loaded = function(args){

var page = args.object;
}










/*
var pageData = new observableModule.fromObject({
    songList: new ObservableArray([
        { title: "hello"}
           ])
        });
    }
  );


exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = songList;
};
}
*/
/*
        "artist": "Beyonce",
        "name": "Rocket"
    }, {
        "artist": "The Nomands",
        "name": "Yakalalo"
    }]
}
}
*/