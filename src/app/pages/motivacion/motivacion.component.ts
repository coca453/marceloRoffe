import { MotivacionService } from './../../services/motivacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-motivacion',
  templateUrl: './motivacion.component.html',
  styleUrls: ['./motivacion.component.css']
})
export class MotivacionComponent implements OnInit {

  motivaciones: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 10;

  constructor(private service: MotivacionService) { }

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
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.motivaciones = response);
  }

}
