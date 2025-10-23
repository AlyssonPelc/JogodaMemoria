import {Carta} from './Carta.js'
import {Jogador} from './Jogador.js'

class Jogo{
    constructor(){
        this.primeiraCarta = '';
        this.segundaCarta = '';
        this.verificarCartas = 
        this.grid = document.querySelector('.grid');
        this.spanTempo = document.querySelector('.timer');
        this.botaoReiniciar = document.querySelector('.spanbotaoreiniciar');
        this.configurarbotoes();
        this.reiniciarjogo = reiniciarjogo();
        this.botaoranking = botaoranking();
        this.verificarCartas = verificarCartas();
        this.iniciarTempo = iniciarTempo()
        this.verificarFimJogo = verificarFimJogo()
        this.carregarJogo = carregarJogo()
    }
}

function configurarbotoes(){
    const reiniciarjogo = document.querySelector('.botaoreiniciarjogo').addEventListener('click', reiniciarjogo());
    const botaoranking = document.querySelector('.botaoranking').addEventListener("click", botaoranking());
}

function reiniciarjogo(){
    const todasascartas = document.querySelectorAll('.cartas');
    todasascartas.forEach(carta => {
        
        carta.classList.remove('revelarCarta');
        carta.firstChild.classList.remove('desabilitarCarta');
    });
    ;
    carregarJogo()
}
    
function botaoranking() {
    window.location = './ranking.html'
} 

function verificarCartas(){
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

function iniciarTempo() {
    this.loop = setInterval(() => {
        const tempoAtual = +spanTempo.innerHTML;
        spanTempo.innerHTML = tempoAtual + 1;
    }, 1000)
}

function verificarFimJogo() {
    const desabilitarCartas = document.querySelectorAll('.desabilitarCarta');

    if(desabilitarCartas.length === cartas.length * 2){
        setTimeout(() =>{
            clearInterval(this.loop);
            alert(`Parábens ${spanJogador.innerHTML}! Seu tempo foi: ${spanTempo.innerHTML}!`);
            botaoreiniciar.classList.add('revelarspan')
        }, 700)
        
    }
}

function carregarJogo () {
    grid.innerHTML = ''; 
    spanTempo.innerHTML = '0';
    clearInterval(this.loop);
    primeiraCarta = '';
    segundaCarta = '';
    const duplicarCartas = [...cartas, ...cartas];
    const embaralhar = duplicarCartas.sort(() => Math.random() - 0.5);

    embaralhar.forEach((fruta) =>{
        const carta = new Carta(fruta)
        grid.appendChild(carta);
    });
    iniciarTempo();

}

console.log(this);
window.onload = () =>{
carregarJogo();
}

