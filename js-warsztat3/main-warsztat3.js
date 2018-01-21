    'use strict';


    function ajax() {

        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");

        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    var data = xhttp.responseText;
                    var parsed = JSON.parse(data);
                    parsed.forEach(function(el) {
                    var addContent = document.createElement('p');
               addContent.innerHTML = el.name;
                        document.body.appendChild(addContent);   

                  });
                   
                }
                xhttp = null;
            }
        };
        xhttp.send();
    };

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.documentElement.offsetHeight) {
        ajax();        
    }
};