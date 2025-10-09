const grid = document.querySelector('.grid');
let primeiraCarta = '';
let segundaCarta = '';
const spanJogador = document.querySelector('.jogador');
const spanTempo = document.querySelector('.timer');
const botaoreiniciar = document.querySelector('.spanbotaoreiniciar');


const cartas = [
    'uva',
    'banana',
    'laranja',
    'maca',
    'morango',
    'melancia',
    'pera',
    'mamao'
];

const reiniciarjogo = document.querySelector('.botaoreiniciarjogo').addEventListener("click", () =>{
    const todasascartas = document.querySelectorAll('.cartas');
    todasascartas.forEach(carta => {
        
        carta.classList.remove('revelarCarta');
        carta.firstChild.classList.remove('desabilitarCarta');
    });
    ;
    carregarJogo()
});

const verificarCartas = () =>{
    const primeiraFruta = primeiraCarta.getAttribute('data-fruta');
    const segundaFruta = segundaCarta.getAttribute('data-fruta');

    if(primeiraFruta === segundaFruta){
        primeiraCarta.firstChild.classList.add('desabilitarCarta');
        segundaCarta.firstChild.classList.add('desabilitarCarta');
        primeiraCarta = '';
        segundaCarta = '';
        verificarFimJogo();
    }
    else{
        setTimeout(() =>{
            primeiraCarta.classList.remove('revelarCarta');
            segundaCarta.classList.remove('revelarCarta');
            primeiraCarta = '';
            segundaCarta = '';
        }, 700)
        
    }
}

const iniciarTempo = () =>{
    this.loop = setInterval(() => {
        const tempoAtual = +spanTempo.innerHTML;
        spanTempo.innerHTML = tempoAtual + 1;
    }, 1000)
}

const verificarFimJogo = () =>{
    const desabilitarCartas = document.querySelectorAll('.desabilitarCarta');

    if(desabilitarCartas.length === cartas.length * 2){
        setTimeout(() =>{
            clearInterval(this.loop);
            alert(`Parábens ${spanJogador.innerHTML}! Seu tempo foi: ${spanTempo.innerHTML}!`);
            botaoreiniciar.classList.add('revelarspan')
        }, 700)
        
    }
}

const criarElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
}

const revelarCarta = ({target}) => {
    if (target.parentNode.className.includes('revelarCarta'))
        return;
    if (primeiraCarta === '') {
        target.parentNode.classList.add('revelarCarta');
        primeiraCarta = target.parentNode;
    }
    else if (segundaCarta === '') {
        target.parentNode.classList.add('revelarCarta');
        segundaCarta = target.parentNode;
        verificarCartas()
    }
}

const criarCartas = (fruta) => {

    const cartas = criarElemento('div', 'cartas');
    const frente = criarElemento('div', 'face frente');
    const costas = criarElemento('div', 'face costas'); 

    frente.style.backgroundImage = `url('../imagens/${fruta}.jpg')`;

    cartas.appendChild(frente);
    cartas.appendChild(costas);
    cartas.addEventListener('click', revelarCarta);
    cartas.setAttribute('data-fruta', fruta);
    return cartas;
}

const carregarJogo = ( ) => {
    grid.innerHTML = ''; 
    spanTempo.innerHTML = '00';
    clearInterval(this.loop);
    primeiraCarta = '';
    segundaCarta = '';
    const duplicarCartas = [...cartas, ...cartas];
    const embaralhar = duplicarCartas.sort(() => Math.random() - 0.5);

    embaralhar.forEach((fruta) =>{
        const carta = criarCartas(fruta);
        grid.appendChild(carta);
    });
    

}

console.log(this);
window.onload = () =>{
    spanJogador.innerHTML = localStorage.getItem('jogador')

carregarJogo();
iniciarTempo();
}

