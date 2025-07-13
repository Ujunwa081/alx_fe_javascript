const API_URL = 'https://jsonplaceholder.typicode.com/posts';
//const LOCAL_STORAGE_KEY = 'quotes';
//const SYNC_INTERVAL = 10000; // 10 seconds
//
//// Fetch quotes from mock API
//async function fetchQuotesFromServer() {
//  try {
//      const response = await fetch(API_URL);
//          const data = await response.json();
//              return data.map(item => ({
//                    id: item.id.toString(),
//                          author: item.title || 'Unknown',
//                                text: item.body || ''
//                                    }));
//                                      } catch (error) {
//                                          console.error('Error fetching from server:', error);
//                                              return [];
//                                                }
//                                                }
//
//                                                // Post quote to mock API
//                                                async function postQuoteToServer(quote) {
//                                                  try {
//                                                      await fetch(API_URL, {
//                                                            method: 'POST',
//                                                                  headers: { 'Content-Type': 'application/json' },
//                                                                        body: JSON.stringify({
//                                                                                title: quote.author,
//                                                                                        body: quote.text,
//                                                                                                userId: 1
//                                                                                                      })
//                                                                                                          });
//                                                                                                            } catch (error) {
//                                                                                                                console.error('Error posting to server:', error);
//                                                                                                                  }
//                                                                                                                  }
//
//                                                                                                                  // Load from localStorage
//                                                                                                                  function loadLocalQuotes() {
//                                                                                                                    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
//                                                                                                                      return stored ? JSON.parse(stored) : [];
//                                                                                                                      }
//
//                                                                                                                      // Save to localStorage
//                                                                                                                      function saveLocalQuotes(quotes) {
//                                                                                                                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
//                                                                                                                        }
//
//                                                                                                                        // Display on page
//                                                                                                                        function displayQuotes(quotes) {
//                                                                                                                          const container = document.getElementById('quote-container');
//                                                                                                                            container.innerHTML = '';
//                                                                                                                              quotes.forEach(quote => {
//                                                                                                                                  const div = document.createElement('div');
//                                                                                                                                      div.className = 'quote';
//                                                                                                                                          div.textContent = `"${quote.text}" - ${quote.author}`;
//                                                                                                                                              container.appendChild(div);
//                                                                                                                                                });
//                                                                                                                                                }
//
//                                                                                                                                                // Merge local and server data (conflict resolution)
//                                                                                                                                                function mergeQuotes(local, server) {
//                                                                                                                                                  const merged = [...server];
//                                                                                                                                                    const serverIds = new Set(server.map(q => q.id));
//                                                                                                                                                      local.forEach(q => {
//                                                                                                                                                          if (!serverIds.has(q.id)) {
//                                                                                                                                                                merged.push(q);
//                                                                                                                                                                      postQuoteToServer(q);
//                                                                                                                                                                          }
//                                                                                                                                                                            });
//                                                                                                                                                                              return merged;
//                                                                                                                                                                              }
//
//                                                                                                                                                                              // Sync quotes
//                                                                                                                                                                              async function syncQuotes() {
//                                                                                                                                                                                const localQuotes = loadLocalQuotes();
//                                                                                                                                                                                  const serverQuotes = await fetchQuotesFromServer();
//                                                                                                                                                                                    const mergedQuotes = mergeQuotes(localQuotes, serverQuotes);
//                                                                                                                                                                                      saveLocalQuotes(mergedQuotes);
//                                                                                                                                                                                        displayQuotes(mergedQuotes);
//                                                                                                                                                                                          showNotification('Sync completed successfully.');
//                                                                                                                                                                                          }
//
//                                                                                                                                                                                          // Add new quote
//                                                                                                                                                                                          function addQuote(author, text) {
//                                                                                                                                                                                            const newQuote = {
//                                                                                                                                                                                                id: Date.now().toString(),
//                                                                                                                                                                                                    author,
//                                                                                                                                                                                                        text,
//                                                                                                                                                                                                            timestamp: Date.now()
//                                                                                                                                                                                                              };
//                                                                                                                                                                                                                const quotes = loadLocalQuotes();
//                                                                                                                                                                                                                  quotes.push(newQuote);
	//                                                                                                                                                                                                                    saveLocalQuotes(quotes);
	//                                                                                                                                                                                                                      displayQuotes(quotes);
	//                                                                                                                                                                                                                        postQuoteToServer(newQuote);
//                                                                                                                                                                                                                          showNotification('Quote added and sent to server.');
//                                                                                                                                                                                                                          }
//
//                                                                                                                                                                                                                          // Show notification
//                                                                                                                                                                                                                          function showNotification(message) {
	//                                                                                                                                                                                                                            const notify = document.getElementById('notification');
	//                                                                                                                                                                                                                              notify.textContent = message;
//                                                                                                                                                                                                                                setTimeout(() => {
//                                                                                                                                                                                                                                    notify.textContent = '';
//                                                                                                                                                                                                                                      }, 3000);
//                                                                                                                                                                                                                                      }
//
//                                                                                                                                                                                                                                      // Periodic sync
	//                                                                                                                                                                                                                                      setInterval(() => {
	//                                                                                                                                                                                                                                        syncQuotes();
//                                                                                                                                                                                                                                          document.getElementById('sync-status').textContent = 'Last synced at ' + new Date().toLocaleTimeString();
//                                                                                                                                                                                                                                          }, SYNC_INTERVAL);
//
//                                                                                                                                                                                                                                          // Form submit
	//                                                                                                                                                                                                                                          document.getElementById('quote-form').addEventListener('submit', (e) => {
//                                                                                                                                                                                                                                            e.preventDefault();
	//                                                                                                                                                                                                                                              const author = document.getElementById('author').value;
	//                                                                                                                                                                                                                                                const text = document.getElementById('text').value;
//                                                                                                                                                                                                                                                  if (author && text) {
//                                                                                                                                                                                                                                                      addQuote(author, text);
//                                                                                                                                                                                                                                                          document.getElementById('quote-form').reset();
//                                                                                                                                                                                                                                                            }
//                                                                                                                                                                                                                                                            });
//
//                                                                                                                                                                                                                                                            // Manual sync button
	//                                                                                                                                                                                                                                                            document.getElementById('sync-button').addEventListener('click', syncQuotes);
//
//                                                                                                                                                                                                                                                            // On page load
//                                                                                                                                                                                                                                                            document.addEventListener('DOMContentLoaded', () => {
//                                                                                                                                                                                                                                                              const quotes = loadLocalQuotes();
	//                                                                                                                                                                                                                                                                displayQuotes(quotes);
	//                                                                                                                                                                                                                                                                  syncQuotes();
//                                                                                                                                                                                                                                                                  });
//
