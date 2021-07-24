const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $pauseButton =  document.querySelector('#pause');

function handlePlay() {
    $video.play();
    $playButton.hidden = true;
    $pauseButton.hidden = false;
} 

function handlePause() {
    $video.pause();
    $pauseButton.hidden = true;
    $playButton.hidden = false;
}

$playButton.addEventListener('click', handlePlay);
$pauseButton.addEventListener('click', handlePause);