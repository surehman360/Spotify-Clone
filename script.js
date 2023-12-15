console.log("Welcome to Spotify")

//initialising the varialbes
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("Progress");
let myGif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    { songName: "Song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    { songName: "Song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    { songName: "Song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    { songName: "Song5", filePath: "songs/4.mp3", coverPath: "covers/5.jpg"},
    { songName: "Song6", filePath: "songs/5.mp3", coverPath: "covers/6.jpg"},
    { songName: "Song7", filePath: "songs/6.mp3", coverPath: "covers/7.jpg"},

]

songItems.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-circle-pause")
        myGif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add("fa-circle-play")
        myGif.style.opacity = 0;
    }

})



//Seek progress bar
audioElement.addEventListener('timeupdate', ()=>{

    percentProgress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=percentProgress;

})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = parseInt((audioElement.duration*myProgressBar.value)/100)
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')
    
    })
}
Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        Songnametag.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-circle-pause")
        audioElement.src=  `songs/${songIndex+1}.mp3`
        audioElement.currentTime=0
        audioElement.play()

    
    })
   
    
})
next.addEventListener('click', ()=>{
    if(songIndex<5){
    songIndex+= 1;
    Songnametag.innerText=songs[songIndex].songName;
    audioElement.src=  `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()}
})
backward.addEventListener('click', ()=>{
    if(songIndex>0){
    songIndex-= 1;
    console.log(songIndex)
    Songnametag.innerText=songs[songIndex].songName;
    audioElement.src=  `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()}
})