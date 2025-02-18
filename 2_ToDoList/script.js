const inputBox = document.getElementById("input-box");
const container= document.getElementById("list-container");

function addTask() {
    if(inputBox.value===""){
        alert("Please Enter a Task")
    }
    else{
    console.log("inside");
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    container.appendChild(li);
    inputBox.value="";
    }
}


container.addEventListener(click,(e)=>{
},false)