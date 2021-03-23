import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TiposZonasService} from '../../../services/zonas/tipos-zonas.service';
import {PushNotificationService} from '../../../services/PushNotification/push-notification.service';
import {tiposZonas} from '../../../models/zonas/tipos-zonas.model';

@Component({
  selector: 'app-registro-tipos-zonas',
  templateUrl: './registro-tipos-zonas.component.html',
  styleUrls: ['./registro-tipos-zonas.component.css']
})
export class RegistroTiposZonasComponent implements OnInit {

  @Output() listTipos = new EventEmitter<tiposZonas[]>()
  tipoZona = new tiposZonas();
  constructor(
    private readonly tiposZonasService: TiposZonasService,
    private pushSvc: PushNotificationService
  ) { }

  ngOnInit(): void {
    this.onGetInfo();
  }

  onSubmit() {
    this.tiposZonasService.Post('tiposZonas', this.tipoZona).subscribe(resp => {
      this.pushSvc.onShow(resp.message);
      this.onGetInfo();
    }, error => {
      this.pushSvc.onError("Ocurrio un error");
    });
  }

  onGetInfo() {
    this.tiposZonasService.Get('tiposZonas').subscribe(resp => {
      this.listTipos.emit(resp.getAll);
    });
  }


}
