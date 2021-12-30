import { MedioService } from './../../services/medio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-medios',
  templateUrl: './medios.component.html',
  styleUrls: ['./medios.component.css']
})
export class MediosComponent implements OnInit {

  medios: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 10;

  constructor(private service: MedioService) { }

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
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.medios = response);
  }

}
