const dark=document.getElementById('dark')

if(localStorage.getItem('dark')==='enable'){
    document.body.classList.add('mode-dark')
    dark.checked=true
}

dark.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add('mode-dark')
        localStorage.setItem('dark','enable')
    }
    else{
        document.body.classList.remove('mode-dark')
        localStorage.setItem('dark','disable')
    }
})


