var pokemonGoApp = {};

pokemonGoApp.authFunctionality = (function(){

    var allowedUsers = {
        silverhaze : "amazon1234",
        final1092 : "pokeuber123",
        jcastro43 : "interboy"
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
