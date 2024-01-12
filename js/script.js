


var user = document.querySelector('#user');
var email = document.querySelector('#email');
var pass = document.querySelector('#pass');
var user_err = document.querySelector('#user_err');
var email_err = document.querySelector('#email_err');
var pass_err = document.querySelector('#pass_err');
var email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pass_regx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

function signup(){
    if (user.value == ""){
        user.style.border = '1px solid #ff0000';
        user_err.innerHTML = "Pleae enter your user name !";
        return false;
    }
    if (email.value == ""){
        email.style.border = '1px solid #ff0000';
        email_err.innerHTML = "Pleae enter your email !";
        return false;
    }
    if (!email_regx.test(email.value)){
        email.style.border = '0.5px solid #ff0000';
        email_err.innerHTML = "Pleae enter valid email !";
        return false;
    }
    if (pass.value == ""){
        pass.style.border = '1px solid #ff0000';
        pass_err.innerHTML = "Pleae enter your password !";
        return false;
    }
    if (!pass_regx.test(pass.value)){
        pass.style.border = '0.5px solid #ff0000';
        pass_err.innerHTML = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long!";
        return false;
    }
    if (pass_regx.test(pass.value)){
        pass.style.border = '0.5px solid #547852';
        pass_err.style.color = '#547852';
        pass_err.innerHTML = "Done !";
    }
    
}
function valid(){
    if (user.value != ""){
        user.style.border = '1px solid #547852';
        user_err.innerHTML = "";
    }
    if (email.value != ""){
        email.style.border = '1px solid #547852';
        email_err.innerHTML = "";
    }
    if (email_regx.test(email.value)){
        email.style.border = '0.5px solid #547852';
        email_err.style.color = '#547852';
        email_err.innerHTML = "Done !";        
    }
    if (pass.value != ""){
        pass.style.border = '1px solid #547852';
        pass_err.innerHTML = "";
    }
    if (pass_regx.test(pass.value)){
        pass.style.border = '0.5px solid #547852';
        pass_err.innerHTML = "Done !";
    }
}
user.addEventListener('blur', valid);
email.addEventListener('blur', valid);
email_regx.addEventListener('blur', valid);
pass.addEventListener('blur', valid);
pass_regx.addEventListener('blur', valid);














// Loop


// for(var i=3;i<=10;i+=2){
//     document.write("<br>");
//     for(var j=0; j<=10; j++){
//         document.write(i+"X"+j+"="+i*j+"<br>");
//     }
// }

        // practise

