// script.js
//
// // 1. Initialize the quotes array (from localStorage if available)
// let quotes = JSON.parse(localStorage.getItem("quotes")) || [
//   { text: "The only way to do great work is to love what you do.", category: "Motivation" },
//     { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Success" },
//       { text: "In the middle of every difficulty lies opportunity.", category: "Wisdom" }
//       ];
//
//       // 2. Display a random quote
//       function showRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//           const quote = quotes[randomIndex];
//
//             document.getElementById("quoteDisplay").innerHTML = `
//                 <blockquote>"${quote.text}"</blockquote>
//                     <footer>- ${quote.category}</footer>
//                       `;
//
//                         // Save last shown quote to sessionStorage
//                           sessionStorage.setItem("lastQuote", JSON.stringify(quote));
//                           }
//
//                           // 3. Add new quote
//                           function addQuote() {
//                             const text = document.getElementById("newQuoteText").value.trim();
//                               const category = document.getElementById("newQuoteCategory").value.trim();
//
//                                 if (text && category) {
//                                     const newQuote = { text, category };
//                                         quotes.push(newQuote);
//                                             saveQuotes(); // Save to localStorage
//
//                                                 showRandomQuote();
//
//                                                     document.getElementById("newQuoteText").value = "";
//                                                         document.getElementById("newQuoteCategory").value = "";
//                                                           } else {
//                                                               alert("Please enter both a quote and category.");
//                                                                 }
//                                                                 }
//
//                                                                 // 4. Save quotes to localStorage
//                                                                 function saveQuotes() {
//                                                                   localStorage.setItem("quotes", JSON.stringify(quotes));
//                                                                   }
//
//                                                                   // 5. Import from JSON file
//                                                                   function importFromJsonFile(event) {
//                                                                     const fileReader = new FileReader();
//                                                                       fileReader.onload = function (event) {
//                                                                           try {
//                                                                                 const importedQuotes = JSON.parse(event.target.result);
//                                                                                       if (Array.isArray(importedQuotes)) {
//                                                                                               quotes.push(...importedQuotes);
//                                                                                                       saveQuotes();
//                                                                                                               alert("Quotes imported successfully!");
//                                                                                                                     } else {
//                                                                                                                             alert("Invalid JSON format.");
//                                                                                                                                   }
//                                                                                                                                       } catch (e) {
//                                                                                                                                             alert("Error parsing JSON file.");
//                                                                                                                                                 }
//                                                                                                                                                   };
//                                                                                                                                                     fileReader.readAsText(event.target.files[0]);
//                                                                                                                                                     }
//
//                                                                                                                                                     // 6. Export to JSON file
//                                                                                                                                                     function exportToJsonFile() {
//                                                                                                                                                       const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
//                                                                                                                                                         const url = URL.createObjectURL(blob);
//
//                                                                                                                                                           const link = document.createElement("a");
//                                                                                                                                                             link.href = url;
//                                                                                                                                                               link.download = "quotes.json";
//                                                                                                                                                                 document.body.appendChild(link);
//                                                                                                                                                                   link.click();
//                                                                                                                                                                     document.body.removeChild(link);
//                                                                                                                                                                     }
//
//                                                                                                                                                                     // 7. Event listeners
//                                                                                                                                                                     document.getElementById("newQuote").addEventListener("click", showRandomQuote);
//
//                                                                                                                                                                     // 8. Load last quote or show a random one
//                                                                                                                                                                     window.onload = function () {
//                                                                                                                                                                       const last = sessionStorage.getItem("lastQuote");
//                                                                                                                                                                         if (last) {
//                                                                                                                                                                             const quote = JSON.parse(last);
//                                                                                                                                                                                 document.getElementById("quoteDisplay").innerHTML = `
//                                                                                                                                                                                       <blockquote>"${quote.text}"</blockquote>
	//                                                                                                                                                                                             <footer>- ${quote.category}</footer>
	//                                                                                                                                                                                                 `;
//                                                                                                                                                                                                   } else {
//                                                                                                                                                                                                       showRandomQuote();
	//                                                                                                                                                                                                         }
	//                                                                                                                                                                                                         };
//
