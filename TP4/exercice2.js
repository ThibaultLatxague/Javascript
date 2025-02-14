var carte;
let btnCarte = document.getElementById("laCarte");
let body = document.getElementById("body");

onload = function() {
    var mesOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    carte = new google.maps.Map(document.getElementById("map"), mesOptions);
};

btnCarte.addEventListener('click', function() {
    var franceLatLng = { lat: 46.603354, lng: 1.888334 }; // Coordonnées approximatives de la France
    carte.setCenter(franceLatLng); // Recentre la carte
    carte.setZoom(6); // Niveau de zoom adapté
});

$(document).ready(function() {
    $.getJSON("cleAPI.json", function(result) {
        $("body").append("<script src='https://maps.googleapis.com/maps/api/js?key=" + result.cle + "&callback=initMap' async defer></script>");
    });
});