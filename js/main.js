document.addEventListener('DOMContentLoaded', function () {

  // ============= Cargar header =============
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
      
      // Activar menú móvil después de cargar el header
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
      if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
          nav.classList.toggle('active');
        });
      }
    })
    .catch(error => {
      console.warn('No se pudo cargar el header:', error);
    });

  // ============= Cargar footer =============
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
      console.warn('No se pudo cargar el footer:', error);
      document.getElementById('footer-container').innerHTML = `
        <footer style="text-align:center; padding:2rem; color:#6B4F4F; background:#E8D5C0;">
          © 2025 C.A. Cosmetóloga
        </footer>
      `;
    });
});