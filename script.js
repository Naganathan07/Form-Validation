let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};


function checkRequired(input){
    input.forEach(input => {
        if(input.value.trim() ===''){
            errorInput(input , ` * ${getName(input)} is Required!`);
        }else{
            successInput(input);
        }
    });
}

function getName(input){
    return input.id;
}

function errorInput(input,message){
    let formGrp = input.parentElement;
    formGrp.className ="form-group error ";
    let p = formGrp.querySelector('p');
    p.innerHTML = message;

}

function successInput(input){
    let formGrp = input.parentElement;
    formGrp.className ="form-group success ";
    let p = formGrp.querySelector('p');
    p.innerHTML = "";
}

function checkLength(input,min,max){
if(input.value.trim().length<min){
    errorInput(input , ` * ${getName(input)} must be Greater than ${min} characters`);
}else if(input.value.trim().length<min){
    errorInput(input , ` * ${getName(input)} must be lesser than ${max} characters`);
}else{
    successInput(input);
}
};

function checkConfirmPassword(password,password2){
    if(password.value!=password2.value){
        errorInput(password2 , `* confirm password does not match`);
    }
}

function checkemail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input , `* This not an valid email address`);
    }
}
form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,5,12);
    checkLength(password ,5,10);
    checkConfirmPassword(password,password2);
    checkemail(email);
    
});

