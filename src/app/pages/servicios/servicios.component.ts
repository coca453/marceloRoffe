import { ServicioService } from './../../services/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  servicios: any[];
  
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => this.servicios = response);
  }

  isDisabled(disabled){
    return disabled == 0 ? false : true;
  }

}
