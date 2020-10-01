import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrados',
  templateUrl: './cuadrados.component.html',
  styleUrls: ['./cuadrados.component.css']
})
export class CuadradosComponent {
  @Input() value:'X' | 'O';

}
