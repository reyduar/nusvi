import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SidebarService,
  SearchService,
  UsuarioService,
  SharedService,
  LoginGuardGuard
} from './service.index';


@NgModule({
  imports: [CommonModule, HttpModule, HttpClientModule],
  providers: [SettingsService, SidebarService, UsuarioService, SearchService, SharedService, LoginGuardGuard],
  declarations: []
})
export class ServiceModule {}
