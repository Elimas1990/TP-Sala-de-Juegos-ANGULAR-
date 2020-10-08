import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import {SetresultadoComponent} from '../setresultado/setresultado.component';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
 /* htmlString:string;
  valores:Array<string>=[];
  cpuSeleccion:number;
  cpuRandom:number;*/
  cuadrados:any[];
  siguiente:boolean;
  ganador:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.cuadrados = Array(9).fill(null);
    this.ganador = null;
    this.siguiente = true;
  }
  get player(){
    return this.siguiente ? 'X' : 'O';
  }
  hacerMovimiento(idx:number){
    if(!this.cuadrados[idx]){
      this.cuadrados.splice(idx,1,this.player);
      this.siguiente = !this.siguiente;
    }
    this.ganador = this.chequeaGanador();
  }

  chequeaGanador(){
    const lineas = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0;i< lineas.length;i++){
      const [a,b,c]= lineas[i];
      if(
        this.cuadrados[a] &&
        this.cuadrados[a] === this.cuadrados[b] &&
        this.cuadrados[a] === this.cuadrados[c] 
      ){
        this.authService.setResultado(this.cuadrados[a],"TaTeTi")
        return this.cuadrados[a];
      }
    }
    return null;
  }

}
