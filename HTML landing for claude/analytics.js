/* Я-Фест · микро-конверсии для Яндекс Метрики (счётчик 108186919)
   Подключается на всех страницах после блока Метрики.
   Цели, которые надо создать в кабинете Метрики (тип «JavaScript-событие»):
     - book_click     — клик по кнопке бронирования или старой ссылке на #contact
     - phone_click    — клик по телефону (tel:)
     - email_click    — клик по email (mailto:)
     - vk_click       — клик по соц.сети ВКонтакте
   Основная цель form_submit отслеживается отдельно в обработчиках форм.
*/
(function(){
  var COUNTER = 108186919;
  function reach(goal, params){
    try{ if(typeof ym === 'function') ym(COUNTER, 'reachGoal', goal, params || {}); }catch(e){}
  }
  // Делегирование кликов на document — работает и на динамически добавленных элементах
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a');
    if(!a) return;
    var href = (a.getAttribute('href') || '').toLowerCase();
    if(!href) return;

    var page = location.pathname.replace(/^\//,'') || 'index.html';

    if(href.indexOf('#contact') !== -1){
      reach('book_click', {from: page, text: (a.textContent||'').trim().slice(0,60)});
    } else if(href.indexOf('tel:') === 0){
      reach('phone_click', {from: page});
    } else if(href.indexOf('mailto:') === 0){
      reach('email_click', {from: page});
    } else if(href.indexOf('vk.com') !== -1){
      reach('vk_click', {from: page, url: href});
    }
  }, true);
})();
