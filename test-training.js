console.log('hello world')
for (var i = 0; i < 4; i++) {
  ;(function(i) {
    setTimeout(function() {
      console.log(i)
    }, 500)
  })(i)
}

for (var j = 0; j < 5; j++) {
  setTimeout(function() {
    console.log(i)
  }, 500)
}
