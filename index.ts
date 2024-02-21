let navBtn: HTMLElement | null = document.querySelector('.navbar-toggler');
let navList: HTMLElement | null = document.querySelector('.list-group');
let loginBtn : HTMLElement | null = document.querySelector('#login')
let loginCloseBtn: HTMLElement |  null = document.querySelector('#close')
let loginForm: HTMLElement | null = document.querySelector('.black-bg')
let loginID: HTMLInputElement | null = document.querySelector('#id')
let loginPassword: HTMLInputElement | null = document.querySelector('#password')
let submitBtn:HTMLElement | null = document.querySelector('form')
let image1:HTMLElement | null = document.querySelector('#btn1')
let image2:HTMLElement | null = document.querySelector('#btn2')
let image3:HTMLElement | null = document.querySelector('#btn3')






if ( navBtn instanceof HTMLElement){
    navBtn.addEventListener('click', function(){
        if ( navList instanceof HTMLElement){
            navList.classList.toggle('list-group-ani')
        }
    })
}

if (loginBtn instanceof HTMLElement){
    loginBtn.addEventListener('click',function(){
        if (loginForm instanceof HTMLElement){
            loginForm.classList.add('display-show')
        }
    })
}

if (loginCloseBtn instanceof HTMLElement){
    loginCloseBtn.addEventListener('click',function(){
        loginForm?.classList.remove('display-show')
    })
}

if (submitBtn instanceof HTMLElement){
    submitBtn.addEventListener('submit', function(e){
        if (loginID instanceof HTMLInputElement && loginPassword instanceof HTMLInputElement){
            if ( loginID.value.trim() == '' || loginPassword.value.trim() == ''){
                e.preventDefault()
                alert('공백은 안돼.')
                loginID.value == '';
                loginPassword.value == '';
            }
        }
    })
}
