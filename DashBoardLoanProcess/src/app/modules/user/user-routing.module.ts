import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayEMIComponent } from './pay-emi/pay-emi.component';
import { SeeAccountsComponent } from './see-accounts/see-accounts.component';

const routes: Routes = [
  {path:'pay_emi' , component:PayEMIComponent},
  {path:'see_Account' , component:SeeAccountsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
