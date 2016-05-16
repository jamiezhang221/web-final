var vivus1 = new Vivus('logo-header', {
  duration:200
}, function(r) {
  // optional callback adds class "finished" when done
  vivus1.el.classList.add('finished');
});