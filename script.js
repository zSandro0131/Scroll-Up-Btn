window.addEventListener('scroll' , ()=> {
    const scrollTop = document.getElementById('scrollUpBtn')
    scrollTop.classList.toggle('active' , window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top:0 , behavior:'smooth'
    })
}

