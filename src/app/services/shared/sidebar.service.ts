import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Alimento',
      icono: 'mdi mdi-bowl',
      submenu: [
        { titulo: 'Alimentos', url: '/dashboard' },
        { titulo : 'Categoria', url: '/progress' },
        { titulo: 'Medida Caseras', url: '/grafica1' }
      ]
    }
  ];

  constructor() { }

}
