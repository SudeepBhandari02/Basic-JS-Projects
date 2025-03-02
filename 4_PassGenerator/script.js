let password="";
let length=8;
let isNumAllowed=false;
let isSpecialAllowed=false;

const passwordBox=document.getElementById("password");
const passwordLength=document.getElementById("range");



function rangeHandler(){
    length=passwordLength.value;
    document.getElementById("range-label").innerText=`Password Length : ${length}`
}

function checkboxHandler(){
    isNumAllowed=document.getElementById("num-check").checked?true:false;
    isSpecialAllowed=document.getElementById("sp-char-check").checked?true:false;
}

function generatePassword(){
    password="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumAllowed) str += "0123456789";
    if (isSpecialAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    console.log(password);
    passwordBox.value=password;

}

function copyToClipboard(){
    passwordBox.select();
    window.navigator.clipboard.writeText(password);
}


