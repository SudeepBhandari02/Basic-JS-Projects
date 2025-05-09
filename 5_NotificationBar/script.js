let notificationBox = document.getElementById("notification-container");
let successMsg = "<i class='fa-solid fa-circle-check'></i>   Successfully submitted";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i>   Please fix the error";
let invalidMsg = "<i class='fa-solid fa-circle-exclamation'></i>   Invalid input, check again";

function goNotify(msg){
    let notification=document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML=msg;
    notificationBox.appendChild(notification);

    if(msg.includes("error")){
        notification.classList.add("error");
    }
    if(msg.includes("Invalid")){
        notification.classList.add("invalid");
    }

    setTimeout(() => {
        notification.remove();
    }, 6000);
}
