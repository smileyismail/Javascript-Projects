let quoteText = document.querySelector(".quote");
let authorName = document.querySelector(".author");
let newQuoteBtn = document.querySelector(".new-quote");
let twitterBtn = document.querySelector(".twitter");
let quoteContainer = document.querySelector(".container");
let loader = document.querySelector(".loader");

// init variables
let item;

// loading state
function showLoading(isLoading) {
  if (isLoading) {
    quoteContainer.hidden = true;
    loader.hidden = false;
  }

  if (!isLoading) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

//get quotes
async function getQuote() {
  showLoading(true);
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();

    item = await data[Math.floor(Math.random() * data.length)];

    console.log(item);

    quoteText.innerHTML = item.text;
    authorName.innerHTML = item.author;

    showLoading(false);
  } catch (error) {
    getQuote();
    console.log("Something went wrong");
  }
}

getQuote();

// share quote
function twitterShare() {
  let quote = quoteText.innerHTML;
  let author = authorName.innerHTML;
  const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

  window.open(twitterURL, "_blank");
}

// buttons functionality
twitterBtn.addEventListener("click", twitterShare);
newQuoteBtn.addEventListener("click", getQuote);
