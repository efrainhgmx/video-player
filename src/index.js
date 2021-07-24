const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $pauseButton =  document.querySelector('#pause');

function handlePlay() {
    $video.play();
} 

$playButton.addEventListener('click', handlePlay);