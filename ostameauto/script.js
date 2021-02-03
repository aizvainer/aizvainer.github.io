'use strict';
let language = document.getElementById('language');
let rusLanguage = document.getElementById('rus');
let navButton = document.getElementById('topnav');
let subNav = document.getElementById('sub-nav');
let upperBlock  = document.getElementById('upper-part');
let toggleData = document.getElementById('switch-to-data');
let toggleNumber = document.getElementById('switch-to-number');
let numberSheet = document.getElementById('price-number');
let dataSheet = document.getElementById('price-data');


let topBlock = document.getElementById('top');
let faqBlock = document.getElementById('faq');
let missionBlock = document.getElementById('mission');
let contactBlock = document.getElementById('contactus');

let toStartButton = document.getElementById('to-start');
let toTopButtons = document.getElementsByClassName('to-top');
let toFaqButtons = document.getElementsByClassName('to-faq');
let toMissionButtons = document.getElementsByClassName('to-mission');
let toContactButtons = document.getElementsByClassName('to-contact');

let numberForm = document.getElementById('number-form');
let numberMessageFeild = document.getElementById('number-message');
let numberInput = document.getElementById('number-auto');
let numberPattern = /^[a-z0-9]{2,}$/i;

let dataForm = document.getElementById('data-form');
let dataMessageField = document.getElementById('data-message');
let dataMandatory = document.getElementsByClassName('mandatory');
let dataInput = document.getElementsByClassName('data-input');
let dataCommonInput = document.getElementsByClassName('common');
let dataYear = document.getElementById('data-year');
let dataName = document.getElementById('data-name');
let dataPrice = document.getElementById('data-price');
let dataPhone = document.getElementById('data-phone');
let commonPattern = /^[\S\s]{3,}$/i;
let yearPattern = /^\d\d\d\d$/;
let namePattern = /^[a-zа-яüõöäšž]{2,}$/i;
let pricePattern = /^[\s\-0-9]{1,}[\$\€]?$/;
let phonePattern = /^[0-9\)\(\-\+\s]{2,}$/;

let fileUpload = document.getElementById('file-upload');
let fileLabel = document.getElementById('file-label');

let contactForm = document.getElementById('contact-form');
let contactMessageField = document.getElementById('contact-message');
let contactName = document.getElementById('contact-name');
let contactPhone = document.getElementById('contact-phone');
let contactEmail = document.getElementById('contact-email');
let contactTopic = document.getElementById('contact-topic');
let contactText = document.getElementById('contact-text');
let contactInput = [contactName, contactPhone, contactEmail, contactTopic, contactText];
let emailPattern = /^[0-9a-z\.\-\_]+?@[a-z\-]+\.[a-z]{2,}$/i;

window.addEventListener('scroll', function () {
    if (window.scrollY > 500 && window.innerWidth < 4000) {
        toStartButton.style.visibility = 'visible';
        toStartButton.style.opacity = '1';
    } else {
        toStartButton.style.visibility = 'hidden';
        toStartButton.style.opacity = '0';
    }
});
language.addEventListener('mouseover', function () { rusLanguage.style.visibility = 'visible'; } );
language.addEventListener('mouseout', function () { rusLanguage.style.visibility = 'hidden'; });
navButton.addEventListener('click', function () {
    if (subNav.className == 'sub-nav') {
        subNav.className += ' displaynav';
    } else {
        subNav.className = 'sub-nav';
    }
});
toggleData.addEventListener('click', function () {
    numberSheet.style.display = 'none';
    dataSheet.style.display = 'block';
    upperBlock.className += ' plus-height';
});
toggleNumber.addEventListener('click', function () {
    numberSheet.style.display = 'grid';
    dataSheet.style.display = 'none';
    upperBlock.className = 'upper-part';
});

numberForm.addEventListener('submit', function (form) {
    form.preventDefault();
    if (numberInput.value.trim()) {
         if (numberPattern.test(numberInput.value)) {
            numberMessageFeild.innerText = 'Auto ei leitud';
         } else {
            numberMessageFeild.innerText = 'Kontrollige sisestatud andmete õigsust';
         }
    }
});

dataForm.addEventListener('submit', function (form) {
    form.preventDefault();
    let validity = true;
    for (let elem of dataMandatory) {
        if (!elem.value) {
            elem.style.outline = 'red solid 2px';
            validity = false;
        }
    }
    for (let elem of dataCommonInput) {
        if (!commonPattern.test(elem.value.trim())) {
            elem.style.outline = 'red solid 2px';
            validity = false;
        }
    }
    if (!yearPattern.test(dataYear.value.trim())) {
        dataYear.style.outline = 'red solid 2px';
        validity = false;
    } 
    if (!namePattern.test(dataName.value.trim())) {
        dataName.style.outline = 'red solid 2px';
        validity = false;
    } 
    if (!pricePattern.test(dataPrice.value.trim())) {
        dataPrice.style.outline = 'red solid 2px';
        validity = false;
    } 
    if (!phonePattern.test(dataPhone.value.trim())) {
        dataPhone.style.outline = 'red solid 2px';
        validity = false;
    }

    if (validity) {
        setTimeout(function () { dataMessageField.innerText = 'Teie kiri on saadetud';}, 1000);
        setTimeout(function () { dataMessageField.innerText = '';}, 4000);
    }
});
for (let elem of dataInput) {
    elem.addEventListener('focus', function () {
        elem.style.outline = 'none';
    });
}

fileUpload.addEventListener('change', function () {
    fileLabel.innerText = `ВЫБРАНО ${fileUpload.files.length} ФОТО`;
});

contactForm.addEventListener('submit', function (form) {
    form.preventDefault();
    let validity = true;
    if (!contactName.value || !namePattern.test(contactName.value.trim())) {
        contactName.style.outline = 'red solid 2px';
        validity = false;
    }
    if (!contactEmail.value || !emailPattern.test(contactEmail.value.trim())) {
        contactEmail.style.outline = 'red solid 2px';
        validity = false;
    }
    if (!contactPhone.value || !phonePattern.test(contactPhone.value.trim())) {
        contactPhone.style.outline = 'red solid 2px';
        validity = false;
    }
    if (!contactTopic.value || !commonPattern.test(contactTopic.value.trim())) {
        contactTopic.style.outline = 'red solid 2px';
        validity = false;
    }
    if (!contactText.value || !commonPattern.test(contactText.value.trim())) {
        contactText.style.outline = 'red solid 2px';
        validity = false;
    }

    if (validity) {
        for (let elem of contactInput) {
            elem.style.outline = '#7cfc00 solid 2px';
        }
        setTimeout(function () {
            contactMessageField.innerText = 'Teie kiri on saadetud';
        }, 1000);
        setTimeout(function () {
            contactMessageField.innerText = '';
        }, 4000);
    }
});
for (let elem of contactInput) {
    elem.addEventListener('focus', function () {
        elem.style.outline = 'none';
    })
}


toStartButton.addEventListener('click', function () {
    moveViewport(topBlock);
});

for (let elem of toTopButtons) {
    elem.addEventListener('click', function () {
        moveViewport(topBlock);
    });
}
for (let elem of toFaqButtons) {
    elem.addEventListener('click', function () {
        moveViewport(faqBlock);
    });
}
for (let elem of toMissionButtons) {
    elem.addEventListener('click', function () {
        moveViewport(missionBlock);
    });
}
for (let elem of toContactButtons) {
    elem.addEventListener('click', function () {
        moveViewport(contactBlock);
    });
}


function moveViewport(destination) {
    let position = window.pageYOffset;
    if (position > destination.offsetTop) {
        let handler = setInterval(function () {
            if (position <= destination.offsetTop) {
                clearInterval(handler);
                window.scroll(0, position);  
            }
            window.scroll(0, position);
            position -= 30;
        }, 1);
    }
    else if (position < destination.offsetTop) {
        let handler = setInterval(function () {
            if (position >= destination.offsetTop) {
                clearInterval(handler);
                window.scroll(0, position);  
            }
            window.scroll(0, position);
            position += 30;
        }, 1);
    }
}
