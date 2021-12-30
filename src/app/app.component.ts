import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'mr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private meta: Meta) {
    this.meta.addTag({ 
      name: 'description', 
      content: `Marcelo Roffé, Master en Psicología de la Actividad Física y del Deporte (graduación obtenida en España), especializado en clinica y Doctor en Psicologia,  junto a su equipo, a deportistas y a entrenadores de elite que obtuvieron medallas y representaron al país en muchas oportunidades, nos comunicarán su óptica de cómo alcanzar el éxito en el Alto Rendimiento. `
     })
    }
}
