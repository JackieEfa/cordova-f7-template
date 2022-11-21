var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
    ],
    // ... other parameters
});
var mainView = app.views.create('.view-main')

var $$ = Dom7;
$$(document).on('page:init', '.page[data-name="page2"]', function () {
    // Page 2 fun here

})

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Cordova is now initialized. Have fun!

    var geoOpts = {
        enableHighAccuracy: true

    }

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOpts);

    function geoSuccess(position) { 
        console.log(position);
        var lat = position.coords.latitude
        var long = position.coords.longitude
        $("#currentPOS").html(lat + "," + long)
    }

    function geoError(message) {
        alert(message.message)
    }

    var watchID;

    $("#startwatch").on('click', function(){
        navigator.geolocation.watchPosition(geoSuccess, geoError, geoOpts)
        $(this).hide()
        $("#stopwatch").show()
    })

    $("#stopwatch").on('click', function(){
        navigator.geolocation.clearWatch(watchID)
        $(this).hide()
        $("#startwatch").show()
    })

}
