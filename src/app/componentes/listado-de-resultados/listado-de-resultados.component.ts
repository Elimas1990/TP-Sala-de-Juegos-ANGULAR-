
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Resultado} from '../../clases/resultado';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
  listado: Array<any>;



  constructor(private db:AngularFirestore) {
   }

  ngOnInit() {
    this.obtenerResultados();
  }

  obtenerResultados(){
    const colecionResultados= this.db.collection('resultJuegos').valueChanges();
    colecionResultados.subscribe(lista => this.listado = lista);
   /* this.db.collection('resultJuegos').get().subscribe((querySnapshot) => {
      querySnapshot.forEach(element => {
        this.listado.push(element.data() as Resultado);
      });
    });
    console.log(this.listado)*/
  }
  /*
  ver() {
    console.info(this.listado);
  }*/

}
