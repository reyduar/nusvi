import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Panel Principal' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Ejemplo de Barra de Progreso' } },
            { path: 'grafica1', component: Graficas1Component, data: { titulo: 'Ejemplo de Graficos' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Ejemplo de Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Ejemplo de RxJs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Configuraciones' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
      }
];

export const PAGES_ROUTE = RouterModule.forChild( pagesRoutes );
