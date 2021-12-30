import { Component } from '@angular/core';

@Component({
  selector: 'mr-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  miembrosStaff = [
    
      {
        src: "assets/img/staff/fernandez.jpg",
        nombre: "Lic. Alberto C. Fernandez",
        descripcion: "Licenciado en Educación Física, Orientación al Marketing y Administración deportiva - Universidad Abierta Interamericana (2001)."
      },
  
      { 
        src: "assets/img/staff/riccardi.jpg", 
        nombre: "Sebastián Riccardi", 
        descripcion: "Periodista deportivo (2005, Deportea). Estudiante para Licenciado en Gestión del Deporte (Universidad Nacional de Tres de Febrero)." 
      },
  
      { 
        src: "assets/img/staff/primo.jpg", 
        nombre: "Lic. Gonzalo Primo", 
        descripcion: "Licenciado en Psicología (2006, UBA) especializado en Psicología del Deporte (2012, APDA). Ayudante de la materia Ciencia y Deporte - Psicología del deporte (Escuela de Periodismo Deportea) y del Curso de Psicología del Deporte (Instituto Ferrocarril Oeste)."
      },
      
      { 
        src: "assets/img/staff/vita.jpg", 
        nombre: "Juan Vita", 
        descripcion: "Licenciado en Psicología. Ayudante de cátedra de la materia Psicología del Deporte en la Universidad de Palermo. Entrenador de Fútbol Juvenil." 
      }
  
    ];

}
