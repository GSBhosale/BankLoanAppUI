import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisburseLoanComponent } from './disburse-loan/disburse-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAllLedgersComponent } from './view-all-ledgers/view-all-ledgers.component';
import { AllEmiComponent } from './all-emi/all-emi.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AhRoutingModule } from './ah-routing.module';

@NgModule({
  declarations: [
    DisburseLoanComponent,
    ViewAllLedgersComponent,
    AllEmiComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,ReactiveFormsModule,MatDialogModule
  ]
})
export class AhModule { }
