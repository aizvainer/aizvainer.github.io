let contactForm = document.getElementById('contact-form');
let contactMessageField = document.getElementById('contact-message');
let contactName = document.getElementById('contact-name');
let contactPhone = document.getElementById('contact-phone');
let contactEmail = document.getElementById('contact-email');
let contactTopic = document.getElementById('contact-topic');
let contactText = document.getElementById('contact-text');
let contactCheck = document.getElementById('contact-check');
let contactCheckLabel = document.getElementById('contact-pact');
let contactInput = [contactName, contactPhone, contactEmail, contactTopic, contactText];

let commonPattern = /^[\S\s]{4,}$/i;
let namePattern = /^[a-zа-яüõöäšž]{2,}$/i;
let emailPattern = /^[0-9a-z\.\-\_]+?@[a-z\-]+\.[a-z]{2,}$/i;
let phonePattern = /^[0-9\)\(\-\+\s]{2,}$/;

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
    if (!contactCheck.checked) {
        contactCheckLabel.style.borderBottom = 'red solid 2px';
        validity = false;
    }

    if (validity) {
        for (let elem of contactInput) {
            elem.style.outline = '#7cfc00 solid 2px';
        }
        setTimeout(function () {
            contactMessageField.innerText = 'С вами скоро свяжутся';
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
contactCheck.addEventListener('click', function () {
    contactCheckLabel.style.borderBottom = 'none';
})