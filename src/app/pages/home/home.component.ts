import { ColumnaService } from './../../services/columna.service';
import { MotivacionService } from './../../services/motivacion.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  columna: any = "";
  texto: any = "";

  constructor(
    private columnaService: ColumnaService,
    private motivacionService: MotivacionService
  ) { }

  ngOnInit(){
    this.columnaService.getLast().subscribe(response => this.columna = response);
    this.motivacionService.getLast().subscribe(response => this.texto = response);
  }

  Arr = Array;
  num :number = 26;
  
  Arr_2018 = Array;
  num_2018 :number = 18;
  
}
