'use strict';

$(function() {
    
$("#przycisk").click( function() {

$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
    $("<p></p>").insertAfter("#przycisk");
    $("p").text("ID: " + data.userId + ", Name: "+ data.userName + ", URL: " + data.userURL);

          });   
    
    });
    });
