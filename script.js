var newUser;
var newPass;
var uname;
var pass;

function register(){
    newUser = document.getElementById('newUsername').value;
    newPass = document.getElementById('newPassword').value;

    window.localStorage.setItem('newUser', newUser);
    window.localStorage.setItem('newPass', newPass);

    location.assign('index.html');
}

function login(){
    uname = document.getElementById('username').value;
    pass = document.getElementById('password').value;

    newUser = window.localStorage.getItem('newUser');
    newPass = window.localStorage.getItem('newPass');

    if(uname == newUser && pass == newPass){
        location.assign("login.html")
    }else{
        window.alert("Username or password is wrong, please try again.")
    }
}

