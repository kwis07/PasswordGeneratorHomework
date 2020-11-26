function getPassword(){

    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
    var passwordLenght = 128;
    var password = "";

    for (var i=0; i<passwordLenght; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1)
    }


    document.getElementById("password").value = password

}