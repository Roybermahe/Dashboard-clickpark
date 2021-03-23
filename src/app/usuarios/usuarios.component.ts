import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {Usuario} from '../../models/usuarios/usuario.model';

@Component({
  selector: 'app-typography',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: number;
  usuarios: Usuario[];
  constructor(
    private readonly usuariosSvc: UsuarioService
  ) { }

  ngOnInit() {
    this.onGetInfo();
  }

  onGetInfo() {
    this.usuariosSvc.Get('usuarios').subscribe(resp => {
      this.collectionSize = resp.getAll.length;
      this.usuarios = resp.getAll
        .map((user, i) => ({ index: i + 1, ...user}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

}
