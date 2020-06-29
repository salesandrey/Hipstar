class FabricaMoeda{
  
  constructor(moedas,arrayDourado,arrayBronze,arrayPrata) 
  {
   this.element = 0; 
   this.arrayDourado = arrayDourado;
   this.arrayBronze = arrayBronze;
   this.arrayPrata = arrayPrata;
   this.arrayMoeda = moedas;
   this.x = 0;
   this.y =0;
   this.largura =59;
   this.altura = 64;
  }
  
  
  fabricar()
  {
    
    if(this.arrayMoeda.length<8)
    {
    var moeda;
    var espaco = 55 * this.arrayMoeda.length;
    this.element = Math.round(random(0,10));
    this.posicaoY = Math.round(random(100,350));
    switch(this.element){
    case 0:
      moeda = new Moeda(this.arrayDourado,1,
                        width+espaco,
                        height-this.posicaoY,
                        this.largura,this.altura,'Gold');
      this.arrayMoeda.push(moeda);
      break;
    case 4:
      moeda = new Moeda(this.arrayPrata,1,
                        width+espaco,
                        height-this.posicaoY,
                        this.largura,this.altura,'Silver');
      this.arrayMoeda.push(moeda);
      break;
    case 6:
      moeda = new Moeda(this.arrayBronze,1,
                        width+espaco,
                        height-this.posicaoY,
                        this.largura,this.altura,'Bronze');
      this.arrayMoeda.push(moeda);
      break;
    
  }
  }
  }
  
  
}

