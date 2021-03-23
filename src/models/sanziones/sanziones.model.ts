import {vehiculos} from "../vehiculos/vehiculos.model";

export class sanzionModel {
  id?: number;
  hecho?: string;
  observaciones?: string;
  fechaRegistro?: Date;
  via?: string;
  lugar?: string;
  idVehiculo: number;
  vehiculo?: vehiculos;
  titular?: {
    idTitular?: number,
    nombre: string,
    domicilio: string,
    localidad: string,
  };
  conductor?: {
    identificacion: string,
    tipo: string,
    fechaNacimiento: string,
    clase: string,
    nombre: string,
    domicilio: string,
    localidad: string,
  };
}
