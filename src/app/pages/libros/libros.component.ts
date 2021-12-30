import { LibroService } from './../../services/libro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  
    libros: any[];
    
    constructor(private service: LibroService) { }
  
    ngOnInit() {
      this.service.getAll().subscribe(response => this.libros = response);
    }
  
  }
