// Load quotes from localStorage or set default
// let quotes = JSON.parse(localStorage.getItem('quotes')) || [
//   { text: "The only way to do great work is to love what you do.", category: "Motivation" },
//     { text: "Success is not final, failure is not fatal.", category: "Success" },
//       { text: "In every difficulty lies opportunity.", category: "Wisdom" }
//       ];
//
//       // Display a random quote
//       function showRandomQuote() {
//         const category = localStorage.getItem("selectedCategory") || "all";
//           const filtered = category === "all" ? quotes : quotes.filter(q => q.category === category);
//             const randomQuote = filtered[Math.floor(Math.random() * filtered.length)];
//
//               if (randomQuote) {
//                   document.getElementById("quoteDisplay").innerHTML = `
//                         <blockquote>"${randomQuote.text}"</blockquote>
//                               <footer>- ${randomQuote.category}</footer>
//                                   `;
//                                       sessionStorage.setItem("lastQuote", JSON.stringify(randomQuote));
//                                         }
//                                         }
//
//                                         // Add quote
//                                         function addQuote() {
//                                           const text = document.getElementById("newQuoteText").value.trim();
//                                             const category = document.getElementById("newQuoteCategory").value.trim();
//                                               if (!text || !category) return alert("Fill both fields.");
//
//                                                 quotes.push({ text, category });
//                                                   saveQuotes();
//                                                     populateCategories();
//                                                       showRandomQuote();
//
//                                                         document.getElementById("newQuoteText").value = "";
//                                                           document.getElementById("newQuoteCategory").value = "";
//                                                           }
//
//                                                           // Save quotes to localStorage
//                                                           function saveQuotes() {
//                                                             localStorage.setItem("quotes", JSON.stringify(quotes));
//                                                             }
//
//                                                             // Populate category dropdown
//                                                             function populateCategories() {
//                                                               const select = document.getElementById("categoryFilter");
//                                                                 const uniqueCategories = [...new Set(quotes.map(q => q.category))];
//
//                                                                   select.innerHTML = `<option value="all">All Categories</option>`;
//                                                                     uniqueCategories.forEach(category => {
//                                                                         const option = document.createElement("option");
//                                                                             option.value = category;
//                                                                                 option.textContent = category;
//                                                                                     select.appendChild(option);
//                                                                                       });
//
//                                                                                         const savedCategory = localStorage.getItem("selectedCategory") || "all";
//                                                                                           select.value = savedCategory;
//                                                                                           }
//
//                                                                                           // Filter quotes by category
//                                                                                           function filterQuotes() {
//                                                                                             const selectedCategory = document.getElementById("categoryFilter").value;
//                                                                                               localStorage.setItem("selectedCategory", selectedCategory);
//                                                                                                 showRandomQuote();
//                                                                                                 }
//
//                                                                                                 // Export JSON
//                                                                                                 function exportToJsonFile() {
//                                                                                                   const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
//                                                                                                     const link = document.createElement("a");
//                                                                                                       link.href = URL.createObjectURL(blob);
//                                                                                                         link.download = "quotes.json";
//                                                                                                           document.body.appendChild(link);
//                                                                                                             link.click();
//                                                                                                               document.body.removeChild(link);
//                                                                                                               }
//
//                                                                                                               // Import JSON
//                                                                                                               function importFromJsonFile(event) {
//                                                                                                                 const reader = new FileReader();
//                                                                                                                   reader.onload = function(e) {
//                                                                                                                       try {
//                                                                                                                             const imported = JSON.parse(e.target.result);
//                                                                                                                                   if (Array.isArray(imported)) {
//                                                                                                                                           quotes.push(...imported);
//                                                                                                                                                   saveQuotes();
//                                                                                                                                                           populateCategories();
//                                                                                                                                                                   alert("Quotes imported!");
//                                                                                                                                                                           showRandomQuote();
//                                                                                                                                                                                 }
//                                                                                                                                                                                     } catch (err) {
//                                                                                                                                                                                           alert("Invalid JSON file.");
//                                                                                                                                                                                               }
//                                                                                                                                                                                                 };
	//                                                                                                                                                                                                   reader.readAsText(event.target.files[0]);
	//                                                                                                                                                                                                   }
//
//                                                                                                                                                                                                   // Load last quote and categories
	//                                                                                                                                                                                                   window.onload = function () {
//                                                                                                                                                                                                     populateCategories();
//
//                                                                                                                                                                                                       const last = sessionStorage.getItem("lastQuote");
//                                                                                                                                                                                                         if (last) {
//                                                                                                                                                                                                             const quote = JSON.parse(last);
	//                                                                                                                                                                                                                 document.getElementById("quoteDisplay").innerHTML = `
//                                                                                                                                                                                                                       <blockquote>"${quote.text}"</blockquote>
//                                                                                                                                                                                                                             <footer>- ${quote.category}</footer>
	//                                                                                                                                                                                                                                 `;
	//                                                                                                                                                                                                                                   } else {
//                                                                                                                                                                                                                                       showRandomQuote();
//                                                                                                                                                                                                                                         }
//
//                                                                                                                                                                                                                                           document.getElementById("newQuote").addEventListener("click", showRandomQuote);
	//                                                                                                                                                                                                                                           };
	//
