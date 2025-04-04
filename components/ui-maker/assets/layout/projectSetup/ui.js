fetch('assets/layout/uiConfig.json')
  .then(response => response.json())
  .then(config => {
    const noProjectText = document.getElementById('noProjectText');
    if (config.showNoProjectText) {
      noProjectText.style.display = 'block';
      noProjectText.textContent = config.noProjectMessage || 'NO PROJECT/S SELECTED';
    }

    const createButton = document.getElementById('createButton');
    const overlay = document.getElementById('projectSetupOverlay');
    const closeBtn = document.querySelector('.exit-button');

    createButton.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  });
