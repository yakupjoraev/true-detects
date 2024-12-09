// Custom scripts

function asideSize() {
   const aside = document.querySelector('.aside');

   if (!aside) {
      return null;
   }

   const btn = document.querySelector('.aside__close');

   btn.addEventListener('click', () => {
      aside.classList.toggle('active');
   })
}

asideSize();

function tabs() {
   const container = document.querySelector('.tabs');
   if (!container) {
      return null;
   }

   const tabButtons = document.querySelectorAll('.tabs__btn');
   const tabContents = document.querySelectorAll('.tabs__content');

   tabButtons.forEach(button => {
      button.addEventListener('click', () => {
         // Удаляем класс active у всех кнопок и контентов
         tabButtons.forEach(btn => btn.classList.remove('active'));
         tabContents.forEach(content => content.classList.remove('active'));

         // Добавляем класс active только той кнопке, на которую кликнули, и соответствующему контенту
         button.classList.add('active');
         const tabContentId = button.getAttribute('data-tab-btn');
         const activeTabContent = document.querySelector(`[data-tab-content="${tabContentId}"]`);
         activeTabContent.classList.add('active');
      });
   });
}

tabs();

function views() {
   const container = document.querySelector('.views');
   if (!container) return;

   const viewButtons = container.querySelectorAll('.views__btn');
   const cards = document.querySelectorAll('.cards');

   viewButtons.forEach(button => {
      button.addEventListener('click', () => {
         // Удаляем класс active у всех кнопок
         viewButtons.forEach(btn => btn.classList.remove('active'));
         button.classList.add('active');

         // Получаем название представления из data-view-btn
         const viewBtnId = button.getAttribute('data-view-btn').toLowerCase();

         // Удаляем все классы представлений у .cards и добавляем текущий
         cards.forEach(card => {
            card.classList.remove('grid', 'list', 'tile'); // Удаляем старые классы
            card.classList.add(viewBtnId); // Добавляем новый класс
         });
      });
   });
}

views();



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      const modalId = btn.dataset.modalId;
      const modal = document.getElementById(modalId);
      modal.classList.add('show');
   });
});

closeModalBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.classList.remove('show');
   });
});

window.addEventListener('click', (event) => {
   if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
   }
});