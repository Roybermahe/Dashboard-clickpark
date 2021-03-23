import { Component, OnInit } from '@angular/core';
import {sanzionModel} from '../../models/sanziones/sanziones.model';
import {SanzionesService} from '../../services/sanziones/sanziones.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './sanziones.component.html',
  styleUrls: ['./sanziones.component.css']
})
export class SanzionesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize: number;
  listaSanziones: sanzionModel[];
  constructor(
    private sanzionesService: SanzionesService
  ) { }

  ngOnInit() {
    this.onGetInfo();
  }

  onGetInfo() {
    this.sanzionesService.Get('sanziones').subscribe(resp => {
      this.listaSanziones = resp.getAll;
    });
  }
}
