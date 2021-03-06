import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {sanzionModel} from '../../models/sanziones/sanziones.model';

@Injectable({
  providedIn: 'root'
})
export class SanzionesService extends HttpGenericService<sanzionModel, messageGenericInterface<sanzionModel>>{}
