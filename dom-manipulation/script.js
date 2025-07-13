const QUOTES_API_URL = 'https://mockapi.io/quotes'; // replace with actual mock API URL if provided
//const LOCAL_STORAGE_KEY = 'quotes';
//const SYNC_INTERVAL = 10000; // every 10 seconds
//
//// Utility: Generate unique ID
//function generateId() {
//  return Date.now().toString();
//  }
//
//  // Fetch quotes from the server
//  async function fetchQuotesFromServer() {
//    try {
//        const response = await fetch(QUOTES_API_URL);
//            const data = await response.json();
//                return data;
//                  } catch (error) {
//                      console.error('Fetch error:', error);
//                          return [];
//                            }
//                            }
//
//                            // Post new quote to server
//                            async function postQuoteToServer(quote) {
//                              try {
//                                  await fetch(QUOTES_API_URL, {
//                                        method: 'POST',
//                                              headers: { 'Content-Type': 'application/json' },
//                                                    body: JSON.stringify(quote),
//                                                        });
//                                                          } catch (error) {
//                                                              console.error('Post error:', error);
//                                                                }
//                                                                }
//
//                                                                // Load quotes from localStorage
//                                                                function loadLocalQuotes() {
//                                                                  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
//                                                                    return stored ? JSON.parse(stored) : [];
//                                                                    }
//
//                                                                    // Save quotes to localStorage
//                                                                    function saveLocalQuotes(quotes) {
//                                                                      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
//                                                                      }
//
//                                                                      // Display quotes on the UI
//                                                                      function displayQuotes(quotes) {
//                                                                        const container = document.getElementById('quote-container');
//                                                                          container.innerHTML = '';
//                                                                            quotes.forEach((quote) => {
//                                                                                const div = document.createElement('div');
//                                                                                    div.className = 'quote';
//                                                                                        div.textContent = `"${quote.text}" - ${quote.author}`;
//                                                                                            container.appendChild(div);
//                                                                                              });
//                                                                                              }
//
//                                                                                              // Add quote to UI and storage
//                                                                                              function addQuote(author, text) {
//                                                                                                const newQuote = {
//                                                                                                    id: generateId(),
//                                                                                                        author,
//                                                                                                            text,
//                                                                                                                timestamp: Date.now(),
//                                                                                                                  };
//                                                                                                                    const quotes = loadLocalQuotes();
//                                                                                                                      quotes.push(newQuote);
//                                                                                                                        saveLocalQuotes(quotes);
//                                                                                                                          displayQuotes(quotes);
//                                                                                                                            postQuoteToServer(newQuote);
//                                                                                                                            }
//
//                                                                                                                            // Conflict resolution logic
//                                                                                                                            function mergeQuotes(local, server) {
//                                                                                                                              const merged = [...server];
//                                                                                                                                const serverIds = server.map((q) => q.id);
//                                                                                                                                  local.forEach((q) => {
//                                                                                                                                      if (!serverIds.includes(q.id)) {
//                                                                                                                                            merged.push(q); // local-only quote
//                                                                                                                                                  postQuoteToServer(q); // push to server
//                                                                                                                                                      }
//                                                                                                                                                        });
//                                                                                                                                                          return merged;
//                                                                                                                                                          }
//
//                                                                                                                                                          // Sync local and server data
//                                                                                                                                                          async function syncQuotes() {
//                                                                                                                                                            const localQuotes = loadLocalQuotes();
//                                                                                                                                                              const serverQuotes = await fetchQuotesFromServer();
//
	//                                                                                                                                                                const mergedQuotes = mergeQuotes(localQuotes, serverQuotes);
	//                                                                                                                                                                  saveLocalQuotes(mergedQuotes);
	//                                                                                                                                                                    displayQuotes(mergedQuotes);
//
//                                                                                                                                                                      showNotification('Sync completed');
//                                                                                                                                                                      }
//
	//                                                                                                                                                                      // Periodically check for updates
//                                                                                                                                                                      setInterval(async () => {
//                                                                                                                                                                        await syncQuotes();
//                                                                                                                                                                          document.getElementById('sync-status').textContent = 'Last synced: ' + new Date().toLocaleTimeString();
//                                                                                                                                                                          }, SYNC_INTERVAL);
//
//                                                                                                                                                                          // Notification system
//                                                                                                                                                                          function showNotification(message) {
//                                                                                                                                                                            const notify = document.getElementById('notification');
//                                                                                                                                                                              notify.textContent = message;
//                                                                                                                                                                                setTimeout(() => {
	//                                                                                                                                                                                    notify.textContent = '';
	//                                                                                                                                                                                      }, 3000);
//                                                                                                                                                                                      }
//
//                                                                                                                                                                                      // Event: Form submit
	//                                                                                                                                                                                      document.getElementById('quote-form').addEventListener('submit', (e) => {
	//                                                                                                                                                                                        e.preventDefault();
	//                                                                                                                                                                                          const author = document.getElementById('author').value;
//                                                                                                                                                                                            const text = document.getElementById('text').value;
//                                                                                                                                                                                              if (author && text) {
//                                                                                                                                                                                                  addQuote(author, text);
//                                                                                                                                                                                                      showNotification('Quote added locally and sent to server');
//                                                                                                                                                                                                          document.getElementById('quote-form').reset();
	//                                                                                                                                                                                                            }
	//                                                                                                                                                                                                            });
//
//                                                                                                                                                                                                            // Event: Manual sync button
//                                                                                                                                                                                                            document.getElementById('sync-button').addEventListener('click', syncQuotes);
//
	//                                                                                                                                                                                                            // On load
//                                                                                                                                                                                                            document.addEventListener('DOMContentLoaded', async () => {
//                                                                                                                                                                                                              const quotes = loadLocalQuotes();
//                                                                                                                                                                                                                displayQuotes(quotes);
//                                                                                                                                                                                                                  await syncQuotes();
	//                                                                                                                                                                                                                  });
	//
