const buyItemBtn = document.querySelector('.buy')
const buyForm = document.querySelector('.buy-item')
const sellBtn = document.querySelector('.sellBtn')
const sellBtnForm = document.querySelector('.sellitem')
const foundBtn = document.querySelector('.foundBtn')
const foundBtnForm = document.querySelector('.founditem')
const ideaBtn = document.querySelector('.ideaBtn')
const ideaBtnForm = document.querySelector('.ideaShare')
const postAquestionForm = document.querySelector('.postAquestion')
const postBtn = document.querySelector('.postBtn')
buyItemBtn.addEventListener('click', el=>{
    el.preventDefault()
    buyForm.classList.remove('opacity')
    sellBtnForm.classList.add('opacity')
    foundBtnForm.classList.add('opacity')
    ideaBtnForm.classList.add('opacity')
    postAquestionForm.classList.add('opacity')


})


sellBtn.addEventListener('click', el=>{
    el.preventDefault()
    sellBtnForm.classList.remove('opacity')
    buyForm.classList.add('opacity')
    foundBtnForm.classList.add('opacity')
    ideaBtnForm.classList.add('opacity')
    postAquestionForm.classList.add('opacity')


})

foundBtn.addEventListener('click', el=>{
    el.preventDefault()
    sellBtnForm.classList.add('opacity')
    buyForm.classList.add('opacity')
    foundBtnForm.classList.remove('opacity')
    ideaBtnForm.classList.add('opacity')
    postAquestionForm.classList.add('opacity')


})

ideaBtn.addEventListener('click', el=>{
    el.preventDefault()
    sellBtnForm.classList.add('opacity')
    buyForm.classList.add('opacity')
    foundBtnForm.classList.add('opacity')
    ideaBtnForm.classList.remove('opacity')
    postAquestionForm.classList.add('opacity')

})

postBtn.addEventListener('click', el=>{
    el.preventDefault()
    sellBtnForm.classList.add('opacity')
    buyForm.classList.add('opacity')
    foundBtnForm.classList.add('opacity')
    ideaBtnForm.classList.add('opacity')
    postAquestionForm.classList.remove('opacity')
})
