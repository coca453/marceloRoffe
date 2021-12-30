import { RinconService } from './../../services/rincon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-rincon',
  templateUrl: './rincon.component.html',
  styleUrls: ['./rincon.component.css']
})
export class RinconComponent implements OnInit {

  rincones: any[];

  constructor(private service: RinconService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => this.rincones = response);
  }
  
}
