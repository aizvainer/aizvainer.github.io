'use strict';
let toggleButton = document.getElementById('toggle');
let mainNav = document.getElementById('main-nav');


let expandProductButton = document.getElementById('expand-product');
let dropdownProductList = document.getElementById('dropdown-product');

let expandPriceButton = document.getElementById('expand-prices');
let dropdownPriceList = document.getElementById('dropdown-prices');

let expandGalleryButton = document.getElementById('expand-gallery');
let dropdownGalleryList = document.getElementById('dropdown-gallery');

toggleButton.addEventListener('click', function () {
    if (!mainNav.className) {
        mainNav.className = 'show-main-nav';
    } else {
        mainNav.className = '';
    }
});

expandProductButton.addEventListener('click', function () {
    expandList(dropdownProductList);
});
expandPriceButton.addEventListener('click', function () {
    expandList(dropdownPriceList);
});
expandGalleryButton.addEventListener('click', function () {
    expandList(dropdownGalleryList);
});

function expandList (list) {
    if (list.className == 'dropdown-list') {
        list.className += ' expanded';
    } else {
        list.className = 'dropdown-list';
    }
}