var user = {username: "itu@gmail.com", password: "123456"};

function login() {
    username = document.getElementById("edtUsername").value;
    password = document.getElementById("edtPassword").value;

    if(data(username, password)){
        window.location = "../html/curriculum.html";
    }
    else{
        loginError();
    }
}

function data(username, password){
    if (user.username == username && user.password == password) {
        return true;
    }
    return false;
}

function loginError(){
    var labelError = document.getElementById("lblErrorLogin");
    labelError.hidden = false;
}