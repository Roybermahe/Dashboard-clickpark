export class horarioFuncionamiento {
  id?: number;
  IdZona?: number;
  diasSemana?: string;
  HorariosJornada?: string;
  horarioJornada?: string;
  idHorario?: number;
  horarioCheckList?: daysCheckList[];
  inicioTime?: "00:00:00";
  finalTime?: "00:00:00";
  freedays?: false;
}


export interface daysCheckList {
  dia: string;
  check: boolean;
}
