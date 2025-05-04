const quotes = [
  "Believe in yourself and all that you are.",
  "Your only limit is your mind.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths."
];

function generateQuote() {
  const quoteText = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}
