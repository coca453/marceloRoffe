import { Component } from '@angular/core';

@Component({
  selector: 'mr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  year = new Date().getFullYear();

}
