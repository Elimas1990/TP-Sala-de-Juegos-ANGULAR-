import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { isBreakStatement } from 'typescript';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  esperaNumero:boolean;
  empieza:boolean;
  Tiempo: number;
  repetidor:any;
  primerNumero: number;
  segundoNumero: number;
  resultado:number;
  posiblesOperadores:Array<string> =['+','-','*'];
  operador: string;
  private subscription: Subscription;
  ngOnInit() {
    
    
  }
  numerosRandom(){
    this.primerNumero= Math.floor(Math.random() * 11);
    this.operador=this.posiblesOperadores[Math.floor(Math.random() * this.posiblesOperadores.length)];
    this.segundoNumero= Math.floor(Math.random() * this.primerNumero);
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
     
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }
  limpiarCuenta(){
    this.primerNumero=null;
    this.segundoNumero=null;
    this.operador="";
  }
  NuevoJuego() {
    this.numerosRandom();
    this.ocultarVerificar=false;
    this.esperaNumero=true;
   this.repetidor = setInterval(()=>{ 
    
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
        this.esperaNumero=false;
        this.limpiarCuenta();
      }
      
      }, 900);

  }
  verificar()
  {
    switch(this.operador){
      case "+":
        this.resultado=this.primerNumero+this.segundoNumero;
        break;
      case "-":
        this.resultado=this.primerNumero-this.segundoNumero;
        break;
      case "*":
        this.resultado=this.primerNumero*this.segundoNumero;
        break;
      default:
        break;
    }
    if(this.resultado==this.nuevoJuego.numeroIngresado){
      this.nuevoJuego.gano="Correcto";
    }else{
      this.nuevoJuego.gano=null;
    }
    this.nuevoJuego.numeroIngresado=null;
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
   

   
  }  

}
