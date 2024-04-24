window.addEventListener("scroll", function() {
  var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 150;
  document.querySelector("footer").style.backgroundColor = `hsl(${scrollPercent}, 50%, 50%)`;
});
