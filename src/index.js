const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $pauseButton =  document.querySelector('#pause');

function handlePlay() {
    $video.play();
} 

function handlePause() {
    $video.pause();
}

$playButton.addEventListener('click', handlePlay);
$pauseButton.addEventListener('click', handlePause);