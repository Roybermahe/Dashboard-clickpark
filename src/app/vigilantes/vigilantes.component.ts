import { Component, OnInit } from '@angular/core';
import {PushNotificationService} from '../../services/PushNotification/push-notification.service';
import {VigilanteService} from '../../services/vigilantes/vigilante.service';
import {vehiculos} from '../../models/vehiculos/vehiculos.model';
import {vigilante} from '../../models/vigilantes/vigilante.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './vigilantes.component.html',
  styleUrls: ['./vigilantes.component.css']
})
export class VigilantesComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: number;
  listVigilantes: vigilante[] = [];
  vglte = new vigilante();
  constructor(
    private vigilanteSvc: VigilanteService,
    private push: PushNotificationService
  ) { }

  ngOnInit() {
    this.onGetInfo();
  }

  onSubmit() {
    this.vigilanteSvc.Post('vigilantes', this.vglte).subscribe(resp => {
      this.push.onShow(resp.message);
      this.onGetInfo();
    }, err => {
      this.push.onError("Ocurrio un error.");
    });
  }

  onGetInfo() {
    this.vigilanteSvc.Get('vigilantes').subscribe(resp => {
      this.collectionSize = resp.getAll.length;
      this.listVigilantes = resp.getAll
        .map((vgl, i) => ({ index: i + 1, ...vgl}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

  onDelete(id: number) {
    window.confirm("Desea eliminar a este vigilante del sistema ?.") ?
    this.vigilanteSvc.Delete('vigilantes', id).subscribe(resp => {
      this.push.onShow(resp.message);
      this.onGetInfo();
    }, err => {
      this.push.onError("Ocurrio un error.");
    }): null;
  }

}
