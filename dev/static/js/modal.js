function _createModal(options){
   const modal = document.createElement('div');
   modal.classList.add('modal');
   modal.insertAdjacentHTML('afterbegin', `
      <div class="modal-overlay" data-modalclose=true>
         <div class="modal-content" style="width: ${options.width || `75%` }">
            <div class="modal-header">
               <span class="modal-title">
                  ${options.title || ''}
               </span>
               ${options.closable ? `<span class="modal-close" data-modalclose=true>&times;</span>` : ''}
            </div>
            <div class="modal-body">
               ${options.content || ''}
            </div>
            <div class="modal-footer">
            
            </div>
         </div>
      </div>
   `);
   document.body.appendChild(modal);
   return modal;
}

const modalPlugin = function(options){
   const ANIM_SPEED = 200;
   const $modal = _createModal(options);
   let closing = false;
   let target = document.querySelectorAll(options.target);

   const modal = {
      open(){
         !closing && $modal.classList.add('open');
         document.body.style.overflow = 'hidden';

         if(document.documentElement.scrollHeight > window.innerHeight){
            document.body.style.paddingRight = '16px';
         }
         
         // document.body.style.position = 'fixed';
         // document.body.style.top = `-${window.scrollY}px`;
      },

      close(){
         document.body.style.overflow = '';
         document.body.style.paddingRight = '';
         // const scrollY = document.body.style.top;
         // document.body.style.position = '';
         // document.body.style.top = '';
         // window.scrollTo(0, parseInt(scrollY || '0') * -1);

         closing = true;
         $modal.classList.remove('open');
         $modal.classList.add('hide');
         setTimeout(() => {
            $modal.classList.remove('hide');
            closing = false;
         }, ANIM_SPEED);
      },
   };

   if($modal !== null){
   $modal.addEventListener('click', (e) => {
         if(e.target.dataset.modalclose){
            modal.close();
         }
      });
   }
   
   if(target !== null){
      for (let i = 0; i < target.length; i++) {
         const el = target[i];
         el.addEventListener('click', () => {
         modal.open();
      });
      }
      
   }
   

   return modal;
};

const getCar = modalPlugin({
   target: '.get-car-modal',
   title: 'оставьте заявку',
   closable: false,
   content: `
      <p class="modal-subtitle">заполните форму и мы перезвоним вам в течении 15 минут</p>
      <form method="GET">
         <div class="holder">
            <input type="text">
            <label>Ваше имя<span>*</span></label>
         </div>
         <div class="holder">
            <input type="text">
            <label>Ваш телефон<span>*</span></label>
         </div>
         <button>оставить заявку</button>
      </form>
   `,
   width: '360px'
});

const stillRequest = modalPlugin({
   target: '.we-check__button button',
   title: 'оставьте заявку',
   closable: false,
   content: `
      <p class="modal-subtitle">и мы подберем для вас лучший автомобиль</p>
      <form method="GET">
         <div class="holder">
            <input type="text">
            <label>Ваше имя<span>*</span></label>
         </div>
         <div class="holder">
            <input type="text">
            <label>Ваш телефон<span>*</span></label>
         </div>
         <button>оставить заявку</button>
      </form>
   `,
   width: '360px'
});

const outService = modalPlugin({
   target: '.our-service-btn',
   title: 'оставьте заявку',
   closable: false,
   content: `
      <p class="modal-subtitle">и мы подберем для вас лучший автомобиль</p>
      <form method="GET">
         <div class="holder">
            <input type="text">
            <label>Ваше имя<span>*</span></label>
         </div>
         <div class="holder">
            <input type="text">
            <label>Ваш телефон<span>*</span></label>
         </div>
         <button>оставить заявку</button>
      </form>
   `,
   width: '360px'
});

const risks = modalPlugin({
   target: '.risks-button',
   title: 'оставьте заявку',
   closable: false,
   content: `
      <p class="modal-subtitle">и мы подберем для вас лучший автомобиль</p>
      <form method="GET">
         <div class="holder">
            <input type="text">
            <label>Ваше имя<span>*</span></label>
         </div>
         <div class="holder">
            <input type="text">
            <label>Ваш телефон<span>*</span></label>
         </div>
         <button>оставить заявку</button>
      </form>
   `,
   width: '360px'
});

const search = modalPlugin({
   target: '.search-button button',
   title: 'оставьте заявку',
   closable: false,
   content: `
      <p class="modal-subtitle">и мы подберем для вас лучший автомобиль</p>
      <form method="GET">
         <div class="holder">
            <input type="text">
            <label>Ваше имя<span>*</span></label>
         </div>
         <div class="holder">
            <input type="text">
            <label>Ваш телефон<span>*</span></label>
         </div>
         <button>оставить заявку</button>
      </form>
   `,
   width: '360px'
});

const slider = modalPlugin({
   target: '.complete-button button',
   title: 'оставьте заявку',
   closable: false,
   content: `
      <p class="modal-subtitle">и мы подберем для вас лучший автомобиль</p>
      <form method="GET">
         <div class="holder">
            <input type="text">
            <label>Ваше имя<span>*</span></label>
         </div>
         <div class="holder">
            <input type="text">
            <label>Ваш телефон<span>*</span></label>
         </div>
         <button>оставить заявку</button>
      </form>
   `,
   width: '360px'
});

const sliderbtn = modalPlugin({
   target: '.complete-slide-button button',
   title: 'видеоотзыв',
   closable: false,
   content: `
   `,
   width: '360px'
});