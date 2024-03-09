// const QUESTIONS = [
//     {
//         question: 'сколько чего то там?',
//         abswer: 'sfd32-4321',
//         variebles: [
//             {
//                 id: 'sfd32-4321',
//                 label: 'ответ 1'
//             },
//             {
//                 id: 'sfsd2-4321',
//                 label: 'ответ 2'
//             }
//         ]
//     },
// ]


export function test (){
    const btnClearQuests = document.querySelector('.clear-quests')
    const intupQuests = document.querySelectorAll('input')
    const questFrames = document.querySelectorAll('.test-questions__options')
    let arr = [false, false, false ,false]
    let arrTwo =[]
    let questNum = document.querySelector('.tests__test-head-menu-counter')
    let textUserAnswers = []  
    let textCorrectAnswers = ['Вариант А','Вариант Б','Вариант В','Вариант Г','Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    let num = 0
    
    btnClearQuests.onclick = () => {
        intupQuests.forEach(elem=>{
            if(elem.checked){
                elem.checked = !elem.checked 
                arr = [false, false, false ,false ,false]
                arrTwo =[]
                questNum.innerHTML = arrTwo.length +'/5'
            }
        })
        
    }
    let options = document.querySelectorAll('li')
    let optionNum = 0
    let storegeOptionNum = -1
    const fremeTestStart = document.querySelector('.tests__test-start')
    const fremeTest = document.querySelector('.tests__test')
    let storegeAnswer = []
    document.querySelector('.clear').onclick = ()=> {
        localStorage.clear()
        fremeTest.classList.add('active')
        document.querySelector('.tests__answers').classList.remove('active')
    }
   for(let i = 0; i< options.length; i++){
    
        options[i].onclick= ()=>{
            
            
            optionNum = i
            document.querySelector('.start').onclick = ()=>{
                optionNum = i
                arr[optionNum] = true
                console.log(arr);
                fremeTestStart.classList.remove('active')
                fremeTest.classList.add('active')
                localStorage.setItem(optionNum, optionNum);

                
                // console.log(typeof(+g));
                storegeOptionNum = localStorage.getItem(optionNum)
            if (+storegeOptionNum === optionNum) {
                storegeAnswer = localStorage.getItem(textUserAnswers)
                console.log(storegeAnswer);
                fremeTestStart.classList.remove('active')
                document.querySelector('.tests__answers').classList.add('active')
                document.querySelector('.tests__test').classList.remove('active')
                for (let i = 0; i < document.querySelectorAll('.answer-user').length; i++){
                
                    document.querySelectorAll('.answer-user')[i].innerHTML = textUserAnswers[i]
                }
            }
            }
        }
   }
    
    function testAnsers() {
        document.querySelectorAll('.answer-user').forEach(elem =>{
            elem.innerHTML = 'Не ответели'
            textUserAnswers = []
        })
        let f = []
        questFrames.forEach(elem => {
            let questInp = elem.querySelectorAll('input')
            questInp.forEach(e => {
                if(e.checked === true){
                    
                    textUserAnswers.push(e.parentElement.querySelector('label').textContent)
                }
                else{
                    f.push(e)
                    if(f.length>4){
                        f = []
                        textUserAnswers.push('Не ответели')
                    }
                }
                
            })
            f=[]
        })
        for (let n = 0; n < textCorrectAnswers.length; n++){
            document.querySelectorAll('.answer-correct')[n].innerHTML = textCorrectAnswers[n]
        }
        if(textUserAnswers.length != 0){
            for (let i = 0; i < document.querySelectorAll('.answer-user').length; i++){
                
                document.querySelectorAll('.answer-user')[i].innerHTML = textUserAnswers[i]
            }

        }
        else{
            
        }
        document.querySelector('.tests__test').classList.remove('active')
        document.querySelector('.tests__answers').classList.add('active')
        if(document.querySelectorAll('.answer-user')[4].textContent === 'undefined'){
            document.querySelectorAll('.answer-user')[4].innerHTML = 'Не ответели'
        }
        
        document.querySelectorAll('input').forEach(elem =>{
            if (elem.checked === true){
                num = arrTwo.length
                console.log(num,arrTwo.length);
                document.querySelector('.answer-number').innerHTML = num
            }
        })
        localStorage.setItem(textUserAnswers,textUserAnswers)

    }
    document.querySelector('.answers').onclick = testAnsers
    questFrames.forEach(elem=>{
        
        elem.addEventListener('click', ()=> {
            
            for(let i = 0; i < questFrames.length; i++){
               let questInp = questFrames[i].querySelectorAll('input')
               questInp.forEach(inp =>{
                if(inp.checked){
                    
                    arr[i] = true
                    arrTwo = arr.filter((value)=> value === true)
                    questNum.innerHTML = arrTwo.length +'/5'
                }
            })
            }
            
                
            
        })
    })
    let time = 300
    const countDownEl = document.querySelector('.countdown')

    setInterval(updateCountdown, 1000)

    function updateCountdown() {
        let minutes = Math.floor(time/60)
        let hour = Math.floor(time/60/60)
        let seconds= time%60
        seconds=seconds < 10 ? '0' + seconds:seconds
        hour=hour < 10 ? '0' + hour:hour
        minutes=minutes < 10 ? '0' + minutes:minutes
        countDownEl.innerHTML = `${hour}:${minutes}:${seconds}`
        time--
        if(time===0){
            testAnsers()
        }
    }
}