
const reveals=document.querySelector('.reveal-btn');
const hiddens=document.querySelector('.hidden-content');
const plus=document.querySelector('.fa-solid fa-plus')

function check()
{
    if(hiddens.classList.contains('reveal-btn'))
    {
        hiddens.classList.remove('reveal-btn')
    }
    else{
         hiddens.classList.add('reveal-btn');
         plus.classList.remove('fa-solid fa-plus');
    }
}

reveals.addEventListener("click", check);