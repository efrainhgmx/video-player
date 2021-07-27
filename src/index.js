const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $pauseButton =  document.querySelector('#pause');
const $backwardButton = document.querySelector('#backward');
const $forwardButton = document.querySelector('#forward');
const $progressBar = document.querySelector('#progress');

function handleLoaded() {
    $progressBar.max = $video.duration;
}

function handleTimeUpdate() {
    $progressBar.value = $video.currentTime;
}

function handelInput() {
    $video.currentTime = $progressBar.value;
}

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

function handleBackward() {
    $video.currentTime -= 10;
}

function handleForward() {
    $video.currentTime += 10;
}

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

$progressBar.addEventListener('input', handelInput);

$playButton.addEventListener('click', handlePlay);
$pauseButton.addEventListener('click', handlePause);

$backwardButton.addEventListener('click', handleBackward);
$forwardButton.addEventListener('click', handleForward);