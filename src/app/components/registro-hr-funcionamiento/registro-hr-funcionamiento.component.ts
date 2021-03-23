import {Component, ElementRef, Input, Injectable, OnInit, ViewChild} from '@angular/core';
import {Zonas} from '../../../models/zonas/zonas.model';
import {daysCheckList, horarioFuncionamiento} from '../../../models/horarios-funcionamiento/horario-funcionamiento.model';
import {NgbTimeAdapter, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {PushNotificationService} from '../../../services/PushNotification/push-notification.service';
import {HrFuncionamientoService} from '../../../services/hrFuncionamiento/hr-funcionamiento.service';

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;
@Injectable()
export class NgbTimeStringAdapterService extends NgbTimeAdapter<string>{
  fromModel(value: string| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    return time != null ? `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}` : null;
  }
}

@Component({
  selector: 'app-registro-hr-funcionamiento',
  templateUrl: './registro-hr-funcionamiento.component.html',
  styleUrls: ['./registro-hr-funcionamiento.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapterService}]
})
export class RegistroHrFuncionamientoComponent implements OnInit {

  @ViewChild('selectZonas', {static: true}) slctZonas: ElementRef;
  @Input() listaZonas: Zonas[];
  btnDisable = true;


  horariosFuncionamiento: horarioFuncionamiento[] = [];
  constructor(
    private readonly push: PushNotificationService,
    private readonly hrFuncionamiento: HrFuncionamientoService
  ) {}

  ngOnInit(): void {
  }

  onAddHorario() {
    this.horariosFuncionamiento.push({ horarioCheckList: this.nullDayCheck(), inicioTime: "00:00:00", finalTime: "00:00:00", freedays: false})
  }

  onChangeZona() {
    this.btnDisable = false;
  }

  onValidateDays(i:number) {
    let daysSelect = this.convertDaysToString(this.horariosFuncionamiento[i].horarioCheckList)
    return daysSelect.length != 0;
  }

  convertDaysToString(checkLists: daysCheckList[]){
    let days = checkLists.filter(item => item.check === true);
    let data = "";
    days.forEach(item => {
      data += item.dia + ";";
    });
    return data;
  }

  converStringToDaysCheck(data: string){
    if(data.length == 0) return this.nullDayCheck();
    let checklist: daysCheckList[] = this.nullDayCheck();
    data.split(";").forEach(item => {
      if(item != ''){
        checklist.find(dd=> dd.dia == item).check = true;
      }
    });
    return checklist;
  }

  nullDayCheck(): daysCheckList[] {
    return [{ dia: "Lun", check: false}, { dia: "Mar", check: false}, { dia: "Mie", check: false}, { dia: "Jue", check: false}, { dia: "Vie", check: false}, { dia: "Sab", check: false}, { dia: "Dom", check: false}]
  }

  onSubmit(i: number) {
    let daysSelect = this.convertDaysToString(this.horariosFuncionamiento[i].horarioCheckList);
    let timea=this.validateTime(this.horariosFuncionamiento[i].inicioTime);
    let timeb=this.validateTime(this.horariosFuncionamiento[i].finalTime);
    if(timea.getHours() >= timeb.getHours() && this.horariosFuncionamiento[i].freedays == false){
      this.push.onError("La hora de finalización debe ser mayor a la de inicio");
      return null;
    }
    let data = new horarioFuncionamiento();
    data.IdZona = this.slctZonas.nativeElement.value;
    data.diasSemana = daysSelect;
    if(this.horariosFuncionamiento[i].freedays) {
      data.horarioJornada = "FREE";
    }else {
      data.horarioJornada = `${this.horariosFuncionamiento[i].inicioTime};${this.horariosFuncionamiento[i].finalTime}`;
    }
    this.hrFuncionamiento.Post("horarioFuncionamiento", data).subscribe(resp => {
      this.push.onShow(resp.message)
    }, err => {
      this.push.onError("Ocurrio un error.");
    });
  }

  validateTime(timeA: string) {
    let a = new Date();
    let [Ahours, Aminutes, Aseconds] = timeA.split(':');
    a.setHours(+Ahours);
    a.setMinutes(+Aminutes);
    a.setSeconds(+Aseconds);
    return a;
  }
}



