// Load saved quotes from localStorage
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

// Select elements
const input = document.getElementById("quoteInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("quoteList");

// Render quotes
function renderQuotes() {
  list.innerHTML = "";

  quotes.forEach((quote, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${quote}
      <button class="delete-btn" onclick="deleteQuote(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

// Add quote
btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  quotes.push(text);
  localStorage.setItem("quotes", JSON.stringify(quotes));

  input.value = "";
  renderQuotes();
});

// Delete quote
function deleteQuote(index) {
  quotes.splice(index, 1);
  localStorage.setItem("quotes", JSON.stringify(quotes));
  renderQuotes();
}

// Load on start
renderQuotes();

