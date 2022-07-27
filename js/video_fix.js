window.addEventListener("resize", resize, false);

video.height = 100; /* to get an initial width to work with*/
resize();

function resize() {
  videoRatio = video.height / video.width;
  windowRatio = window.innerHeight / window.innerWidth; /* browser size */

  if (windowRatio < videoRatio) {
    if (window.innerHeight > 50) {
      /* smallest video height */
      video.height = window.innerHeight;
    } else {
      video.height = 50;
    }
  } else {
    video.width = window.innerWidth;
  }
}
