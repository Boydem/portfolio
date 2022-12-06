'use strict'



$('.contact-form').submit(function (e) {
    e.preventDefault()
    const nameValue = $('.form-name').val()
    const subjectValue = $('.form-subj').val()
    const msgValue = $('.form-msg').val()
    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=noyemdahan@gmail.com&su=${subjectValue}&body=from:${nameValue}, Name: ${nameValue}, \nMessage:${msgValue}&bcc=someone.else@example.com`
    )
})