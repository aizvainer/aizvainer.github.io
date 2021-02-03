let slider = document.getElementById('slider');
let dragBlock = document.querySelector('.drag'); 

let slide1 = document.getElementById('first-slide');
let slide2 = document.getElementById('second-slide');
let slide3 = document.getElementById('third-slide');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

let btn1 = document.getElementById('first-button');
let btn2 = document.getElementById('second-button');
let btn3 = document.getElementById('third-button');

let buttons = [btn1, btn2, btn3];
let slides = [slide1, slide2, slide3];
let slidesOrder =  [btn1, btn2, btn3];

let buttonsBounds =  {'btn2':slide1, 'btn3':slide2, 'btn1':slide3};

let currentSlide = slide2;

let autoMove = setInterval(toNext, 5000);

next.addEventListener('click', toNext);
prev.addEventListener('click', toPrevious);

dragBlock.addEventListener('mousedown', dragMouseDown);

btn1.addEventListener('click', navigate1);
btn2.addEventListener('click', navigate2);
btn3.addEventListener('click', navigate3);


function toPrevious() {
    clearInterval(autoMove);
    currentSlide = slides[0];
    buttons[2].className = 'active-btn';
    buttons[0].className = '';
    buttons[1].className = '';
    dragBlock.removeEventListener('mousedown', dragMouseDown);
    dragBlock.removeEventListener('touchstart', touchStart);
    next.removeEventListener('click', toNext);
    prev.removeEventListener('click', toPrevious);
    btn1.removeEventListener('click', navigate1);
    btn2.removeEventListener('click', navigate2);
    btn3.removeEventListener('click', navigate3);
    slides[1].style.transition = 'all 1s';
    slides[1].style.transform = 'translateX(100vw)';

    slides[0].style.transition = 'all 1s';
    slides[0].style.transform = 'translateX(0)';

    slides[2].style.transition = 'none';
    slides[2].style.transform = 'translateX(-100vw)';

    setTimeout(function() {
        slides.splice(0, 0, slides.pop());
        buttons.splice(0, 0, buttons.pop());
        autoMove = setInterval(toNext, 5000);
        next.addEventListener('click', toNext);
        prev.addEventListener('click', toPrevious);
        dragBlock.addEventListener('mousedown', dragMouseDown);
        dragBlock.addEventListener('touchstart', touchStart, { passive: false });
        btn1.addEventListener('click', navigate1);
        btn2.addEventListener('click', navigate2);
        btn3.addEventListener('click', navigate3);
    }, 1000)
}

function toNext() {
    clearInterval(autoMove);
    currentSlide = slides[2];
    buttons[1].className = 'active-btn';
    buttons[0].className = '';
    buttons[2].className = '';
    dragBlock.removeEventListener('mousedown', dragMouseDown);
    dragBlock.removeEventListener('touchstart', touchStart);
    next.removeEventListener('click', toNext);
    prev.removeEventListener('click', toPrevious);
    btn1.removeEventListener('click', navigate1);
    btn2.removeEventListener('click', navigate2);
    btn3.removeEventListener('click', navigate3);
    slides[1].style.transition = 'all 1s';
    slides[1].style.transform = 'translateX(-100vw)';

    slides[0].style.transition = 'none';
    slides[0].style.transform = 'translateX(100vw)';

    slides[2].style.transition = 'all 1s';
    slides[2].style.transform = 'translateX(0)';

    setTimeout(function() {
        slides.push(slides.shift());
        buttons.push(buttons.shift());
        autoMove = setInterval(toNext, 5000);
        next.addEventListener('click', toNext);
        prev.addEventListener('click', toPrevious);
        dragBlock.addEventListener('mousedown', dragMouseDown);
        dragBlock.addEventListener('touchstart', touchStart, { passive: false });
        btn1.addEventListener('click', navigate1);
        btn2.addEventListener('click', navigate2);
        btn3.addEventListener('click', navigate3);
    }, 1000)
}

function navigate (btn) {
    clearInterval(autoMove);
    switch (btn) {
        case 'btn1':
            if (slidesOrder.indexOf(btn1) == slidesOrder.indexOf(buttons[0])-1 ) {
                toPrevious();
            } else if (slidesOrder.indexOf(btn1) == slidesOrder.indexOf(buttons[0])-2 ) {
                toNext(); 
            }
            break;
        case 'btn2':
            if (slidesOrder.indexOf(btn2) > slidesOrder.indexOf(buttons[0])) {
                toNext();
            }
            else if (slidesOrder.indexOf(btn2) < slidesOrder.indexOf(buttons[0])) {
                toPrevious();
            }
            break;
        case 'btn3':
            if (slidesOrder.indexOf(btn3) == slidesOrder.indexOf(buttons[0])+1) {
                toNext();
            } else if (slidesOrder.indexOf(btn3) == slidesOrder.indexOf(buttons[0])+2 ){
                toPrevious();
            }
            break;
    }
}

function navigate1() {
    navigate('btn1');
}
function navigate2() {
    navigate('btn2');
}
function navigate3() {
    navigate('btn3');
}





/*Swipe*/
let pos1, pos2;

dragBlock.addEventListener('touchstart', touchStart, { passive: false });

function touchStart(e) {
    e.preventDefault();
    currentSlide.style.transition = 'none';
    clearInterval(autoMove);
    pos2 = e.touches[0].clientX;
    document.addEventListener('touchend', closeTouchElement, { passive: false });
    document.addEventListener('touchmove', elementSwipe, { passive: false });
    dragBlock.removeEventListener('touchstart', touchStart);
}

function elementSwipe(e) {
    e.preventDefault();
    pos1 = pos2 - e.touches[0].clientX;
    pos2 = e.touches[0].clientX;
    dragBlock.style.left = (dragBlock.offsetLeft - pos1) + 'px';
    currentSlide.style.transform = `translateX(${dragBlock.offsetLeft - pos1}px)`
    if (dragBlock.offsetLeft - pos1 > 100) {
        toPrevious();
        dragBlock.removeEventListener('touchstart', touchStart);
        closeTouchElement(true);
        
    } else if (dragBlock.offsetLeft - pos1 < -100) {
        toNext();
        dragBlock.removeEventListener('touchstart', touchStart);
        closeTouchElement(true);
    }
}

function closeTouchElement(complete) {
    if (complete != true) {
        currentSlide.style.transition = 'all 0.5s';
        currentSlide.style.transform = 'translateX(0)';
        autoMove = setInterval(toNext, 5000);
    }
    document.removeEventListener('touchend', closeTouchElement);
    document.removeEventListener('touchmove', elementSwipe);
    dragBlock.style.left = '0px';
    setTimeout(function () { dragBlock.addEventListener('touchstart', touchStart, { passive: false }); }, 1000);
}

/*Drag*/

function dragMouseDown(e) {
    e.preventDefault();
    currentSlide.style.transition = 'none';
    pos2 = e.clientX;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    clearInterval(autoMove);
    next.removeEventListener('click', toNext);
    prev.removeEventListener('click', toPrevious);
}

function elementDrag(e) {
    e.preventDefault();
    pos1 = pos2 - e.clientX;
    pos2 = e.clientX;
    dragBlock.style.left = dragBlock.offsetLeft - pos1 + 'px';
    currentSlide.style.transform = `translateX(${dragBlock.offsetLeft - pos1}px)`;
    if (dragBlock.offsetLeft - pos1 > 100) {
        toPrevious();
        dragBlock.removeEventListener('mousedown', dragMouseDown);
        closeDragElement(true)
        setTimeout(function () { dragBlock.addEventListener('mousedown', dragMouseDown); }, 1000);
        
    } else if (dragBlock.offsetLeft - pos1 < -100) {
        toNext();
        dragBlock.removeEventListener('mousedown', dragMouseDown);
        closeDragElement(true)
        setTimeout(function () { dragBlock.addEventListener('mousedown', dragMouseDown); }, 1000);
    }
}

function closeDragElement(complete) {
    if (complete != true) {
        currentSlide.style.transition = 'all 0.5s';
        currentSlide.style.transform = 'translateX(0)';
        autoMove = setInterval(toNext, 5000);
    }
    
    dragBlock.style.left = '0px';
    document.onmouseup = null;
    document.onmousemove = null;
    setTimeout (function() {
        next.addEventListener('click', toNext);
        prev.addEventListener('click', toPrevious);
    }, 1000)
}

