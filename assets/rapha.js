document.addEventListener('DOMContentLoaded', () => {
  // Estrelas caindo
  const starContainer = document.querySelector('.star-background');

  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = '-10px';
    star.style.width = star.style.height = (2 + Math.random() * 3) + 'px';
    star.style.animationDuration = (5 + Math.random() * 7) + 's';
    starContainer.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 12000);
  }

  setInterval(createStar, 300);

  // Carrossel
  const slides = document.querySelectorAll('.carousel-slide');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.classList.remove('expanded');
    });
  }

  leftArrow.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  rightArrow.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // Expandir caixinha ao clicar no botão "clique aqui"
  slides.forEach(slide => {
    const btn = slide.querySelector('.expand-btn');
    btn.addEventListener('click', () => {
      const isExpanded = slide.classList.contains('expanded');
      if (isExpanded) {
        slide.classList.remove('expanded');
      } else {
        // Fecha outras expansões
        slides.forEach(s => s.classList.remove('expanded'));
        slide.classList.add('expanded');
      }
    });
  });

  // Inicializa com o primeiro slide
  showSlide(0);
});


document.addEventListener('DOMContentLoaded', () => {
  const btnSim = document.getElementById('btn-sim');
  const btnNao = document.getElementById('btn-nao');
  const container = document.querySelector('.button-container');

  btnSim.addEventListener('click', () => {
    btnSim.classList.add('clicked');
  
  });

  function moveButton() {
    const containerRect = container.getBoundingClientRect();
    const btnWidth = btnNao.offsetWidth;
    const btnHeight = btnNao.offsetHeight;

    const maxX = container.clientWidth - btnWidth;
    const maxY = container.clientHeight - btnHeight;

    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    btnNao.style.left = `${randX}px`;
    btnNao.style.top = `${randY}px`;
  }

  // Fugir no mouse
  btnNao.addEventListener('mouseenter', moveButton);

  // Fugir no toque (mobile)
  btnNao.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
  });
});
