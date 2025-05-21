// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addAlphaArxivLink);
} else {
  addAlphaArxivLink();
}

function addAlphaArxivLink() {
  // Find the full-text section
  const fullTextDiv = document.querySelector("div.full-text");
  if (!fullTextDiv) return;

  // Find the <ul> inside the full-text section
  const ul = fullTextDiv.querySelector("ul");
  if (!ul) return;

  // Create new <li> and <a>
  const li = document.createElement("li");
  const a = document.createElement("a");

  // Create icon image
  const img = document.createElement("img");
  img.src = "https://static.alphaxiv.org/logos/alphaxiv_logo.png";
  img.alt = "AlphaArxiv Logo";
  img.style.width = "16px";
  img.style.height = "16px";
  img.style.verticalAlign = "middle";
  img.style.marginRight = "6px";

  // Insert icon before text
  a.textContent = ""; // Clear text first
  a.appendChild(img);
  a.appendChild(document.createTextNode("View on AlphaArxiv"));

  a.href = window.location.href.replace("arxiv.org", "alphaxiv.org");
  a.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = a.href;
  });
  li.appendChild(a);

  // Insert the new <li> at the top of the <ul>
  ul.insertBefore(li, ul.firstChild);
}
