export function menuToggle () {
    const burger = document.querySelector('.tests__menu-burger')

    burger.onclick = () => {
        document.querySelector('.tests__menu').classList.toggle('active')
    }
    const options = document.querySelectorAll('li')
    const btnStart = document.querySelector('.start')
    const btnCancel = document.querySelectorAll('.cancel')
    const fremeTestStart = document.querySelector('.tests__test-start')
    const fremeTest = document.querySelector('.tests__test')


    options.forEach(elem => {
        elem.addEventListener('click', ()=> {
            for(let i = 0; i < options.length; i++){
                options[i].classList.remove('active')

             
            }
            document.querySelector('.tests__text').classList.add('disabled')
            document.querySelector('.tests__answers').classList.remove('active')
            fremeTestStart.classList.add('active')
            fremeTest.classList.remove('active')
            elem.classList.add('active')
            btnStart.onclick = () => {
                fremeTestStart.classList.remove('active')
                fremeTest.classList.add('active')
            }
            btnCancel.forEach(elem=>{
                elem.addEventListener('click',()=>{
                    fremeTestStart.classList.remove('active')
                    fremeTest.classList.remove('active')
                    elem.classList.remove('active')
                    document.querySelector('.tests__text').classList.remove('disabled')
                })
            })
            // btnAnswers.onclick = () => {
            //     fremeTest.classList.remove('active')
            //     frameAnswers.classList.add('active')
            // }   
        })
    })
}

