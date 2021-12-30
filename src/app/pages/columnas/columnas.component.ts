import { ColumnaService } from './../../services/columna.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-columnas',
  templateUrl: './columnas.component.html',
  styleUrls: ['./columnas.component.css']
})
export class ColumnasComponent implements OnInit {

  columnas: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 10;

  constructor(private service: ColumnaService) { }

  setPage(page: number): void {
    this.currentPage = page;
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.search();
  }

  ngOnInit() {
    this.service.getCount().subscribe(response => this.total = response);
    this.search();
  }

  search() {
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.columnas = response);
  }

}
