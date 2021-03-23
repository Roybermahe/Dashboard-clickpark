import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {VehiculosService} from '../../services/vehiculos/vehiculos.service';
import {vehiculos} from '../../models/vehiculos/vehiculos.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: number;
  listVehiculos: vehiculos[];
  constructor(
    private readonly vhclSvc: VehiculosService
  ) {
  }
  ngOnInit() {
    this.onGetInfo();
  }

  onGetInfo() {
    this.vhclSvc.Get('vehiculos').subscribe(resp => {
      this.collectionSize = resp.getAll.length;
      this.listVehiculos = resp.getAll
        .map((vhcl, i) => ({ index: i + 1, ...vhcl}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }
}
