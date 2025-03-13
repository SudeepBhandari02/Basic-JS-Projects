const genratorURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const input = document.getElementById("inputBox");
const qrCode = document.getElementById("qr-code");
let imgBox = document.getElementById("qr-code-container");


function generateQrCode() {
    if(input.value.length>0){
        qrCode.src = genratorURL + input.value;
        imgBox.classList.add("showimg")    
    }else{
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    }
}