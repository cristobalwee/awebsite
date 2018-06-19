var facts = [
  "Typeface vs. Font",
  "Ale vs. Lager",
  "Whiskey vs. Bourbon",
  "Fax machines",
  "Edison"
];

function openAbout() {
  document.getElementById('overlay-about').style.display = 'block';
}

function closeAbout() {
  document.getElementById('overlay-about').style.display = 'none';
}

function openFact(fact) {
  var idx = 0;
  switch(fact) {
    case 'beer':
      idx = 1;
      break;
    case 'whiskey':
      idx = 2;
      break;
    case 'fax':
      idx = 3;
      break;
    case 'edison':
      idx = 4;
      break;
    default:
      break;
  }

  document.getElementById('fact-content').innerHTML = '<h2>' + facts[idx] + '</h2>' + '<p>' + fact + '</p>';
  document.getElementById('overlay-fact').style.display = 'block';
}

function closeFact() {
  document.getElementById('overlay-fact').style.display = 'none';
}
