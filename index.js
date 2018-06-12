function openAbout() {
  document.getElementById('overlay-about').style.display = 'block';
}

function closeAbout() {
  document.getElementById('overlay-about').style.display = 'none';
}

function openFact(fact) {
  document.getElementById('fact-content').innerHTML = '<h2>' + fact + '</h2>' + '<p>facts</p>';
  document.getElementById('overlay-fact').style.display = 'block';
}

function closeFact() {
  document.getElementById('overlay-fact').style.display = 'none';
}
