class Pontuacao
{
  
 constructor()
  {
    this.pontos = 0;
  }
  
  exibiPontos()
  {
   textAlign(RIGHT);
   fill('#fff');
   textSize(30);
   text(parseInt(this.pontos),width-30,50);
  }
  
  adicionarPonto(moeda)
  {
    this.pontos = this.pontos + 0.05
    
    switch(moeda.tipo)
    {
      case 'Gold':
        this.pontos = this.pontos + 100;
        break;
      case 'Silver':
        this.pontos = this.pontos + 50;
        break;
        case 'Bronze':
        this.pontos = this.pontos +10;
        break;
    }
  }
  
}