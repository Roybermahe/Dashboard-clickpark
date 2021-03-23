import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {horarioFuncionamiento} from '../../models/horarios-funcionamiento/horario-funcionamiento.model';

@Injectable({
  providedIn: 'root'
})
export class HrFuncionamientoService extends HttpGenericService<horarioFuncionamiento, messageGenericInterface<horarioFuncionamiento>>{
}
