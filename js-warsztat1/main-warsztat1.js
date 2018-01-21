'use strict';


var buttonPobrania = document.getElementById("przycisk");

function pobierzDane() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var data = xhttp.responseText;                
                
                var jsonToText = JSON.parse(data);
        
                
                var nowyParagraf = document.createElement("p");
                var tekstParagrafu = document.createTextNode("User ID: " + jsonToText.userId + " Name: " +jsonToText.userName + " URL: " + jsonToText.userURL);
                nowyParagraf.appendChild(tekstParagrafu);
                document.body.appendChild(nowyParagraf);

            }
            xhttp = null;
        }
    };

    xhttp.send();
    

};

buttonPobrania.addEventListener('click', pobierzDane);

