const open = document.querySelector('.open')
const close = document.querySelector('.close')
const container = document.querySelector('.container')
let circle = document.querySelector('.circle')



open.addEventListener('click', () =>{
    container.classList.add('container1')
    circle.classList.add('.circle1')

})

close.addEventListener('click', () => {
    container.classList.remove('container1')
    container.classList.remove('container1')
})