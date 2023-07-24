import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisburseLoanComponent } from './disburse-loan/disburse-loan.component';

const routes: Routes = [
  {path:'disbus_loan' , component:DisburseLoanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
