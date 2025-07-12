// Array of quote objects
// const quotes = [
//   { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
//     { text: "Simplicity is the soul of efficiency.", category: "Productivity" },
//       { text: "Talk is cheap. Show me the code.", category: "Programming" }
//       ];
//
//       // Show a random quote
//       function showRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//           const quote = quotes[randomIndex];
//             const quoteDisplay = document.getElementById('quoteDisplay');
//               quoteDisplay.innerText = `"${quote.text}" - ${quote.category}`;
//               }
//
//               // Add a new quote
//               function addQuote() {
//                 const text = document.getElementById('newQuoteText').value.trim();
//                   const category = document.getElementById('newQuoteCategory').value.trim();
//
//                     if (text && category) {
//                         quotes.push({ text, category });
//                             document.getElementById('newQuoteText').value = '';
//                                 document.getElementById('newQuoteCategory').value = '';
//                                     alert('Quote added successfully!');
//                                       } else {
//                                           alert('Please fill in both fields.');
//                                             }
//                                             }
//
//                                             // Event listener for button
//                                             document.getElementById('newQuote').addEventListener('click', showRandomQuote);
//
