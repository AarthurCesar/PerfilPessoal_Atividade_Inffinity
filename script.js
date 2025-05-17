const items = document.querySelectorAll('.programs-list ul li, .skills-list ol li');
const hoverContainer = document.getElementById('hover-image-container');
const hoverImage = document.getElementById('hover-image');

const imagesMap = {
  'Sistema de RPG Real': 'https://pm1.aminoapps.com/7280/9de359d7e710c1c4ff0b94379b686b2b91ed56b8r1-496-618v2_hq.jpg',
  'Permite ganhar pontos de experiência': 'https://pm1.aminoapps.com/7280/9de359d7e710c1c4ff0b94379b686b2b91ed56b8r1-496-618v2_hq.jpg',
  'Desbloquear novas habilidades ativas e passivas de forma ilimitada': 'https://pm1.aminoapps.com/7280/9de359d7e710c1c4ff0b94379b686b2b91ed56b8r1-496-618v2_hq.jpg',
  'Comunicação': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1YzT1Hwvn0_ucqzBBUtW1dc05yRgAZnd-w&s',
  'Trabalho em equipe': 'https://www.einerd.com/wp-content/uploads/2025/01/solo-leveling-anime-1.jpg',
  'Liderança': 'https://vcfaz.tv/wp/wp-content/uploads/2025/02/Solo-Leveling-season-2-episode-8-Como-Sung-Jin-woo-alcancara-um-nivel-de-poder.png',
  'Empatia': 'https://pm1.aminoapps.com/7280/9de359d7e710c1c4ff0b94379b686b2b91ed56b8r1-496-618v2_hq.jpg',
};

items.forEach(li => {
  li.addEventListener('mouseenter', () => {
    const text = li.textContent.trim();
    const imgSrc = imagesMap[text];
    if (imgSrc) {
      hoverImage.src = imgSrc;
      hoverContainer.style.display = 'block';
    }
  });

  li.addEventListener('mousemove', e => {
    
    const offsetX = 15;
    const offsetY = 15;
    hoverContainer.style.top = (e.clientY + offsetY) + 'px';
    hoverContainer.style.left = (e.clientX + offsetX) + 'px';
  });

  li.addEventListener('mouseleave', () => {
    hoverContainer.style.display = 'none';
    hoverImage.src = '';
  });
});
