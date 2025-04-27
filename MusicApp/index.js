let audio=null;

audio= new Audio("./assets/ANIMAL_ARJAN_VAILLY.mp3"); 
var i=0;
var songs=["ANIMAL_ARJAN_VAILLY","Mann_Mera","Morni","Naach_Meri_Rani","russian_bandana","Tell_Me"];
document.getElementById("PlayPause").addEventListener("click",function(){
    toggleAudio();
})

document.getElementById("prev").addEventListener("click",function(){
    if(i>0){
        audio.pause();
    i=(i-1)%songs.length;
    prevsong=songs[i];
    audio= new Audio("./assets/"+prevsong+".mp3"); 
        audio.play();
        document.getElementById("currentplaying").setAttribute("src","assets/"+prevsong+".png");

    }
   
});

document.getElementById("next").addEventListener("click",function(){
    if(i<songs.length){
        audio.pause();
    i=(i+1)%songs.length;
    nextsong=songs[i];
    audio= new Audio("./assets/"+nextsong+".mp3"); 
        audio.play();
        backgroundVideo.play();
        document.getElementById("PlayPause").setAttribute("src","assets/pause.png");
        
        document.getElementById("currentplaying").setAttribute("src","assets/"+nextsong+".png");

    }
    
});



$("div").click(function(){
    var source=$(this).attr("id");

    if(source!=null)
    {
        if(audio){
            audio.pause();
            
        }
        audio= new Audio("./assets/"+source+".mp3");
        audio.play();
        backgroundVideo.play();
        document.getElementById("PlayPause").setAttribute("src","assets/pause.png");
        
        document.getElementById("currentplaying").setAttribute("src","assets/"+source+".png");

        audio.addEventListener("ended", function() {
            backgroundVideo.pause();
            document.getElementById("PlayPause").setAttribute("src","assets/play.png");
        
        });

    }

});

function toggleAudio() {
    if (audio) {
        if (audio.paused) {
            audio.play();
            backgroundVideo.play(); // also play the video
            document.getElementById("PlayPause").setAttribute("src","assets/pause.png");
        }
         else {
            audio.pause();
            backgroundVideo.pause(); // also pause the video
            document.getElementById("PlayPause").setAttribute("src","assets/play.png");
        }
    }
}
