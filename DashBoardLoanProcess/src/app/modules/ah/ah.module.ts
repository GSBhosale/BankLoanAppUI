import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { DisburseLoanComponent } from './disburse-loan/disburse-loan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisburseLoanComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,ReactiveFormsModule
  ]
})
export class AhModule { }
