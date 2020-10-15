const video = document.getElementById("video");
const play = document.getElementById("play");
const stopbutton = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const toggleVideoStatus = () => {
    video.paused ? video.play() : video.pause()
}
const updatePlayIcon = () => {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>' 
    } else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>' 
    }
}
const stopVideo = () => {
    video.currentTime = 0
    video.pause()
}

const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100
    let mins = Math.floor(video.currentTime / 60)
    mins = mins < 10 ? 0 + String(mins) : mins 
    let secs = Math.floor(video.currentTime % 60)
    secs = secs < 10 ? 0 + String(secs) : secs 
    timestamp.innerHTML = `${mins}:${secs}`
}

const setVideoProgress = () => {
    video.currentTime = (progress.value * video.duration)/100
}
 
video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("timeupdate", updateProgress)

play.addEventListener("click", toggleVideoStatus)
stopbutton.addEventListener("click", stopVideo)
progress.addEventListener("change", setVideoProgress)
