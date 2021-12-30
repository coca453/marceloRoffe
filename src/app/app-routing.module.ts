import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreMrComponent } from './pages/sobre-mr/sobre-mr.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { MediosComponent } from './pages/medios/medios.component';
import { FotogaleriaComponent } from './pages/fotogaleria/fotogaleria.component';
import { VideotecaComponent } from './pages/videoteca/videoteca.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { StaffComponent } from './pages/staff/staff.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ColumnasComponent } from './pages/columnas/columnas.component';
import { MotivacionComponent } from './pages/motivacion/motivacion.component';
import { ConferenciasComponent } from './pages/conferencias/conferencias.component';
import { RinconComponent } from './pages/rincon/rincon.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mr', component: SobreMrComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'medios', component: MediosComponent },
  { path: 'fotogaleria', component: FotogaleriaComponent },
  { path: 'videoteca', component: VideotecaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'columnas', component: ColumnasComponent },
  { path: 'motivacion', component: MotivacionComponent },
  { path: 'conferencias', component: ConferenciasComponent },
  { path: 'rincon', component: RinconComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
