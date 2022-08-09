const btnShow = document.querySelector('.question__btn');
const secondList = document.querySelector('.faq__list-not_show');

let userLang = navigator.language || navigator.userLanguage; ;
console.log(userLang);

let userBtnHideArr = ['hide', 'Скрыть', 'Приховати', 'Ocultar', 'Ocultar'];
let userBtnShowArr = ['show more','Показать больше', 'Показати більше', 'Mostrar más', 'Mostrar más'];

let userBtnHide = '';
let userBtnShow = '';

if(userLang == 'en-US'){
    userBtnHide = userBtnHideArr[0];
    userBtnShow = userBtnShowArr[0];
}
if(userLang == 'ru'){
    userBtnHide = userBtnHideArr[1];
    userBtnShow = userBtnShowArr[1];
}
if(userLang == 'uk-UA'){
    userBtnHide = userBtnHideArr[2];
    userBtnShow = userBtnShowArr[2];
}
if(userLang == 'es'){
    userBtnHide = userBtnHideArr[3];
    userBtnShow = userBtnShowArr[3];
}
if(userLang == 'pt'){
    userBtnHide = userBtnHideArr[4];
    userBtnShow = userBtnShowArr[4];
}


btnShow.addEventListener('click', ()=>{
    secondList.classList.toggle('_open');
    if(secondList.classList.contains('_open')){
        btnShow.innerHTML = userBtnHide;
    } else {
        btnShow.innerHTML = userBtnShow;
    }
})

//video

const video = document.querySelector('.video')
const playBtn = document.querySelector('.video__button')
const videoOutline = document.querySelector('.video__start')

playBtn.addEventListener('click', ()=>{
    videoOutline.classList.add('not-show')
    video.src = video.src + '?autoplay=1';
})

//адаптация сраного iframe при загрузке страницы (при применении обязательно указывать значение атрибутов высоты и ширины в iframe)
document.addEventListener("DOMContentLoaded", function() { // используем событие загрузки страницы, не включая картинки и прочее
    let iframes = document.querySelectorAll('.iframeAdaptive');
    iframes.forEach(function(i) { // перебираем имеющиеся Iframe с присвоенным нами классом
        let iframeWidth = i.width; // берём из атрибута width ширину
        let iframeHeight = i.height; // берём из атрибута height высоту
        let iframeParent = i.parentNode; // определяем родительский элемент нашего Iframe
        let parentWidth = parseInt(getComputedStyle(iframeParent)['width'])-parseInt(getComputedStyle(iframeParent)['padding-left'])-parseInt(getComputedStyle(iframeParent)['padding-right']); // берём родительский контейнер и высчитываем нужную нам ширину, без учёта padding, margin и border
        let iframeProportion = parentWidth / iframeWidth;
        i.setAttribute('width', parentWidth); // устанавливаем ширину нашим Iframe
        i.setAttribute('height', iframeHeight * iframeProportion); // устанавливаем высоту нашим Iframe
    });
});


