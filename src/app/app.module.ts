import { FotogaleriaService } from './services/fotogaleria.service';
import { ContactoService } from './services/contacto.service';
import { CursoService } from './services/curso.service';
import { RinconService } from './services/rincon.service';
import { VideoService } from './services/video.service';
import { MotivacionService } from './services/motivacion.service';
import { ColumnaService } from './services/columna.service';
import { ArticuloService } from './services/articulo.service';
import { MedioService } from './services/medio.service';
import { LibroService } from './services/libro.service';
import { ServicioService } from './services/servicio.service';
import { ClienteService } from './services/cliente.service';
import { FraseService } from './services/frase.service';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RecaptchaModule } from 'ng-recaptcha';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { BrandComponent } from './header/brand/brand.component';
import { QuotesComponent } from './header/quotes/quotes.component';
import { MediaItemComponent } from './media/media-item/media-item.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
import { FooterComponent } from './footer/footer.component';
import { MiembroStaffComponent } from './pages/staff/miembro-staff/miembro-staff.component';
import { LibroComponent } from './pages/libros/libro/libro.component';
import { MotivacionComponent } from './pages/motivacion/motivacion.component';
import { ColumnasComponent } from './pages/columnas/columnas.component';
import { RinconComponent } from './pages/rincon/rincon.component';
import { ConferenciasComponent } from './pages/conferencias/conferencias.component';
import { CursosComponent } from './pages/cursos/cursos.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({

  declarations: [

    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TopBarComponent,
    BrandComponent,
    QuotesComponent,
    MediaItemComponent,
    HomeComponent,
    NotFoundComponent,
    SobreMrComponent,
    ArticulosComponent,
    LibrosComponent,
    MediosComponent,
    FotogaleriaComponent,
    VideotecaComponent,
    ServiciosComponent,
    StaffComponent,
    ClientesComponent,
    ContactoComponent,
    ClienteComponent,
    FooterComponent,
    MiembroStaffComponent,
    LibroComponent,
    MotivacionComponent,
    ColumnasComponent,
    RinconComponent,
    ConferenciasComponent,
    CursosComponent
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    RecaptchaModule.forRoot(),
    PaginationModule.forRoot()
  ],

  providers: [

    ClienteService,
    FraseService,
    ServicioService,
    MedioService,
    LibroService,
    ArticuloService,
    ColumnaService,
    MotivacionService,
    VideoService,
    RinconService,
    CursoService,
    ContactoService,
    FotogaleriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
