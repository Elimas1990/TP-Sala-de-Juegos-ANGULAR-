import { Injectable } from '@angular/core';
import {Usuario} from '../clases/usuario'
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { first } from 'rxjs-compat/operator/first';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  usuario = new Usuario()
  user: Observable<firebase.User | null >

  constructor(private afAuth:AngularFireAuth,
    private router:Router) {
      this.user = this.afAuth.authState;
     }

  public async signIn(usuario:Usuario){
    return this.afAuth.signInWithEmailAndPassword(usuario.email,usuario.clave);
  }
  public async signOut(){
    await this.afAuth.signOut();
    this.router.navigate(['/'])
  }
  public async register(usuario:Usuario){
    return this.afAuth.createUserWithEmailAndPassword(usuario.email,usuario.clave);
  }
  public async usuarioActual(){
    return this.afAuth.currentUser;
  }
  public getCurrenUser(){
   /* var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  
    }
    
    return user.email;*/
    this.usuarioActual().then(x => { 
       return x.email;
    })
  }
  
}
