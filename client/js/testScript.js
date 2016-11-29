    var url = 'http://127.0.0.1:3000/'; /*AJAX CALL*/
    function getReq() {
        $.ajax({
            url: url + '',
            type: 'GET',
            success: function(result) {}
        });
    }

    function postReq(data) {
        $.ajax({
            url: url + '',
            type: 'POST',
            data: data,
            success: function(result) {}
        });
    }

    function putReq(data) {
        $.ajax({
            url: url + '',
            type: 'PUT',
            data: data,
            success: function(result) {}
        });
    }

    function putReq(data) {
        $.ajax({
            url: url + '',
            type: 'DELETE',
            data: data,
            success: function(result) {}
        });
    }


    /*WINDOW*/
    function windowCheck() {
        window.open("http://www.google.com");
    }



    var myWindow;

    function openWin() {
        myWindow = window.open("", "myWindow", "width=200,height=100");
        myWindow.document.write(" < p > This is 'myWindow' < /p>");
    }

    function closeWin() {
        myWindow.close();
    }


    /*LOCATION*/
    function locationGet() {
        alert(location.href);
    }

    function locationAssign() {
        location.assign("http://www.w3schools.com");
    }

    function locationReplace() {
        location.replace("http://www.w3schools.com");
    }

    function locationHostName() {
        alert('hostname:' + location.hostname);
        alert('protocol:' + location.protocol);
        alert('pathname:' + location.pathname);
        location.hash = "part5";
        alert('hash:' + location.hash);
    }
    /*HISTORY*/
    function goBack() {
        window.history.back();
    }

    function goBack() {
        window.history.go(-2);
    }
    /*SCREEN*/
    function screenWidth() {
        alert(screen.width)
    }

    function screenHeigth() {
        alert(screen.height)
    }
    /*CSS POPUP*/
    function cssPopup() {
        var popup = document.getElementById('myPopup');
        console.log(popup)
        popup.classList.toggle('show');
    }
    /*JS PROMPT*/
    function jsPrompt() {
        var person = prompt("Please enter your name");
        alert(person)
    }

    function jsConfirm() {
        confirm("Press a button!");
    }

    /*COOKIE*/
    function setCookie(cname, cvalue, exdays) {
        alert(2)
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        alert(0)
        var name = cname + "=";
        console.log(document.cookie)
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        alert(1)
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 30);
            }
        }
    }
    /*TIME EVENTS*/
    function hello3Sec() {
        setTimeout(function() {
            alert("Hello");
        }, 3000);
    }

    var c = 0;

    function helloInterval() {
        var stop = setInterval(function() {
            alert("Hello");
            c++;
            if (c == 2) {
                clearInterval(stop);
            }
        }, 3000);
    }
    /*DATE*/
    function showDate() {
        var d = new Date();
        alert(d);
    }
    /*URI Fn*/
    function encodeUri() {
        var uri = "my test.asp?name=saurabh&car=bmw";
        var res = encodeURI(uri);
        alert('Encoded: ' + req)
    }

    function decodeUri() {
        var uri = "my test.asp?name=saurabh&car=bmw";
        var req = encodeURI(uri);
        alert('Encoded: ' + req)
        var res = decodeURI(req);
        alert('Decoded: ' + res)
    }

    function changeHash() {
        location.hash = 'part6';
    }

    function hashChangeFn() {
        alert('Hash Changed')
    }

    function selectCar() {
        var car = document.getElementById('mySelect').value;
        alert(car)
    }

    function welcome() {
        alert('WELCOME')
    }

    function focusName(x) {
        x.style.background = "green";
    }

    function blurName(x) {
        x.style.background = "red";
    }
    /*CANVAS*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    /*LOCAL STORAGE*/
    function localStorage() {
        var companyName = document.getElementById('companyName').value;
        localStorage.setItem('company', companyName);
    }

    function getCompanyLocal() {
        document.getElementById('getCompanyName').innerHTML = localStorage.getItem('company');
    }

    /*WEBSOCKET*/
    function WebSocketTest() {
        if ("WebSocket" in window) {
            alert("WebSocket is supported by your Browser!");

            // Let us open a web socket
            var ws = new WebSocket("ws://localhost:9998/echo");

            ws.onopen = function() {
                // Web Socket is connected, send data using send()
                ws.send("Message to send");
                alert("Message is sent...");
            };

            ws.onmessage = function(evt) {
                var received_msg = evt.data;
                alert("Message is received...");
            };

            ws.onclose = function() {
                // websocket is closed.
                alert("Connection is closed...");
            };
        } else {
            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }
    }
    