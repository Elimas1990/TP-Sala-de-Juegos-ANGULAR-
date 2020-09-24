import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { $$iterator } from 'rxjs/internal/symbol/iterator';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'
@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  ppt: Array<string>= ['piedra','papel','tijera'];
  pptMaquina:string;
  pptPlayer:string;
  resultado:string;
  repetidor:any;
  play:string;
  Tiempo:number;
  expression:boolean;
  constructor() {this.Tiempo=5;  }

  ngOnInit(): void {
  }
  resetJuego(){
    this.pptMaquina=null;
    this.pptPlayer=null;
    this.resultado=null;
  }
  seleccionarOpcion(){
    this.pptMaquina=this.ppt[Math.floor(Math.random() * this.ppt.length)];
    this.calcularGanador();
    this.expression=true;
    this.repetidor = setInterval(()=>{ 
    
      this.Tiempo--;
      //console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.Tiempo=5;
        this.expression=false;
        this.resetJuego();
      }
      
      }, 900);
    
  }

  calcularGanador(){
    if(this.pptPlayer==this.pptMaquina){
      this.resultado="Empate";
    }else{
      this.resultado="Perdiste";
      switch(this.pptPlayer){
        case this.ppt[2]:{ ///TIJERA
          if(this.pptMaquina == this.ppt[1])
          {
            console.log(this.pptMaquina == this.ppt[1]);
            this.resultado="Ganaste";
          }
        }
        break;
        case this.ppt[0]:{     /// PIEDRA
          if(this.pptMaquina == this.ppt[2])
          {
            this.resultado="Ganaste";
          }
        }
        break;
        case this.ppt[1]:{ //PAPEL
          if(this.pptMaquina == this.ppt[0])
          {
            this.resultado="Ganaste";
          }
        }
        break;
      }
    }
  }
}
