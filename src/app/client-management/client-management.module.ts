import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementComponent } from './client-management.component';
import { MaterialImportsModule } from '../core/material-imports/material-imports.module';


@NgModule({
  declarations: [
    ClientManagementComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    MaterialImportsModule
  ]
})
export class ClientManagementModule { }
