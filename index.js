
const slide = document.querySelector('.slider'),
    active = document.querySelector('#active'),
    line1 = document.querySelector('#line1'),
    line2 = document.querySelector('#line2'),
    line3 = document.querySelector('#line3'),
    line4 = document.querySelector('#line4'),
    container = document.querySelector('.container'),
    bar =  document.querySelector('.slider-col');

line1.addEventListener('click', function (){
    slide.style.transform="translateX(0)";
    active.style.top = 0;
    container.style.background ='#542385' ;
})

line2.addEventListener('click', function () {
        slide.style.transform = "translateX(-25%)";
        active.style.top = "80px";
        container.style.background = '#964325';
        bar.style.color = '#000';
});
line3.addEventListener('click', function (){
    slide.style.transform="translateX(-50%)";
    active.style.top = "160px";
    container.style.background ='#f7c03a';
    bar.style.color ='#000';
});

line4.addEventListener('click', function (){
    slide.style.transform="translateX(-75%)";
    active.style.top = "240px";
    container.style.background ='#000'
});