import { Component, OnInit } from '@angular/core';
import {TiposZonasService} from '../../services/zonas/tipos-zonas.service';
import {tiposZonas} from '../../models/zonas/tipos-zonas.model';
import {ToastrService} from 'ngx-toastr';
import {PushNotificationService} from '../../services/PushNotification/push-notification.service';
import {Zonas} from '../../models/zonas/zonas.model';

@Component({
  selector: 'app-icons',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {


  listaTiposZona: tiposZonas[] = [];
  listaZonas: Zonas[] = [];
  isCollapsed = {
    tiposZona: true,
    Zonas: true,
    Horarios: true
  }
  constructor(
  ) { }

  ngOnInit() {
  }

  onListaTiposZona(arg: tiposZonas[]) {
    this.listaTiposZona = arg;
  }

  onListaZonas(arg: Zonas[]) {
    this.listaZonas = arg;
  }

}
