// script.js
//
// let quotes = JSON.parse(localStorage.getItem('quotes')) || [
//   { text: "The only way to do great work is to love what you do.", category: "Motivation" },
//     { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Success" },
//       { text: "In the middle of every difficulty lies opportunity.", category: "Wisdom" }
//       ];
//
//       let currentFilter = localStorage.getItem('selectedCategory') || 'all';
//
//       // Save quotes to localStorage
//       function saveQuotes() {
//         localStorage.setItem("quotes", JSON.stringify(quotes));
//         }
//
//         // Show a random quote based on the filter
//         function showRandomQuote() {
//           let filteredQuotes = (currentFilter === "all") 
//               ? quotes 
//                   : quotes.filter(q => q.category === currentFilter);
//
//                     if (filteredQuotes.length === 0) {
//                         document.getElementById("quoteDisplay").innerHTML = `<p>No quotes in this category.</p>`;
//                             return;
//                               }
//
//                                 const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
//                                   const quote = filteredQuotes[randomIndex];
//
//                                     document.getElementById("quoteDisplay").innerHTML = `
//                                         <blockquote>"${quote.text}"</blockquote>
//                                             <footer>- ${quote.category}</footer>
//                                               `;
//
//                                                 sessionStorage.setItem("lastQuote", JSON.stringify(quote));
//                                                 }
//
//                                                 // Load last quote & categories
//                                                 window.onload = function () {
//                                                   const last = sessionStorage.getItem("lastQuote");
//                                                     populateCategories();
//                                                       document.getElementById("categoryFilter").value = currentFilter;
//
//                                                         if (last) {
//                                                             const quote = JSON.parse(last);
//                                                                 document.getElementById("quoteDisplay").innerHTML = `
//                                                                       <blockquote>"${quote.text}"</blockquote>
//                                                                             <footer>- ${quote.category}</footer>
//                                                                                 `;
//                                                                                   } else {
//                                                                                       showRandomQuote();
//                                                                                         }
//                                                                                         };
//
//                                                                                         // Show new quote button
//                                                                                         document.getElementById("newQuote").addEventListener("click", showRandomQuote);
//
//                                                                                         // Add quote function
//                                                                                         function addQuote() {
//                                                                                           const text = document.getElementById("newQuoteText").value.trim();
//                                                                                             const category = document.getElementById("newQuoteCategory").value.trim();
//
//                                                                                               if (text && category) {
//                                                                                                   quotes.push({ text, category });
//                                                                                                       saveQuotes();
//                                                                                                           populateCategories();
//                                                                                                               showRandomQuote();
//                                                                                                                   document.getElementById("newQuoteText").value = "";
//                                                                                                                       document.getElementById("newQuoteCategory").value = "";
//                                                                                                                         } else {
//                                                                                                                             alert("Please enter both a quote and category.");
//                                                                                                                               }
//                                                                                                                               }
//
//                                                                                                                               // Export quotes
//                                                                                                                               function exportToJsonFile() {
//                                                                                                                                 const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
//                                                                                                                                   const url = URL.createObjectURL(blob);
//                                                                                                                                     const link = document.createElement("a");
//                                                                                                                                       link.href = url;
//                                                                                                                                         link.download = "quotes.json";
//                                                                                                                                           document.body.appendChild(link);
//                                                                                                                                             link.click();
//                                                                                                                                               document.body.removeChild(link);
//                                                                                                                                               }
//
//                                                                                                                                               // Import quotes
//                                                                                                                                               function importFromJsonFile(event) {
//                                                                                                                                                 const fileReader = new FileReader();
//                                                                                                                                                   fileReader.onload = function (event) {
//                                                                                                                                                       try {
//                                                                                                                                                             const importedQuotes = JSON.parse(event.target.result);
//                                                                                                                                                                   if (Array.isArray(importedQuotes)) {
	//                                                                                                                                                                           quotes.push(...importedQuotes);
//                                                                                                                                                                                   saveQuotes();
	//                                                                                                                                                                                           populateCategories();
	//                                                                                                                                                                                                   alert("Quotes imported successfully!");
//                                                                                                                                                                                                           showRandomQuote();
//                                                                                                                                                                                                                 } else {
	//                                                                                                                                                                                                                         alert("Invalid file format.");
//                                                                                                                                                                                                                               }
	//                                                                                                                                                                                                                                   } catch (e) {
	//                                                                                                                                                                                                                                         alert("Error parsing JSON file.");
//                                                                                                                                                                                                                                             }
//                                                                                                                                                                                                                                               };
//                                                                                                                                                                                                                                                 fileReader.readAsText(event.target.files[0]);
//                                                                                                                                                                                                                                                 }
	//
	//                                                                                                                                                                                                                                                 // Populate dropdown with unique categories
//                                                                                                                                                                                                                                                 function populateCategories() {
//                                                                                                                                                                                                                                                   const select = document.getElementById("categoryFilter");
//                                                                                                                                                                                                                                                     const categories = [...new Set(quotes.map(q => q.category))];
//
	//                                                                                                                                                                                                                                                       select.innerHTML = '<option value="all">All Categories</option>';
//                                                                                                                                                                                                                                                         categories.forEach(cat => {
//                                                                                                                                                                                                                                                             const option = document.createElement("option");
//                                                                                                                                                                                                                                                                 option.value = cat;
//                                                                                                                                                                                                                                                                     option.textContent = cat;
	//                                                                                                                                                                                                                                                                         select.appendChild(option);
//                                                                                                                                                                                                                                                                           });
//                                                                                                                                                                                                                                                                           }
	//
//                                                                                                                                                                                                                                                                           // Filter quotes by selected category
	//                                                                                                                                                                                                                                                                           function filterQuotes() {
//                                                                                                                                                                                                                                                                             const selected = document.getElementById("categoryFilter").value;
	//                                                                                                                                                                                                                                                                               currentFilter = selected;
//                                                                                                                                                                                                                                                                                 localStorage.setItem("selectedCategory", selected);
//                                                                                                                                                                                                                                                                                   showRandomQuote();
	//                                                                                                                                                                                                                                                                                   }
	//
