'use strict';

function ajax(method, url) {

    var xhttp = new XMLHttpRequest();


    xhttp.open(method, url);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var data = xhttp.responseText;
                console.log(data);
            }
            xhttp = null;
        }
    };
    xhttp.send();
};

//ajax("GET", "https://jsonplaceholder.typicode.com/posts/1");
//
//ajax("GET", "https://jsonplaceholder.typicode.com/albums");




//$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(data) {
//    console.log(data);
//    });



$.ajax({url: "https://jsonplaceholder.typicode.com/posts/1",
        dataType: "json",
        success: function(resultJSON) {console.log(returnJSON);}
       });

