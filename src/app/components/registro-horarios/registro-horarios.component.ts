import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Zonas} from '../../../models/zonas/zonas.model';
import {ZonasHorarios} from '../../../models/zonas/zonas.horarios';
import {HorariosZonasService} from '../../../services/zonas/horarios-zonas.service';
import {format} from '../../../types/format.type';
import {PushNotificationService} from '../../../services/PushNotification/push-notification.service';

@Component({
  selector: 'app-registro-horarios',
  templateUrl: './registro-horarios.component.html',
  styleUrls: ['./registro-horarios.component.css']
})
export class RegistroHorariosComponent implements OnInit {

  @ViewChild('selectZonas', { static: true }) slctZonas: ElementRef;
  @Input() listaZonas: Zonas[];
  listaHorarios: ZonasHorarios[] = []
  formats: format[] = [ "min", "hrs", "dd" ];

  btnDisable = true;

  constructor(
    private horariosSvc: HorariosZonasService,
    private pushSvc: PushNotificationService
  ) { }

  ngOnInit(): void {}

  onChangeZona() {
    this.btnDisable = false;
    this.onGetInfo();
  }

  onAddHorario() {
    let baseHorario = <ZonasHorarios>{ formato: 'min', tarifa: 0, descuento: 0, tiempo: 0}
    this.listaHorarios.push( baseHorario );
  }

  onSubmit(position: number) {
    this.listaHorarios[position].idZona = this.slctZonas.nativeElement.value;
    if(this.listaHorarios[position].id) {
      this.onDelete(this.listaHorarios[position].id);
    } else {
      this.horariosSvc.Post('horarios', this.listaHorarios[position] ).subscribe(resp => {
        this.pushSvc.onShow(resp.message);
        this.onGetInfo();
      }, error => {
        this.pushSvc.onError("Ocurrio un error.");
      });
    }
  }

  onDelete(id: number) {
    window.confirm("Esta seguro de borrar este horario ?") ?
    this.horariosSvc.Delete('horarios', id).subscribe(resp => {
      this.pushSvc.onShow(resp.message);
      this.onGetInfo();
    }, err => {
      this.pushSvc.onError("Ocurrio un error");
    }): null;
  }

  onChangeFormat(i: number, value: string){
    this.listaHorarios[i].formato = <format>value;
  }

  onGetInfo() {
    this.horariosSvc.Get('horarios').subscribe(resp=> {
      if( resp.getAll.length > 0 ){ this.listaHorarios = resp.getAll.filter(item => item.zona == this.slctZonas.nativeElement.value) }
      else { this.listaHorarios = []}
    });
  }
}
