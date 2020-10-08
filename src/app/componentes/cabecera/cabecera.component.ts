import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuarioLogueado:any;
  
  constructor(private authService:AuthService) { 
    this.authService.usuarioActual().then(x => { 
        console.log(x.email); 
        this.usuarioLogueado=x.email;
        if(x.email){

        }
    })
  }

  ngOnInit() {
    
    //this.usuarioLogueado=this.authService.getCurrenUser();
  }

}
