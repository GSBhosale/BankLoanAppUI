import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { SanctionComponent } from './sanction/sanction.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SanctionComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    ReactiveFormsModule
  ]
})
export class CmModule { }
