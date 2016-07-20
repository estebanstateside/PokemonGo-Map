var pokemonGoApp = {};

pokemonGoApp.authFunctionality = (function(){

    var allowedUsers = {
        silverhaze : "12345",
        papapaul : "12345",
        xavi : "12345"
    };

    var _validateLoginOnSubmit = function (theForm) {
        var username = theForm.username.value;
        var password = theForm.password.value;

        if (allowedUsers[username] == password) {
            $(".login-form-container").hide(500, function(){
                $("#fullmap").removeClass("transparent");
            });
        } else {
            alert("Usuario y/o contraseña incorrectos, por favor intente denuevo!");
        }

        return false;
    }

    return {
        validateLogin : _validateLoginOnSubmit
    }

})();
