import { FraseService } from './../../services/frase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'mr-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {

  frase: any = "";
  
  constructor(private service: FraseService) { }

  ngOnInit() {
    this.service.get().subscribe(response => this.frase = response);
  }
}
