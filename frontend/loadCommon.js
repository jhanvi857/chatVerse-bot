function loadHTML(id, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // Run logic AFTER content is loaded
    })
    .catch(err => console.error('Failed to load:', err));
}

loadHTML('navbar', 'navbar.html', () => {
  // This runs after the navbar is loaded
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
loadHTML('footer', 'footer.html');