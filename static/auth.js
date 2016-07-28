var pokemonGoApp = {};

pokemonGoApp.authFunctionality = (function(){

    var _init = function(){
        // Check session status
        if("sessionOpen" in localStorage){
          // User is logged in!
          _loginUserAccount(localStorage.currentUser, localStorage.currentPassword);
        }
    }

    var intervals = {
        updateMap : "",
        validateSession : "",
        updateTimers : ""
    }

    var _validateLoginOnSubmit = function (theForm) {
        // Fetch account data
        var username = theForm.username.value;
        var password = theForm.password.value;

        if (username == "" || password == "") {
            alert("Por favor ingrese un usuario y contraseña!");
        } else {
            _loginUserAccount(username, password);
        }

        return false;
    }

    var _loginUserAccount = function(username, password) {
        var requestURL = "/login?username="+username+"&password="+password;
        $.post(requestURL, function(data) {
            if (data == "success") {
                localStorage.setItem("sessionOpen", true);
                localStorage.setItem("currentUser", username);
                localStorage.setItem("currentPassword", password);
                $(".login-form-container").hide(500, function(){
                    $(".transparent").removeClass("transparent");
                    initMap();
                    intervals.updateMap = setInterval(updateMap, 5000);
                    intervals.validateSession = setInterval(_validateSessionData, 5000);
                    intervals.updateTimers = setInterval(updateLabelDiffTime, 1000);
                });
            } else {
                // Destroy session data if existent
                if("sessionOpen" in localStorage){
                    _killSession();
                }
                alert(data);
            }
        });
    }

    var _hideElements = function(){
        $("header, nav, #main").addClass("transparent");
    }

    var _killSession = function(){
        localStorage.removeItem("sessionOpen");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentPassword");
        $(".login-form-container").show(500, function(){
            _hideElements();
        });
        clearInterval(intervals.updateMap);
        clearInterval(intervals.validateSession);
    }

    var _validateSessionData = function() {
        var requestURL = "/login?username="+localStorage.currentUser+"&password="+localStorage.currentPassword;
        $.post(requestURL, function(data) {
            if (data != "success") {
                _killSession();
            }
        });
    }

    return {
        init : _init,
        validateLogin : _validateLoginOnSubmit,
        killSession : _killSession
    }

})();

// Initialize session logic
pokemonGoApp.authFunctionality.init();
