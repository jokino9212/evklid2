window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#nav').classList.toggle('nav__is-active')
    })
})
