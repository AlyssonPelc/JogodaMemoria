export class Carta{
    constructor (nome){
        this.nome = nome
        this.verso = this.criarCartas(nome)
    }
}

const cartas = [
    'Caxias',
    'Guarani',
    'Gaucho',
    'internacional',
    'Juventude',
    'PassoFundo',
    'NovoHamburgo',
    'SantaCruz',
    'Ijui',
    'Ypiranga'
];
const criarElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
}
function criarCartas(nome) {

    const cartas = criarElemento('div', 'cartas');
    const frente = criarElemento('div', 'face frente');
    const costas = criarElemento('div', 'face costas'); 

    frente.style.backgroundImage = `url('../imagens/${nome}.jpg')`;

    cartas.appendChild(frente);
    cartas.appendChild(costas);
    cartas.addEventListener('click', revelarCarta);
    cartas.setAttribute('data-nome', nome);
    return cartas;
}
