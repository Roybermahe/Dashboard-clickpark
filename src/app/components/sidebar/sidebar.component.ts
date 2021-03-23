import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/zonas', title: 'Zonas',  icon:'location_world', class: '' },
    { path: '/maps', title: 'Mapa',  icon:'location_map-big', class: '' },
    { path: '/vehiculos', title: 'Vehiculos',  icon:'transportation_bus-front-12', class: '' },
    { path: '/vigilantes', title: 'Vigilantes',  icon:'users_single-02', class: '' },
    { path: '/sanziones', title: 'Sanziones',  icon:'files_paper', class: '' },
    { path: '/usuarios', title: 'Usuarios',  icon:'users_circle-08', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
