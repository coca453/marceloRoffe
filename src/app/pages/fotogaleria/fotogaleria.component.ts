import { FotogaleriaService } from './../../services/fotogaleria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-fotogaleria',
  templateUrl: './fotogaleria.component.html',
  styleUrls: ['./fotogaleria.component.css']
})
export class FotogaleriaComponent implements OnInit {

  fotos;
  congresos;
  estadios;
  seminarioCordoba;

  panelFotos = true;
  panelCongresos = false;
  panelEstadios = false;
  panelSeminarioCordoba = false;

  totalFotos: number = 0;
  totalCongresos: number = 0;
  totalEstadios: number = 0;
  totalSeminarioCordoba: number = 0;

  currentPageFotos: number = 1;
  currentPageCongresos: number = 1;
  currentPageEstadios: number = 1;
  currentPageSeminarioCordoba: number = 1;

  fotoSeleccionada;

  maxResults: number = 18;

  constructor(private service: FotogaleriaService) { }

  pageChangedFotos(event: any): void {
    this.currentPageFotos = event.page;
    this.searchFotos();
  }

  pageChangedCongresos(event: any): void {
    this.currentPageCongresos = event.page;
    this.searchCongresos();
  }

  pageChangedEstadios(event: any): void {
    this.currentPageEstadios = event.page;
    this.searchEstadios();
  }

  pageChangedSeminarioCordoba(event: any): void {
    this.currentPageSeminarioCordoba = event.page;
    this.searchSeminarioCordoba();
  }

  ngOnInit() {

    this.service.getCount().subscribe(response => {
      this.totalFotos = response.totalFotos; 
      this.totalCongresos = response.totalCongresos; 
      this.totalEstadios = response.totalEstadios;        
      this.totalSeminarioCordoba = response.totalSeminarioCordoba;        
    });

    this.searchFotos();
    this.searchCongresos();
    this.searchEstadios();
    this.searchSeminarioCordoba();
  }

  searchFotos() {
    this.service.getFotos((this.currentPageFotos - 1) * this.maxResults, this.maxResults).subscribe(response => this.fotos = response);
  }

  searchCongresos() {
    this.service.getCongresos((this.currentPageCongresos - 1) * this.maxResults, this.maxResults).subscribe(response => this.congresos = response);
  }

  searchEstadios() {
    this.service.getEstadios((this.currentPageEstadios - 1) * this.maxResults, this.maxResults).subscribe(response => this.estadios = response);
  }
  
  searchSeminarioCordoba() {
    this.service.getSeminarioCordoba((this.currentPageSeminarioCordoba - 1) * this.maxResults, this.maxResults).subscribe(response => this.seminarioCordoba = response);
  }

}