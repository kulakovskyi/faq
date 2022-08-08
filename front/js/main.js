const btnShow = document.querySelector('.question__btn');
const secondList = document.querySelector('.faq__list-not_show');

btnShow.addEventListener('click', ()=>{
    secondList.classList.toggle('_open');
    if(secondList.classList.contains('_open')){
        btnShow.innerHTML = 'hide'
    } else {
        btnShow.innerHTML = 'show more'
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

//popup

const itemImage = document.querySelectorAll(".verification__need-item")
const popUpFone = document.querySelector(".popup")
const imgBig = document.querySelector('.bigImg')
const closeBtnPopup = document.querySelector('.close-btn')
const body = document.querySelector('body')
const popUpImage = document.querySelector('.popup__image')

function popupPaddingRight() {
    let width = window.innerWidth - body.clientWidth + "px";
    body.style.paddingRight = width;
}

function openPopUp(){
    popUpFone.classList.add('_open')
    popUpImage.classList.add('_open')
    body.classList.add('_lock')
    popupPaddingRight()
}

function  closePopUp(){
    popUpFone.classList.remove('_open')
    popUpImage.classList.remove('_open')
    body.classList.remove('_lock')
    body.style.paddingRight = 0 + "px"
}

itemImage.forEach(item => {
    item.addEventListener("click", () => {
        let imageMinItemSrc = item.querySelector("img").getAttribute('src');
        openPopUp()
        imgBig.setAttribute('src', imageMinItemSrc);
        closeBtnPopup.addEventListener('click', ()=>{
            closePopUp()
        })
        window.addEventListener('click', e =>{
            if(e.target.classList.contains('_open')){
                closePopUp()
            }
        })
    })
})