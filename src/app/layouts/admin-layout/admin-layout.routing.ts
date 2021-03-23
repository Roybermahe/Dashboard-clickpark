import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { VigilantesComponent } from '../../vigilantes/vigilantes.component';
import { SanzionesComponent } from '../../sanziones/sanziones.component';
import { UsuariosComponent } from '../../usuarios/usuarios.component';
import { ZonasComponent } from '../../zonas/zonas.component';
import { MapsComponent } from '../../maps/maps.component';
import { VehiculosComponent } from '../../vehiculos/vehiculos.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'vigilantes',   component: VigilantesComponent },
    { path: 'sanziones',     component: SanzionesComponent },
    { path: 'usuarios',     component: UsuariosComponent },
    { path: 'zonas',          component: ZonasComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'vehiculos',  component: VehiculosComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
