document.addEventListener("DOMContentLoaded", () => {
  function loadHTML(id, url, callback) {
    const container = document.getElementById(id);
    if (!container) {
      console.warn(`Element with ID "${id}" not found.`);
      return;
    }

    fetch(url)
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
        if (callback) callback();
      })
      .catch(err => console.error('Failed to load:', err));
  }

  loadHTML('navbar', 'navbar.html', () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });

  loadHTML('footer', 'footer.html');
});