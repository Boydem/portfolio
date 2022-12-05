'use strict'


const $elName = $('#contact form input[id="name"]')
const $elSubj = $('#contact form input[id="subject"]')
const $elMsg = $('#contact form textarea[id="id="contact-msg"]')

$('#contact form').submit(function (ev) {
    ev.preventDefault()
    sendForm()
})

function sendForm() {
    window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=noyemdahan@gmail.com&su=${$elSubj.value}&b%20ody=${$elMsg.value} , Lets talk about it. ${$elName.value}`
}