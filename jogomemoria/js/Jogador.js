class Jogador{
    constructor (nome, tempo){
        this.nome = nome;
        this.tempo = tempo;
        
    }
}
const spanJogador = document.querySelector('.jogador');
spanJogador.innerHTML = localStorage.getItem('jogador')
