class Loading{
  
 constructor(tamanhoInicial)
  {
    this.tamanhoInicial = tamanhoInicial;
  } 
  
  
    carregarLoading(){
   
    if(this.tamanhoInicial<=200)
    {
      fill('#000000');
    circle(width/2,height/2,10 * this.tamanhoInicial);
    this.tamanhoInicial+=5;
    }
    }
    descarregarTela(){
      if(this.tamanhoInicial>=200)
      {
        fill('#000000');
        circle(width/2,height/2,10 * this.tamanhoInicial);
        this.tamanhoInicial-=5;
      }
    }
  
}