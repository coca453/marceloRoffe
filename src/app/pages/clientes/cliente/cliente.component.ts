import { Component, Input } from '@angular/core';

@Component({
  selector: 'mr-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  @Input() clienteData;

}