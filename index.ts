let navBtn: HTMLElement | null = document.querySelector('.navbar-toggler');
let navList: HTMLElement | null = document.querySelector('.list-group');

if ( navBtn instanceof HTMLElement){
    navBtn.addEventListener('click', function(){
        if ( navList instanceof HTMLElement){
            navList.classList.toggle('display-none')
        }
    })
}