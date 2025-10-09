var input = document.querySelector('.loginInput');
var button = document.querySelector('.loginButton');
const form = document.querySelector('.loginForm');

function validarInput({ target }) {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');    
}

function validarForm(event) {
    event.preventDefault();
    
    localStorage.setItem('jogador', input.value);
    window.location = './paginas/jogo.html';
}


input.addEventListener('input', validarInput);
form.addEventListener('submit', validarForm);
