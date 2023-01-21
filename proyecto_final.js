let leermasboton= document.getElementById('leermasboton');
let hide_text= document.getElementById('hide_text');

leermasboton.addEventListener('click', toggletText);
function toggletText() {
    hide_text.classList.toggle('show')
}