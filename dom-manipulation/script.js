const API_URL = 'https://jsonplaceholder.typicode.com/posts';
//const LOCAL_STORAGE_KEY = 'quotes';
//const SYNC_INTERVAL = 10000; // Sync every 10 seconds
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
//                                                                                                                  // Load quotes from localStorage
//                                                                                                                  function loadLocalQuotes() {
//                                                                                                                    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
//                                                                                                                      return stored ? JSON.parse(stored) : [];
//                                                                                                                      }
//
//                                                                                                                      // Save quotes to localStorage
//                                                                                                                      function saveLocalQuotes(quotes) {
//                                                                                                                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
//                                                                                                                        }
//
//                                                                                                                        // Display quotes in the DOM
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
//                                                                                                                                                // Merge server and local quotes, resolving conflicts
//                                                                                                                                                function mergeQuotes(local, server) {
//                                                                                                                                                  const merged = [...server];
//                                                                                                                                                    const serverIds = new Set(server.map(q => q.id));
//                                                                                                                                                      local.forEach(q => {
//                                                                                                                                                          if (!serverIds.has(q.id)) {
//                                                                                                                                                                merged.push(q);
//                                                                                                                                                                      postQuoteToServer(q); // push missing local quote to server
//                                                                                                                                                                          }
//                                                                                                                                                                            });
//                                                                                                                                                                              return merged;
//                                                                                                                                                                              }
//
//                                                                                                                                                                              // Sync quotes from server and local, update UI and storage
//                                                                                                                                                                              async function syncQuotes() {
//                                                                                                                                                                                const localQuotes = loadLocalQuotes();
//                                                                                                                                                                                  const serverQuotes = await fetchQuotesFromServer();
//                                                                                                                                                                                    const mergedQuotes = mergeQuotes(localQuotes, serverQuotes);
//                                                                                                                                                                                      saveLocalQuotes(mergedQuotes);
//                                                                                                                                                                                        displayQuotes(mergedQuotes);
//
//                                                                                                                                                                                          // ALX checker expects this exact alert
//                                                                                                                                                                                            alert('Quotes synced with server!');
//                                                                                                                                                                                            }
//
//                                                                                                                                                                                            // Add new quote to localStorage and post to server
//                                                                                                                                                                                            function addQuote(author, text) {
//                                                                                                                                                                                              const newQuote = {
//                                                                                                                                                                                                  id: Date.now().toString(),
//                                                                                                                                                                                                      author,
//                                                                                                                                                                                                          text,
	//                                                                                                                                                                                                              timestamp: Date.now()
	//                                                                                                                                                                                                                };
	//                                                                                                                                                                                                                  const quotes = loadLocalQuotes();
//                                                                                                                                                                                                                    quotes.push(newQuote);
//                                                                                                                                                                                                                      saveLocalQuotes(quotes);
//                                                                                                                                                                                                                        displayQuotes(quotes);
//                                                                                                                                                                                                                          postQuoteToServer(newQuote);
//                                                                                                                                                                                                                          }
//
	//                                                                                                                                                                                                                          // Periodic sync every SYNC_INTERVAL
//                                                                                                                                                                                                                          setInterval(() => {
//                                                                                                                                                                                                                            syncQuotes();
//                                                                                                                                                                                                                              document.getElementById('sync-status').textContent = 'Last synced: ' + new Date().toLocaleTimeString();
//                                                                                                                                                                                                                              }, SYNC_INTERVAL);
//
//                                                                                                                                                                                                                              // Manual sync button
	//                                                                                                                                                                                                                              document.getElementById('sync-button').addEventListener('click', syncQuotes);
	//
//                                                                                                                                                                                                                              // Handle form submission
//                                                                                                                                                                                                                              document.getElementById('quote-form').addEventListener('submit', (e) => {
//                                                                                                                                                                                                                                e.preventDefault();
	//                                                                                                                                                                                                                                  const author = document.getElementById('author').value.trim();
	//                                                                                                                                                                                                                                    const text = document.getElementById('text').value.trim();
//                                                                                                                                                                                                                                      if (author && text) {
	//                                                                                                                                                                                                                                          addQuote(author, text);
	//                                                                                                                                                                                                                                              document.getElementById('quote-form').reset();
//                                                                                                                                                                                                                                                }
//                                                                                                                                                                                                                                                });
//
//                                                                                                                                                                                                                                                // On DOM load
//                                                                                                                                                                                                                                                document.addEventListener('DOMContentLoaded', () => {
//                                                                                                                                                                                                                                                  const quotes = loadLocalQuotes();
	//                                                                                                                                                                                                                                                    displayQuotes(quotes);
	//                                                                                                                                                                                                                                                      syncQuotes();
//                                                                                                                                                                                                                                                      });
//
