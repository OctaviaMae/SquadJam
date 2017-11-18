var fetchModule = require("fetch");

function pageLoaded(args) {
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

exports.postRequest = function() {
    fetchModule.fetch("http://www.example.com/test", {
        method: "POST",
        body: JSON.stringify({username: "nraboy", firstname: "Nic", lastname: "Raboy"})
    })
    .then(function(response) {
        alert({title: "POST Response", message: JSON.stringify(response), okButtonText: "Close"});
    }, function(error) {
        console.log(JSON.stringify(error));
    })
}