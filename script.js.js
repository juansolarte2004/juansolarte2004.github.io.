<script>
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const habilidadesLista = document.querySelector('.habilidades-lista');
  const habilidades = habilidadesLista.querySelectorAll('li');

  function mostrarHabilidadesGradualmente() {
    habilidades.forEach((habilidad, index) => {
      setTimeout(() => {
        habilidad.style.opacity = '1';
        habilidad.style.transform = 'translateY(0)';
      }, 200 * index);
    });
  }

  const habilidadesSection = document.getElementById('habilidades');
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        mostrarHabilidadesGradualmente();
        observer.unobserve(habilidadesSection);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(habilidadesSection);

  const acercaSection = document.getElementById('acerca');
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    acercaSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
  });
</script>
