let id = setTimeout(function log() {
  console.log("Hello World");
  id = setTimeout(log, 1000);
}, 1000);