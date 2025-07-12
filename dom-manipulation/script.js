const quotes = [
	  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
	  { text: "Simplicity is the soul of efficiency.", category: "Productivity" },
	  { text: "Talk is cheap. Show me the code.", category: "Programming" }
];

// Show a random quote
// function showRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//     const quote = quotes[randomIndex];
//       const quoteDisplay = document.getElementById('quoteDisplay');
//         quoteDisplay.innerHTML = `<p>"${quote.text}" - <em>${quote.category}</em></p>`;
//         }
//
//         // Add a new quote
//         function addQuote() {
//           const textInput = document.getElementById('newQuoteText');
//             const categoryInput = document.getElementById('newQuoteCategory');
//
//               const text = textInput.value.trim();
//                 const category = categoryInput.value.trim();
//
//                   if (text && category) {
//                       quotes.push({ text, category });
//                           textInput.value = '';
//                               categoryInput.value = '';
//                                   showRandomQuote(); // Display the new quote
//                                     } else {
//                                         alert('Please fill in both quote and category.');
//                                           }
//                                           }
//
//                                           // ✅ Create the form dynamically using JavaScript
//                                           function createAddQuoteForm() {
//                                             const formContainer = document.getElementById('quoteFormContainer');
//
//                                               const heading = document.createElement('h3');
//                                                 heading.textContent = 'Add a New Quote';
//
//                                                   const inputText = document.createElement('input');
//                                                     inputText.type = 'text';
//                                                       inputText.placeholder = 'Enter a new quote';
//                                                         inputText.id = 'newQuoteText';
//
//                                                           const inputCategory = document.createElement('input');
//                                                             inputCategory.type = 'text';
//                                                               inputCategory.placeholder = 'Enter quote category';
//                                                                 inputCategory.id = 'newQuoteCategory';
//
//                                                                   const button = document.createElement('button');
//                                                                     button.textContent = 'Add Quote';
//                                                                       button.addEventListener('click', addQuote);
//
//                                                                         // Clear previous form (if any)
//                                                                           formContainer.innerHTML = '';
//
//                                                                             // Append all elements
//                                                                               formContainer.appendChild(heading);
//                                                                                 formContainer.appendChild(inputText);
//                                                                                   formContainer.appendChild(inputCategory);
//                                                                                     formContainer.appendChild(button);
//                                                                                     }
//
//                                                                                     // ✅ Setup event listeners and initialize form
//                                                                                     document.addEventListener('DOMContentLoaded', () => {
//                                                                                       document.getElementById('newQuote').addEventListener('click', showRandomQuote);
//                                                                                         createAddQuoteForm(); // Call it on load
//                                                                                         });
//
