import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../servicios/auth.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-setresultado',
  templateUrl: './setresultado.component.html',
  styleUrls: ['./setresultado.component.css']
})
export class SetresultadoComponent implements OnInit {

  emailUsuario:any;
  constructor(private db:AngularFirestore,
    private authService:AuthService) { }

  ngOnInit(): void {
  }
  public setResultado(resultado,juego){
    this.authService.usuarioActual().then(x => { 
        this.emailUsuario=x.email;
    })
    this.db.collection('resultJuegos').add({
      usuario:this.emailUsuario,
      resultado:resultado,
      juego:juego,
      fechaJuego:firestore.Timestamp.fromDate(new Date())
    })
  }

}
