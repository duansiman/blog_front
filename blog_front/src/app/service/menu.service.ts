import { Injectable } from '@angular/core'

import { Menu, MENUS } from './../entity/menu';

@Injectable()
export class MenuService {

    getMenus(): Menu[] {
      return MENUS;
    }

}
