import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PagenofoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});
