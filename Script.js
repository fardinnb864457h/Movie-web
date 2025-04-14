function playMovie(src) {
  const player = document.getElementById('moviePlayer');
  player.src = src;
  player.play();
}
