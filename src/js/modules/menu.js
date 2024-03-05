export function menuToggle () {
    const burger = document.querySelector('.tests__menu-burger')

    burger.onclick = () => {
        document.querySelector('.tests__menu').classList.toggle('active')
    }
    const options = document.querySelectorAll('li')

    options.forEach(elem => {
        elem.addEventListener('click', ()=> {
            document.querySelector('.tests__test').classList.add('disabled')
            document.querySelector('.tests__test-start').classList.add('active')
            elem.classList.add('ative')
        })
    })
}
