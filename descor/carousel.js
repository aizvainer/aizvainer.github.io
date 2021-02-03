let slider = document.getElementById('slider');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let temp1;
let temp2;

prev.addEventListener('click', toPrevious);
next.addEventListener('click', toNext);
let autoMove = setInterval(toNext, 5000);

function toNext() {
    clearInterval(autoMove);
    next.removeEventListener('click', toNext);
    slider.style.transition = 'all 0.5s'
    slider.style.transform = 'translate(-50%)';

    setTimeout (function () {
        temp1 = slider.childNodes[slider.childNodes.length];
        temp2 = slider.childNodes[0];
        slider.insertBefore(temp2, temp1);
        slider.style.transition = 'none'
        slider.style.transform = 'translate(-25%)';
        autoMove = setInterval(toNext, 5000);
        next.addEventListener('click', toNext);
    }, 500);
}

function toPrevious() {
    clearInterval(autoMove);
    prev.removeEventListener('click', toPrevious);
    slider.style.transition = 'all 0.5s'
    slider.style.transform = 'translate(0)';
    
    setTimeout (function() {
        temp1 = slider.childNodes[slider.childNodes.length - 1];
        temp2 = slider.childNodes[0];
        slider.insertBefore(temp1, temp2);
        slider.style.transition = 'none'
        slider.style.transform = 'translate(-25%)';
        autoMove = setInterval(toNext, 5000);
        prev.addEventListener('click', toPrevious);
    }, 500);
}

/*Swipe*/
swipeElement(slider);

function swipeElement(elmnt) {
    let pos1, pos2;


    elmnt.addEventListener('touchstart', touchStart, { passive: false });
    document.addEventListener('touchmove', elementSwipe, { passive: false });
    

    function touchStart(e) {
        e.preventDefault();
        clearInterval(autoMove);
        pos2 = e.touches[0].clientX;
        document.addEventListener('touchend', closeTouchElement, { passive: false });
        document.addEventListener('touchmove', elementSwipe, { passive: false });
        elmnt.removeEventListener('touchstart', touchStart);
    }

    function elementSwipe(e) {
        e.preventDefault();
        pos1 = pos2 - e.touches[0].clientX;
        pos2 = e.touches[0].clientX;
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        if (elmnt.offsetLeft - pos1 > 100) {
            toPrevious();
            elmnt.removeEventListener('touchstart', touchStart);
            closeTouchElement();
            
        } else if (elmnt.offsetLeft - pos1 < -100) {
            toNext();
            elmnt.removeEventListener('touchstart', touchStart);
            closeTouchElement();
        }
    }

    function closeTouchElement() {
        elmnt.style.left = '0px'
        document.removeEventListener('touchend', closeTouchElement);
        document.removeEventListener('touchmove', elementSwipe);
        setTimeout(function () { elmnt.addEventListener('touchstart', touchStart, { passive: false }); }, 500);
    }
}
/*Drag*/
dragElement(slider);

    function dragElement(elmnt) {
    let pos1, pos2;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos2 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        clearInterval(autoMove);
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos2 - e.clientX;
        pos2 = e.clientX;
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        if (elmnt.offsetLeft - pos1 > 100) {
            toPrevious();
            elmnt.onmousedown = null;
            closeDragElement()
            setTimeout(function () { elmnt.onmousedown = dragMouseDown; }, 1000);
            
        } else if (elmnt.offsetLeft - pos1 < -100) {
            toNext();
            elmnt.onmousedown = null;
            closeDragElement()
            setTimeout(function () { elmnt.onmousedown = dragMouseDown; }, 1000);
        }
    }

    function closeDragElement() {
        elmnt.style.left = '0px'
        document.onmouseup = null;
        document.onmousemove = null;
    }
}