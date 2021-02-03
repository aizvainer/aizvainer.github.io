'use strict';
let body = document.querySelector('body');
let sideNav = document.querySelector('.side-nav');
let toggleSideNav = document.getElementById('side-nav-toggle');
let closeSideNav = document.getElementById('close-side')

let authButtons = document.getElementsByClassName('auth-toggle');
let authCloseButton = document.getElementById('auth-close');
let authForm = document.querySelector('.authorization');

let expButton1 = document.getElementById('list-btn-1');
let expButton2 = document.getElementById('list-btn-2');
let expButton3 = document.getElementById('list-btn-3');
let expButton4 = document.getElementById('list-btn-4');
let expButton5 = document.getElementById('list-btn-5');
let expButton6 = document.getElementById('list-btn-6');
let expButton7 = document.getElementById('list-btn-7');
let expButton8 = document.getElementById('list-btn-8');
let expButton9 = document.getElementById('list-btn-9');
let expButton10 = document.getElementById('list-btn-10');
let expButton11 = document.getElementById('list-btn-11');
let expButton12 = document.getElementById('list-btn-12');

let expList1 = document.getElementById('list-1');
let expList2 = document.getElementById('list-2');
let expList3 = document.getElementById('list-3');
let expList4 = document.getElementById('list-4');
let expList5 = document.getElementById('list-5');
let expList6 = document.getElementById('list-6');
let expList7 = document.getElementById('list-7');
let expList8 = document.getElementById('list-8');
let expList9 = document.getElementById('list-9');
let expList10 = document.getElementById('list-10');
let expList11 = document.getElementById('list-11');
let expList12 = document.getElementById('list-12');

let header = document.querySelector('header');
let toStartButton = document.getElementById('to-start');

for (let button of authButtons) {
    button.addEventListener('click', function() {
        authForm.className = 'authorization visible-auth';
    });
}
authCloseButton.addEventListener ('click', function() {
    authForm.className = 'authorization'
})

toggleSideNav.addEventListener('click', function() {
    if (sideNav.className == 'side-nav') {
        sideNav.className = 'side-nav visible-side';
        body.style.overflowY = 'hidden';
    } 
});
closeSideNav.addEventListener('click', function() {
    sideNav.className = 'side-nav';
        setTimeout(function() {
            body.style.overflowY = 'auto';
        }, 250);
});
sideNav.addEventListener('click', function(e) {
    if (e.target == sideNav) {
        sideNav.className = 'side-nav';
        setTimeout(function() {
            body.style.overflowY = 'auto';
        }, 250);
    }
});

expButton1.addEventListener('click', function() {
    expand(expList1, expButton1);
});
expButton2.addEventListener('click', function() {
    expand(expList2, expButton2);
});
expButton3.addEventListener('click', function() {
    expand(expList3, expButton3);
});
expButton4.addEventListener('click', function() {
    expand(expList4, expButton4);
});
expButton5.addEventListener('click', function() {
    expand(expList5, expButton5);
});
expButton6.addEventListener('click', function() {
    expand(expList6, expButton6);
});
expButton7.addEventListener('click', function() {
    expand(expList7, expButton7);
});
expButton8.addEventListener('click', function() {
    expand(expList8, expButton8);
});
expButton9.addEventListener('click', function() {
    expand(expList9, expButton9);
});
expButton10.addEventListener('click', function() {
    expand(expList10, expButton10);
});
expButton11.addEventListener('click', function() {
    expand(expList11, expButton11);
});
expButton12.addEventListener('click', function() {
    expand(expList12, expButton12);
});

toStartButton.addEventListener('click', function() {
    let currentOffset;
    let handler = setInterval(function() {
        currentOffset = window.pageYOffset;
        if (currentOffset > 0) {
            window.scrollTo(0, currentOffset-20);
        } else {
            clearInterval(handler);
        }
    }, 1);
});

addEventListener('scroll', function () {
    if (window.pageYOffset > 200 && window.innerWidth > 1300) {
        header.className = 'fixed-header';
    } else {
        header.className = '';
    }
    if (window.pageYOffset > 300 && window.innerWidth > 900) {
        toStartButton.className = 'visible-btn';
    } else {
        toStartButton.className = ''
    }
});



function expand(list, button) {
    if (button.className == '') {
        button.className = 'expanded-btn';
        list.className = 'expanded-side visible'
    } else {
        button.className = '';
        list.className = 'expanded-side'
    }
}