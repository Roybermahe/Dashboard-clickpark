import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { VigilantesComponent } from '../../vigilantes/vigilantes.component';
import { SanzionesComponent } from '../../sanziones/sanziones.component';
import { UsuariosComponent } from '../../usuarios/usuarios.component';
import { ZonasComponent } from '../../zonas/zonas.component';
import { MapsComponent } from '../../maps/maps.component';
import { VehiculosComponent } from '../../vehiculos/vehiculos.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ComponentsModule,
  ],
  declarations: [
    DashboardComponent,
    VigilantesComponent,
    SanzionesComponent,
    UpgradeComponent,
    UsuariosComponent,
    ZonasComponent,
    MapsComponent,
    VehiculosComponent,
  ]
})

export class AdminLayoutModule {}
