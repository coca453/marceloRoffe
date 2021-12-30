import { Component, Input } from '@angular/core';

@Component({
  selector: 'mr-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  
  @Input() mediaData;

}