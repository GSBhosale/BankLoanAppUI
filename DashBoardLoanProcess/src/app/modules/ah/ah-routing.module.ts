import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisburseLoanComponent } from './disburse-loan/disburse-loan.component';
import { ViewAllLedgersComponent } from './view-all-ledgers/view-all-ledgers.component';
import { AllEmiComponent } from './all-emi/all-emi.component';

const routes: Routes = [
  {path:'disbus_loan' , component:DisburseLoanComponent},
  {path:'view_leadger' , component:ViewAllLedgersComponent},
  {path:'all_emi' , component:AllEmiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
