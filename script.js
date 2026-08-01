const botaoMenu=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
if(botaoMenu&&menu){botaoMenu.addEventListener('click',()=>{const aberto=menu.classList.toggle('aberto');botaoMenu.setAttribute('aria-expanded',String(aberto));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('aberto')))}
document.getElementById('ano').textContent=new Date().getFullYear();
