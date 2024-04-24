document.getElementById("button").addEventListener("click", function() {
  var citations = [
      "La vie a beaucoup plus d'imagination que nous"
  ];
  var randomCitation = citations[Math.floor(Math.random() * citations.length)];
  document.getElementById("citation").textContent = randomCitation;
});