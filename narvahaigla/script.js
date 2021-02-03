'use strict';
let dropdownButton1 = document.getElementById('dropdown-btn-1');
let dropdownButton2 = document.getElementById('dropdown-btn-2');
let dropdownButton3 = document.getElementById('dropdown-btn-3');
let dropdownButton4 = document.getElementById('dropdown-btn-4');
let dropdownButton5 = document.getElementById('dropdown-btn-5');
let dropdownButton6 = document.getElementById('dropdown-btn-6');

let dropdownList1 = document.getElementById('dropdown-list-1');
let dropdownList2 = document.getElementById('dropdown-list-2');
let dropdownList3 = document.getElementById('dropdown-list-3');
let dropdownList4 = document.getElementById('dropdown-list-4');
let dropdownList5 = document.getElementById('dropdown-list-5');
let dropdownList6 = document.getElementById('dropdown-list-6');

dropdownButton1.addEventListener('mouseover', function () { dropdownList1.className = 'visible'; } );
dropdownButton1.addEventListener('mouseout', function () { dropdownList1.className = ''; });
dropdownList1.addEventListener('mouseover', function () { dropdownList1.className = 'visible'; } );
dropdownList1.addEventListener('mouseout', function () { dropdownList1.className = ''; } );

dropdownButton2.addEventListener('mouseover', function () { dropdownList2.className = 'visible'; } );
dropdownButton2.addEventListener('mouseout', function () { dropdownList2.className = ''; });
dropdownList2.addEventListener('mouseover', function () { dropdownList2.className = 'visible'; } );
dropdownList2.addEventListener('mouseout', function () { dropdownList2.className = ''; } );

dropdownButton3.addEventListener('mouseover', function () { dropdownList3.className = 'visible'; } );
dropdownButton3.addEventListener('mouseout', function () { dropdownList3.className = ''; });
dropdownList3.addEventListener('mouseover', function () { dropdownList3.className = 'visible'; } );
dropdownList3.addEventListener('mouseout', function () { dropdownList3.className = ''; } );

dropdownButton4.addEventListener('mouseover', function () { dropdownList4.className = 'visible'; } );
dropdownButton4.addEventListener('mouseout', function () { dropdownList4.className = ''; });
dropdownList4.addEventListener('mouseover', function () { dropdownList4.className = 'visible'; } );
dropdownList4.addEventListener('mouseout', function () { dropdownList4.className = ''; } );

dropdownButton5.addEventListener('mouseover', function () { dropdownList5.className = 'visible'; } );
dropdownButton5.addEventListener('mouseout', function () { dropdownList5.className = ''; });
dropdownList5.addEventListener('mouseover', function () { dropdownList5.className = 'visible'; } );
dropdownList5.addEventListener('mouseout', function () { dropdownList5.className = ''; } );

dropdownButton6.addEventListener('mouseover', function () { dropdownList6.className = 'visible'; } );
dropdownButton6.addEventListener('mouseout', function () { dropdownList6.className = ''; });
dropdownList6.addEventListener('mouseover', function () { dropdownList6.className = 'visible'; } );
dropdownList6.addEventListener('mouseout', function () { dropdownList6.className = ''; } );


let sideSearch = document.querySelector('.side-search');
let searchButton = document.getElementById('search-btn');
let searchCloseButton = document.getElementById('search-close-btn');

searchButton.addEventListener('click', function () {
    sideSearch.className += ' visible-search'
});
sideSearch.addEventListener('click', function (e) {
    if (e.target == sideSearch) {
        sideSearch.className = 'side-search';
    }   
});
searchCloseButton.addEventListener('click', function () {
    sideSearch.className = 'side-search'
});


let navToggle = document.getElementById('nav-btn');
let smallNav = document.querySelector('.small-nav');

navToggle.addEventListener('click', function () {
    if (smallNav.className == 'small-nav') {
        smallNav.className += ' visible-nav';
    } else {
        smallNav.className = 'small-nav';
    }
});


let expandButton1 = document.getElementById('expand-btn-1');
let expandButton2 = document.getElementById('expand-btn-2');
let expandButton3 = document.getElementById('expand-btn-3');
let expandButton4 = document.getElementById('expand-btn-4');
let expandButton5 = document.getElementById('expand-btn-5');
let expandButton6 = document.getElementById('expand-btn-6');
let expandButton7 = document.getElementById('expand-btn-7');
let expandButton8 = document.getElementById('expand-btn-8');
let expandButton9 = document.getElementById('expand-btn-9');
let expandButton10 = document.getElementById('expand-btn-10');
let expandButton11 = document.getElementById('expand-btn-11');
let expandButton12 = document.getElementById('expand-btn-12');
let expandButton13 = document.getElementById('expand-btn-13');
let expandButton14 = document.getElementById('expand-btn-14');
let expandButton15 = document.getElementById('expand-btn-15');
let expandButton16 = document.getElementById('expand-btn-16');
let expandButton17 = document.getElementById('expand-btn-17');
let expandButton18 = document.getElementById('expand-btn-18');
let expandButton19 = document.getElementById('expand-btn-19');
let expandButton20 = document.getElementById('expand-btn-20');
let expandButton21 = document.getElementById('expand-btn-21');

let expandedList1 = document.getElementById('expanded-list-1');
let expandedList2 = document.getElementById('expanded-list-2');
let expandedList3 = document.getElementById('expanded-list-3');
let expandedList4 = document.getElementById('expanded-list-4');
let expandedList5 = document.getElementById('expanded-list-5');
let expandedList6 = document.getElementById('expanded-list-6');
let expandedList7 = document.getElementById('expanded-list-7');
let expandedList8 = document.getElementById('expanded-list-8');
let expandedList9 = document.getElementById('expanded-list-9');
let expandedList10 = document.getElementById('expanded-list-10');
let expandedList11 = document.getElementById('expanded-list-11');
let expandedList12 = document.getElementById('expanded-list-12');
let expandedList13 = document.getElementById('expanded-list-13');
let expandedList14 = document.getElementById('expanded-list-14');
let expandedList15 = document.getElementById('expanded-list-15');
let expandedList16 = document.getElementById('expanded-list-16');
let expandedList17 = document.getElementById('expanded-list-17');
let expandedList18 = document.getElementById('expanded-list-18');
let expandedList19 = document.getElementById('expanded-list-19');
let expandedList20 = document.getElementById('expanded-list-20');
let expandedList21 = document.getElementById('expanded-list-21');


expandButton1.addEventListener('click', function () {
    expandList(expandButton1, expandedList1);
});
expandButton2.addEventListener('click', function () {
    expandList(expandButton2, expandedList2);
});
expandButton3.addEventListener('click', function () {
    expandList(expandButton3, expandedList3);
});
expandButton4.addEventListener('click', function () {
    expandList(expandButton4, expandedList4);
});
expandButton5.addEventListener('click', function () {
    expandList(expandButton5, expandedList5);
});
expandButton6.addEventListener('click', function () {
    expandList(expandButton6, expandedList6);
});
expandButton7.addEventListener('click', function () {
    expandList(expandButton7, expandedList7);
});
expandButton8.addEventListener('click', function () {
    expandList(expandButton8, expandedList8);
});
expandButton9.addEventListener('click', function () {
    expandList(expandButton9, expandedList9);
});
expandButton10.addEventListener('click', function () {
    expandList(expandButton10, expandedList10);
});
expandButton11.addEventListener('click', function () {
    expandList(expandButton11, expandedList11);
});
expandButton12.addEventListener('click', function () {
    expandList(expandButton12, expandedList12);
});
expandButton13.addEventListener('click', function () {
    expandList(expandButton13, expandedList13);
});
expandButton14.addEventListener('click', function () {
    expandList(expandButton14, expandedList14);
});
expandButton15.addEventListener('click', function () {
    expandList(expandButton15, expandedList15);
});
expandButton16.addEventListener('click', function () {
    expandList(expandButton16, expandedList16);
});
expandButton17.addEventListener('click', function () {
    expandList(expandButton17, expandedList17);
});
expandButton18.addEventListener('click', function () {
    expandList(expandButton18, expandedList18);
});
expandButton19.addEventListener('click', function () {
    expandList(expandButton19, expandedList19);
});
expandButton20.addEventListener('click', function () {
    expandList(expandButton20, expandedList20);
});
expandButton21.addEventListener('click', function () {
    expandList(expandButton21, expandedList21);
});


function expandList(btn, list) {
    if (btn.className == '') {
        btn.className = 'active-btn';
        list.className = 'visible-list';
    } else {
        btn.className = '';
        list.className = '';
    }
}

let mapImg1 = document.getElementById('map-1');
let mapImg2 = document.getElementById('map-2');

let mapBtn1 = document.getElementById('map-btn-1');
let mapBtn2 = document.getElementById('map-btn-2');

mapBtn1.addEventListener('click', function () {
    mapBtn1.className = 'active';
    mapBtn2.className = '';
    mapImg1.className = 'visible-img';
    mapImg2.className = '';
});

mapBtn2.addEventListener('click', function () {
    mapBtn2.className = 'active';
    mapBtn1.className = '';
    mapImg2.className = 'visible-img';
    mapImg1.className = '';
});