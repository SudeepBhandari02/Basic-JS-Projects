const song= document.getElementById("song");
const progress= document.getElementById("slider");
const control= document.getElementById("control-icon");

song.onloadedmetadata = ()=>{
    progress.max=song.duration;
    progress.value=0;
}

control.addEventListener('click',()=>{
    if(control.classList.contains('fa-play')){
        song.play();
        control.classList.remove('fa-play');
        control.classList.add('fa-pause');
    }else{
        song.pause();
        control.classList.remove('fa-pause');
        control.classList.add('fa-play');
    }
})

song.ontimeupdate = () =>{
    progress.value = song.currentTime;
    if (song.currentTime >= song.duration) {
        progress.value = song.duration;
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    }
}

function timeUpdate() {
    song.currentTime=progress.value;
}