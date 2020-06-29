let imagemCenario;
let imagemGround;
let cenario;
let ground;
let imagemCenario2;
let cenario2;
let imagemCenario3;
let cenario3;
let imagemCenario4;
let cenario4;
let imagemCenario5;
let cenario5;
let imagemCenario6;
let cenario6;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let inimigoGota;
let inimigoGrande;
let inimigoVoador;

let imagemTelaInicial;
let fonteTextoTelaInicial;

let imagemVida;
let vida;

let jogo;
let telaInicial;
let botao;

let loading;

let cartucho;

let somDoJogo;
let somDoPulo;
let somMoeda;

let personagem;
let imagemGameOver;
let moeda;
let fabricaMoeda;
let pontos;

let cenaAtual = 'telaInicial';
let cenas;

var moedas =[];
var arrayMoeda = [];
const matrizInimigo = criar(104,104,4,4);
const matrizPersonagem = criar(220,270,4,4);
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
var arrayMoedaGold = [];
var arrayMoedaPrata = [];
var arrayMoedaBronze = [];

var inimigos =[];
var cenarios =[];

function criar(x,y,spritesX,spritesY)  {
    matrix = [];
      for(i=0; i<spritesX; i++) {
          matrix[i] = [];
          for(j=0; j<spritesY; j++) {
              matrix[i][j] = [x*i,y*j];
      }
    }
    return matrix;
}