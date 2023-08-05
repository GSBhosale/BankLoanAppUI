import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SeeAccountsComponent } from './see-accounts/see-accounts.component';
import { PayEMIComponent } from './pay-emi/pay-emi.component';


@NgModule({
  declarations: [
    SeeAccountsComponent,
    PayEMIComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
