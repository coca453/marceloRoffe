import { CursoService } from './../../services/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  
    constructor(private service: CursoService) { }
  
    ngOnInit() {
      this.service.getAll().subscribe(response => this.cursos = response);
    }

}
