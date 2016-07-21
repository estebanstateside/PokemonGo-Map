var pokemonGoApp = {};

pokemonGoApp.authFunctionality = (function(){

    var allowedUsers = {
        silverhaze : "amazon1234",
        final1092 : "pokeuber123",
        jcastro43 : "interboy"
    };

    var _init = function(){
        // Check session status
        if("sessionOpen" in localStorage){
          // User is logged in!
          $(".login-form-container").hide(500, function(){
              $("#fullmap").removeClass("transparent");
              $(".map-controls").removeClass("transparent");
          });
        }
    }

    var _validateLoginOnSubmit = function (theForm) {
        var username = theForm.username.value;
        var password = theForm.password.value;

        if (allowedUsers[username] == password) {
            localStorage.setItem("sessionOpen", true);
            $(".login-form-container").hide(500, function(){
                $("#fullmap").removeClass("transparent");
                $(".map-controls").removeClass("transparent");
            });
        } else {
            alert("Usuario y/o contraseña incorrectos, por favor intente denuevo!");
        }

        return false;
    }

    var _killSession = function(){
        localStorage.removeItem("sessionOpen");
        $(".login-form-container").show(500, function(){
            $("#fullmap").addClass("transparent");
            $(".map-controls").addClass("transparent");
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
