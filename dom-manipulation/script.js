/
	tes = JSON.parse(localStorage.getItem("quotes")) || [
		  { text: "The only way to do great work is to love what you do.", category: "Motivation" }
	];

// Save quotes to localStorage
// function saveQuotes() {
//   localStorage.setItem("quotes", JSON.stringify(quotes));
//   }
//
//   // Show random quote
//   function showRandomQuote() {
//     const quote = quotes[Math.floor(Math.random() * quotes.length)];
//       document.getElementById("quoteDisplay").innerHTML = `
//           <blockquote>"${quote.text}"</blockquote>
//               <footer>- ${quote.category}</footer>
//                 `;
//                   sessionStorage.setItem("lastQuote", JSON.stringify(quote));
//                   }
//
//                   // Add quote
//                   function addQuote() {
//                     const text = document.getElementById("newQuoteText").value.trim();
//                       const category = document.getElementById("newQuoteCategory").value.trim();
//                         if (text && category) {
//                             quotes.push({ text, category });
//                                 saveQuotes();
//                                     showRandomQuote();
//                                         populateCategories();
//                                             document.getElementById("newQuoteText").value = "";
//                                                 document.getElementById("newQuoteCategory").value = "";
//                                                   } else {
//                                                       alert("Enter both quote and category.");
//                                                         }
//                                                         }
//
//                                                         // Export
//                                                         function exportToJsonFile() {
//                                                           const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
//                                                             const url = URL.createObjectURL(blob);
//                                                               const link = document.createElement("a");
//                                                                 link.href = url;
//                                                                   link.download = "quotes.json";
//                                                                     document.body.appendChild(link);
//                                                                       link.click();
//                                                                         document.body.removeChild(link);
//                                                                         }
//
//                                                                         // Import
//                                                                         function importFromJsonFile(event) {
//                                                                           const reader = new FileReader();
//                                                                             reader.onload = function (e) {
//                                                                                 try {
//                                                                                       const imported = JSON.parse(e.target.result);
//                                                                                             if (Array.isArray(imported)) {
//                                                                                                     quotes.push(...imported);
//                                                                                                             saveQuotes();
//                                                                                                                     showRandomQuote();
//                                                                                                                             populateCategories();
//                                                                                                                                     alert("Imported successfully!");
//                                                                                                                                           } else alert("Invalid format.");
//                                                                                                                                               } catch {
//                                                                                                                                                     alert("Error reading file.");
//                                                                                                                                                         }
//                                                                                                                                                           };
//                                                                                                                                                             reader.readAsText(event.target.files[0]);
//                                                                                                                                                             }
//
//                                                                                                                                                             // Populate categories
//                                                                                                                                                             function populateCategories() {
//                                                                                                                                                               const select = document.getElementById("categoryFilter");
//                                                                                                                                                                 const categories = ["all", ...new Set(quotes.map(q => q.category))];
//                                                                                                                                                                   select.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join("");
//                                                                                                                                                                     select.value = localStorage.getItem("selectedCategory") || "all";
//                                                                                                                                                                     }
//
//                                                                                                                                                                     // Filter by category
//                                                                                                                                                                     function filterQuotes() {
//                                                                                                                                                                       const selected = document.getElementById("categoryFilter").value;
//                                                                                                                                                                         localStorage.setItem("selectedCategory", selected);
//                                                                                                                                                                           const filtered = selected === "all" ? quotes : quotes.filter(q => q.category === selected);
//                                                                                                                                                                             const quote = filtered[Math.floor(Math.random() * filtered.length)];
//                                                                                                                                                                               document.getElementById("quoteDisplay").innerHTML = `
//                                                                                                                                                                                   <blockquote>"${quote.text}"</blockquote>
//                                                                                                                                                                                       <footer>- ${quote.category}</footer>
//                                                                                                                                                                                         `;
//                                                                                                                                                                                         }
//
//                                                                                                                                                                                         // Sync with server (mock using JSONPlaceholder)
//                                                                                                                                                                                         function syncWithServer() {
//                                                                                                                                                                                           fetch("https://jsonplaceholder.typicode.com/posts")
//                                                                                                                                                                                               .then(response => response.json())
//                                                                                                                                                                                                   .then(data => {
//                                                                                                                                                                                                         const serverQuotes = data.slice(0, 5).map(item => ({
//                                                                                                                                                                                                                 text: item.title,
//                                                                                                                                                                                                                         category: "Server"
//                                                                                                                                                                                                                               }));
//                                                                                                                                                                                                                                     quotes = serverQuotes; // Server wins in conflict
//                                                                                                                                                                                                                                           saveQuotes();
	//                                                                                                                                                                                                                                                 showRandomQuote();
	//                                                                                                                                                                                                                                                       populateCategories();
//                                                                                                                                                                                                                                                             document.getElementById("syncStatus").textContent = "Synced with server successfully!";
//                                                                                                                                                                                                                                                                   setTimeout(() => document.getElementById("syncStatus").textContent = "", 4000);
//                                                                                                                                                                                                                                                                       })
//                                                                                                                                                                                                                                                                           .catch(err => {
	//                                                                                                                                                                                                                                                                                 document.getElementById("syncStatus").textContent = "Failed to sync: " + err.message;
	//                                                                                                                                                                                                                                                                                     });
//                                                                                                                                                                                                                                                                                     }
//
//                                                                                                                                                                                                                                                                                     // Load page
	//                                                                                                                                                                                                                                                                                     window.onload = function () {
//                                                                                                                                                                                                                                                                                       const last = sessionStorage.getItem("lastQuote");
//                                                                                                                                                                                                                                                                                         if (last) {
//                                                                                                                                                                                                                                                                                             const quote = JSON.parse(last);
//                                                                                                                                                                                                                                                                                                 document.getElementById("quoteDisplay").innerHTML = `
//                                                                                                                                                                                                                                                                                                       <blockquote>"${quote.text}"</blockquote>
//                                                                                                                                                                                                                                                                                                             <footer>- ${quote.category}</footer>
//                                                                                                                                                                                                                                                                                                                 `;
//                                                                                                                                                                                                                                                                                                                   } else {
//                                                                                                                                                                                                                                                                                                                       showRandomQuote();
//                                                                                                                                                                                                                                                                                                                         }
//                                                                                                                                                                                                                                                                                                                           populateCategories();
//                                                                                                                                                                                                                                                                                                                           };
//
//                                                                                                                                                                                                                                                                                                                           // Event Listener
	//                                                                                                                                                                                                                                                                                                                           document.getElementById("newQuote").addEventListener("click", showRandomQuote);
	//
