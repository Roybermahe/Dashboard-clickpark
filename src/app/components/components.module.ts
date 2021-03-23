import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistroZonasComponent } from './registro-zonas/registro-zonas.component';
import { FormsModule } from '@angular/forms';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { RegistroHorariosComponent } from './registro-horarios/registro-horarios.component';
import { RegistroTiposZonasComponent } from './registro-tipos-zonas/registro-tipos-zonas.component';
import { RegistroHrFuncionamientoComponent } from './registro-hr-funcionamiento/registro-hr-funcionamiento.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    RegistroZonasComponent,
    RegistroUsuariosComponent,
    RegistroHorariosComponent,
    RegistroTiposZonasComponent,
    RegistroHrFuncionamientoComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    RegistroZonasComponent,
    RegistroTiposZonasComponent,
    RegistroHorariosComponent,
    RegistroHrFuncionamientoComponent
  ]
})
export class ComponentsModule { }
