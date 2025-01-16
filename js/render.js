function renderDistributionsCards(container, items) {
  container.innerHTML = '';

  items.forEach((item) => {
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

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Discover';
    const link = document.createElement('a');
    link.setAttribute('data-text', 'Discover');
    link.href = item.link || '#';
    link.classList.add('secondary-button', 'small-card-button', 'secondary-button-animation');
    link.appendChild(buttonSpan);
    div.appendChild(link);

    container.appendChild(div);
  });
}
