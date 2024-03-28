document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');

      header.addEventListener('click', () => {
        if (content.style.display === 'block') {
          content.style.display = 'none';
          icon.textContent = '+';
        } else {
          content.style.display = 'block';
          icon.textContent = '-';
        }
      });
    });
  });
  function dropdown(){
    var menu = document.querySelector(".second-ul")
     menu.classList.toggle("toggle")
 }
