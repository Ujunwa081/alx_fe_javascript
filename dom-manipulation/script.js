// Quote data array
// const quotes = [
//   { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
//     { text: "Simplicity is the soul of efficiency.", category: "Productivity" },
//       { text: "Talk is cheap. Show me the code.", category: "Programming" }
//       ];
//
//       // Show a random quote
//       function displayRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//           const quote = quotes[randomIndex];
//             const quoteDisplay = document.getElementById('quoteDisplay');
//
//               // Use innerHTML to insert quote and category
//                 quoteDisplay.innerHTML = `<p>"${quote.text}" - <em>${quote.category}</em></p>`;
//                 }
//
//                 // Add a new quote from user input
//                 function addQuote() {
//                   const textInput = document.getElementById('newQuoteText');
//                     const categoryInput = document.getElementById('newQuoteCategory');
//
//                       const text = textInput.value.trim();
//                         const category = categoryInput.value.trim();
//
//                           if (text && category) {
//                               quotes.push({ text, category });
//                                   textInput.value = '';
//                                       categoryInput.value = '';
//                                           displayRandomQuote(); // Show the new quote
//                                             } else {
//                                                 alert('Please fill in both quote and category.');
//                                                   }
//                                                   }
//
//                                                   // Add event listener for \"Show New Quote\" button
//                                                   document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
//                                                   /
