import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Usuario} from '../../clases/usuario';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../servicios/auth.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { firestore } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario= new Usuario;

  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;


  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService,
    private db:AngularFirestore) {
      //this.progreso=0;
      //this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
    this.usuario.email='admin@mail.com';
    this.usuario.clave='123456'
  }

  Entrar() {
    console.log(this.usuario);
    this.authService.signIn(this.usuario).then(res =>{
      console.log("login exitoso",res);
      this.db.collection('logusuarios').add({
        email:this.usuario.email,
        fechaacceso:firestore.Timestamp.fromDate(new Date())
      })
    })
    .then(docRef => {
      localStorage.setItem('usuario',JSON.stringify(this.usuario));
      this.authService.usuario = this.usuario;
      this.router.navigate(['']);
      console.log("Document written whith ID: ",this.authService.usuario) ;
    })
    .catch(error =>{
      console.log("error ending: ",error);
      this.router.navigate(['error']);
    });
    /*if (this.usuario.email === 'admin' && this.usuario.clave === 'admin') {
      this.router.navigate(['/Principal']);
    }*/
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}
