
let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')

let nav_elements = document.querySelector('.menu')

let arrow_question = document.querySelector('.faq-down')

const loader = document.querySelector('.loader')

toggle.addEventListener('click', function() {
    body.classList.toggle('open')
})

nav_elements.addEventListener('click', function() {
    body.classList.remove('open')
})

window.addEventListener('load', setTimeout(() => {
    loader.classList.add('loader-out')
    loader.remove()
}, 2500))



