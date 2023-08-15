const body=document.body;
const sidebar=body.querySelector('.sidebar');
const toggle=body.querySelector('.toggle');
const searchBtn=body.querySelector('.search-box');
const modeSwitch=body.querySelector('.toggle-switch');
const modeText=body.querySelector('.mode-text');

modeSwitch.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        modeText.innerText='Dark Mode'
    } else{
         modeText.innerText='Light Mode'
    }
})
toggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('close')
})

