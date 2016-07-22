var pokemonGoApp = {};

pokemonGoApp.authFunctionality = (function(){

    var allowedUsers = {
        silverhaze : "silverlight",
        final1092 : "pokeuber123",
        jcastro43 : "interboy"
    };

    var _init = function(){
        // Check session status
        if("sessionOpen" in localStorage){
          // User is logged in!
          $(".login-form-container").hide(500, function(){
              $(".transparent").removeClass("transparent");
              initMap();
          });
        }
    }

    var _validateLoginOnSubmit = function (theForm) {
        var username = theForm.username.value;
        var password = theForm.password.value;

        if (allowedUsers[username] == password) {
            localStorage.setItem("sessionOpen", true);
            localStorage.setItem("currentUser", username);
            $(".login-form-container").hide(500, function(){
                $(".transparent").removeClass("transparent");
                initMap();
            });
        } else {
            alert("Usuario y/o contraseña incorrectos, por favor intente denuevo!");
        }

        return false;
    }

    var _hideElements = function(){
        $("header, nav, #main").addClass("transparent");
    }

    var _killSession = function(){
        localStorage.removeItem("sessionOpen");
        $(".login-form-container").show(500, function(){
            _hideElements();
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
