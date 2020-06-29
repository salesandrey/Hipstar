class TelaInicial{
  
  constructor(){
    
  }
  
  draw(){
   this._imagemDeFundo();
   this._textoTitulo();
   this._botao();
  }
  _imagemDeFundo(){
    image(imagemTelaInicial,0,0,width,height); 
  }
  
  _textoTitulo(){
    textAlign(CENTER);
    textFont(fonteTextoTelaInicial)
    textSize(150);
    text('Hipstar',width/2,height/5 *3);
  }
  
  _botao(){
    botao.y = height/7 *5;
    botao.draw();
  }
  
  
}