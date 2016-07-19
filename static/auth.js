var allowedUsers = {
    silverhaze : "12345",
    papapaul : "12345",
    xavi : "12345"
};

function validateLoginOnSubmit(theForm) {
    var username = theForm.username;
    var password = theForm.password;

    if (allowedUsers['username'] == password) {
        $(".login-form-container").hide(300, function(){
            $("#fullmap").show(500);
        });
    } else {
        alert("Usuario y/o contraseña incorrectos, por favor intente denuevo!");
    }

    return false;
}
