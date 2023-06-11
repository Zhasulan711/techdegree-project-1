/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    source: "Walter Isaacson",
    citation: "'Steve Jobs'",
    year: 2011,
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "speech",
    year: 1994,
  },
  {
    quote: "Imagination is more important than knowledge.",
    source: "Alice Calaprice",
    citation: "'The Ultimate Quotable Einstein'",
    year: 1940,
  },
  {
    quote: "You may encounter many defeats, but you must not be defeated.",
    source: "Maya Angelou",
    citation: "'I Know Why the Caged Bird Sings'",
    year: 1969,
  },
  {
    quote: "Nothing in life is to be feared; it is only to be understood.",
    source: "Eve Curie",
    citation: "'Madame Curie: A Biography'",
    year: 1937,
  },
];

/***
 * `Randomcolor` function for background color!
 ***/
function Randomcolor() {
  return Math.floor(Math.random() * 256);
}

/***
 * `color` function for background color!
 ***/
function color(value) {
  const randomRGB = `rgb(${value}, ${value}, ${value})`;
  return randomRGB;
}

/***
 * `getRandomQuote` function
***/
const getRandomQuote = function (quotesArr) {
  const randomIndex = Math.floor(Math.random() * quotesArr.length);
  return quotesArr[randomIndex];
};

/***
 * `printQuote` function
***/
const printQuote = function (quoteObject) {
  let html = `<p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source} `;
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation}</span>`;
  }

  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year}</span>`;
  }
  html += `</p>`;
  // set bacground color, i find information in this link https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
  document.body.style.backgroundColor = color(Randomcolor());
  document.getElementById("quote-box").innerHTML = html;
};

/***
 * Generate random interval from 10 to 20 seconds
 */
printQuote(getRandomQuote(quotes));
function getRandomInterval() {
  return Math.floor(Math.random() * (20000 - 10000 + 1000)) + 10000;
}

/***
 * Create a timing function to update the quote at regular intervals
 */
// i find information about regular intervals in this links https://developer.mozilla.org/en-US/docs/Web/API/setInterval and https://doka.guide/js/setinterval/
const intervalID = setInterval(function () {
  printQuote(getRandomQuote(quotes));
}, getRandomInterval());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById("load-quote").addEventListener(
  "click",
  function () {
    printQuote(getRandomQuote(quotes));
  },
  false
);
