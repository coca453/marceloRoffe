import { Component, Input } from '@angular/core';

@Component({
  selector: 'mr-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  @Input() libroData;

  isCollapsed: boolean = true;

}
