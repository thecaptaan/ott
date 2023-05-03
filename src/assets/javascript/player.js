const toggleFullScreen = document.getElementById("toggleFullScreen");
const BoxPlayer = document.getElementById("BoxPlayer");
const BoxVideo = document.getElementById("BoxVideo");
const togglePlayPause = document.getElementById("togglePlayPause");
const togglePlayPauseCont = document.getElementById("togglePlayPauseCont");

BoxVideo.removeAttribute("controls");

// On Video End update icons
BoxVideo.addEventListener("ended", () => {
  togglePlayPause.src = "/play.svg";
});

// Handle play and pause
togglePlayPauseCont.addEventListener("click", togglePlay);

// window.addEventListener("keypress", (e) => {
//   if (e.key == " " || e.code == "Space" || e.code == 0) {
//     e.preventDefault()
//     return false;
//   }
// });

// Toggle Fullscreen on click
toggleFullScreen.addEventListener("click", toggleFullScreenPlayer);

// Toggle Fullscreen whenever 'F'  || 'f' clicked
// window.addEventListener("keypress", (e) => {
//   if (e.key == "f" || "F") {
//     toggleFullScreenPlayer();
//   }
// });
function toggleFullScreenPlayer() {
  if (!window.screenTop && !window.screenY) {
    document.exitFullscreen();
  } else {
    BoxPlayer.requestFullscreen();
  }
}

// Toggle play && pause
function togglePlay() {
  if (BoxVideo.paused) {
    togglePlayPause.src = "/pause.svg";
    BoxVideo.play();
  } else {
    togglePlayPause.src = "/play.svg";
    BoxVideo.pause();
  }
}
