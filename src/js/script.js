window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#nav').classList.toggle('nav__is-active')
    })



    document.querySelectorAll('.title').forEach(function(el) {
        el.addEventListener('click', function(event) {
            event.target.classList.toggle('alert')
        })
})
})
