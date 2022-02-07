import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public user;
    public menu = MENU;

    constructor() {}

    ngOnInit() {
        
    }
}

export const MENU = [
    {
      name: 'Import dataset',
      icon: 'nav-icon fa fa-arrow-circle-down',
      path: ['/import-dataset']
    },
    {
        name: 'Dashboard',
        icon: 'nav-icon fas fa-th-large',
        path: ['/dashboard']
    },
    {
        name: 'Clean dataset',
        icon: 'nav-icon fa fa-tasks',
        children: [
            {
                name: 'Remove duplicates',
                icon: 'nav-icon fa fa-braille',
                path: ['/Supprimer-les-doubles']
            },

            {
                name: 'Remove null values',
                icon: 'nav-icon fa fa-spinner',
                path: ['/Supprimer-les-nulles']
            },

            {
                name: 'Remove infinit values',
                icon: 'nav-icon fa fa-bullseye',
                path: ['/Supprimer-les-infinies']
            }
        ]
    },
    {
        name: 'Reduce dimension',
        icon: 'nav-icon fa fa-cogs',
        path: ['/Reduce-dimension']
    },
    {
        name: 'balance Dataset',
        icon: 'nav-icon fa fa-balance-scale',
        path: ['/balancing']
    },
];
