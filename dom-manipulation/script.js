// Array of quotes
// const quotes = [
//   { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
//     { text: "Simplicity is the soul of efficiency.", category: "Productivity" },
//       { text: "Talk is cheap. Show me the code.", category: "Programming" }
//       ];
//
//       // Function must be named showRandomQuote (NOT displayRandomQuote)
//       function showRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//           const quote = quotes[randomIndex];
//             const quoteDisplay = document.getElementById('quoteDisplay');
//
//               quoteDisplay.innerHTML = `<p>"${quote.text}" - <em>${quote.category}</em></p>`;
//               }
//
//               // Function to add a new quote
//               function addQuote() {
//                 const textInput = document.getElementById('newQuoteText');
//                   const categoryInput = document.getElementById('newQuoteCategory');
//
//                     const text = textInput.value.trim();
//                       const category = categoryInput.value.trim();
//
//                         if (text && category) {
//                             quotes.push({ text, category });
//                                 textInput.value = '';
//                                     categoryInput.value = '';
//                                         showRandomQuote(); // Show newly added quote
//                                           } else {
//                                               alert('Please fill in both quote and category.');
//                                                 }
//                                                 }
//
//                                                 // Event listener for "Show New Quote" button
//                                                 document.getElementById('newQuote').addEventListener('click', showRandomQuote);
//
