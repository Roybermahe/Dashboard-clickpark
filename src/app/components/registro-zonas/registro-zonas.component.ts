import {Component, ElementRef, Input, OnInit, Output, ViewChild,EventEmitter} from '@angular/core';
import {tiposZonas} from '../../../models/zonas/tipos-zonas.model';
import {Zonas} from '../../../models/zonas/zonas.model';
import { format } from '../../../types/format.type';
import {zonasService} from '../../../services/zonas/zonas.service';
import {PushNotificationService} from '../../../services/PushNotification/push-notification.service';


@Component({
  selector: 'app-registro-zonas',
  templateUrl: './registro-zonas.component.html',
  styleUrls: ['./registro-zonas.component.css']
})
export class RegistroZonasComponent implements OnInit {

  @ViewChild('selectTiposZonas', { static: true}) slctTiposZonas: ElementRef;
  @ViewChild('selectFormat', { static: true}) slctFormat: ElementRef;
  @Input() listSelect: tiposZonas[];
  @Output() listZonas = new EventEmitter<Zonas[]>();
  zona = new Zonas();
  formats: format[] = [ 'dd', 'hrs', 'min'];

  constructor(
    private readonly zonasSvc: zonasService,
    private pushSvc: PushNotificationService
  ) {
    this.zona.tiempolim = 2;
    this.zona.formato = 'hrs';
  }

  ngOnInit(): void {
    this.onGetInfo();
  }

  onSubmit() {
    this.zona.idTipo = +this.slctTiposZonas.nativeElement.value;
    this.zona.formato = this.slctFormat.nativeElement.value;
    this.zonasSvc.Post("zonas", this.zona).subscribe(resp => {
      this.pushSvc.onShow(resp.message);
      this.onGetInfo();
    }, err => {
      this.pushSvc.onError("Ocurrio un error.")
    });
  }

  onGetInfo() {
    this.zonasSvc.Get("zonas").subscribe(resp => {
      this.listZonas.emit(resp.getAll);
    })
  }

}
