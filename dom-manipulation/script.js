const quotes = [
	  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
	  { text: "Simplicity is the soul of efficiency.", category: "Productivity" },
	  { text: "Talk is cheap. Show me the code.", category: "Programming" }
];

// Display a random quote (using innerHTML as required)
// function displayRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//     const quote = quotes[randomIndex];
//       const quoteDisplay = document.getElementById('quoteDisplay');
//         quoteDisplay.innerHTML = `<p>"${quote.text}" - <em>${quote.category}</em></p>`;
//         }
//
//         // Add new quote
//         function addQuote() {
//           const text = document.getElementById('newQuoteText').value.trim();
//             const category = document.getElementById('newQuoteCategory').value.trim();
//
//               if (text && category) {
//                   quotes.push({ text, category });
//                       document.getElementById('newQuoteText').value = '';
//                           document.getElementById('newQuoteCategory').value = '';
//                               alert('Quote added!');
//                                 } else {
//                                     alert('Please fill in both fields.');
//                                       }
//                                       }
//
//                                       // Button event
//                                       document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
//                                       /
