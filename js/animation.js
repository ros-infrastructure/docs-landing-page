document.addEventListener('DOMContentLoaded', () => {
  const listDiv = document.querySelector('#contribute');
  const prevButton = document.querySelector('#prev-button-icon');
  const nextButton = document.querySelector('#next-button-icon');
  
  function getCardStep() {
    const firstCard = listDiv.querySelector('.contribute-card');
    const gap = parseInt(window.getComputedStyle(listDiv).getPropertyValue('gap')) || 0;
    return firstCard.offsetWidth + gap;
  }

  function updateButtons() {
    prevButton.disabled = listDiv.scrollLeft <= 0;
    nextButton.disabled = listDiv.scrollLeft + listDiv.clientWidth >= listDiv.scrollWidth;
  }

  prevButton.addEventListener('click', () => {
    listDiv.scrollLeft -= getCardStep();
    updateButtons();
  });

  nextButton.addEventListener('click', () => {
    listDiv.scrollLeft += getCardStep();
    updateButtons();
  });

  updateButtons();
});

// Mobile menu animation
document.addEventListener('DOMContentLoaded', () => {
  const burgerCheckbox = document.querySelector('#burger-checkbox');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  const openMenu = () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    burgerCheckbox.checked = false;
  };

  burgerCheckbox.addEventListener('change', () => {
    if (burgerCheckbox.checked) {
      openMenu();
    } else {
      closeMenu();
    }
  });


  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      closeMenu();
    });
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
});


// Helpful resources animation
document.addEventListener('DOMContentLoaded', () => {
  
  function setInitialState() {
    if (window.innerWidth <= 1180) {
      col2.classList.add('collapsed');
      col3.classList.add('collapsed');
    } else {
      col1.classList.remove('collapsed');
      col2.classList.remove('collapsed');
      col3.classList.remove('collapsed');
    }
  }
  
  function toggleColumn(column) {
    column.classList.toggle('collapsed');
  }

  const col1 = document.querySelector('#helpful-resources-link-list-column-1').closest('.helpful-resources-column');
  const col2 = document.querySelector('#helpful-resources-link-list-column-2').closest('.helpful-resources-column');
  const col3 = document.querySelector('#helpful-resources-link-list-column-3').closest('.helpful-resources-column');
  
  setInitialState()

  window.addEventListener('resize', () => setInitialState());

  document.querySelector('#helpful-resources-chevron-button-1')
  .addEventListener('click', () => toggleColumn(col1));

  document.querySelector('#helpful-resources-chevron-button-2')
  .addEventListener('click', () => toggleColumn(col2));

  document.querySelector('#helpful-resources-chevron-button-3')
  .addEventListener('click', () => toggleColumn(col3)); 
});

// Distributuons animation
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#distributions');
  const showMoreBtn = document.querySelector('#distributions-show-more-button');
  const isTabletView = () => window.innerWidth <= 1023;
  const isMobileView = () => window.innerWidth <= 767;
  let allItems = [...rosDistributions]; 
  let displayedCount = 0; 
  let currentMode = isTabletView();

  function animateCards(startIndex=0) {
    const cards = container.querySelectorAll('.distributions-card');
    for (let i = startIndex; i < cards.length; i++) {
      const card = cards[i];
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease';
        card.style.opacity = '1';
      }, (i - startIndex) * 100);
    }
  }

  function initialRender() {
    currentMode = isTabletView();
    displayedCount = isMobileView() ? 4 : (currentMode ? 9 : allItems.length);
    renderDistributionsCards(container, allItems.slice(0, displayedCount));
    showMoreBtn.style.display = (currentMode && displayedCount < allItems.length) ? 'flex' : 'none';
    animateCards(0);
  }

  showMoreBtn.addEventListener('click', () => {
    const oldCount = displayedCount;
    displayedCount += 5;
    if (displayedCount > allItems.length) displayedCount = allItems.length;
    const newItems = allItems.slice(oldCount, displayedCount);
    newItems.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('distributions-card');
      if(item.label) {
        const label = document.createElement('span');
        label.textContent = item.label.toUpperCase();
        label.classList.add('orange-label');
        div.appendChild(label);
      }
      const title = document.createElement('span');
      title.textContent = item.title;
      title.classList.add('card-title');
      div.appendChild(title);
      const link = document.createElement('a');
      link.textContent = 'Read';
      link.href = item.link || '#';
      link.classList.add('secondary-button', 'small-card-button');
      div.appendChild(link);
      container.appendChild(div);
    });
    if (displayedCount >= allItems.length) showMoreBtn.style.display = 'none';
    animateCards(oldCount);
  });

  window.addEventListener('resize', () => {
    const newMode = isTabletView();
    if (newMode !== currentMode) initialRender();
  });

  initialRender();
});



