import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../../servicios/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { firestore } from 'firebase';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private authService:AuthService,
    private router: Router) {  }

  ngOnInit() {
    if(this.authService.usuarioActual() != null){
      console.log('logueado');
    }else{
      console.log('no logueado');
    }
 
  }

 

}
