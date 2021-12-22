import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public user;
    public menu = MENU;

    constructor(public appService: AppService) {}

    ngOnInit() {
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        icon: 'nav-icon fas fa-th-large',
        path: ['/']
    },
    {
        name: 'Importer Dataset',
        icon: 'nav-icon fa fa-arrow-circle-down',
        path: ['/import-dataset']
    },
    {
        name: 'Nettoyer Dataset',
        icon: 'nav-icon fa fa-tasks',
        children: [
            {
                name: 'Supprimer les doubles',
                icon: 'nav-icon fa fa-braille',
                path: ['/Supprimer-les-doubles']
            },

            {
                name: 'Supprimer les nulles',
                icon: 'nav-icon fa fa-spinner',
                path: ['/Supprimer-les-nulles']
            },

            {
                name: 'Supprimer les infinies',
                icon: 'nav-icon fa fa-bullseye',
                path: ['/Supprimer-les-infinies']
            }
        ]
    },
    {
        name: 'Reduire Dataset',
        icon: 'nav-icon fa fa-cogs',
        path: ['/import-dataset']
    },
    {
        name: 'Equilibrer Dataset',
        icon: 'nav-icon fa fa-balance-scale',
        path: ['/import-dataset']
    },
];
