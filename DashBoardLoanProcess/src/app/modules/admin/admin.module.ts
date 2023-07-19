import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';
import { ViewAllEnquiriesComponent } from './view-all-enquiries/view-all-enquiries.component';
import { ViewAllProposalsComponent } from './view-all-proposals/view-all-proposals.component';
import { ViewAreaWiseCustomersComponent } from './view-area-wise-customers/view-area-wise-customers.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateNewUserComponent,
    ViewAllUserComponent,
    ViewAllEnquiriesComponent,
    ViewAllProposalsComponent,
    ViewAreaWiseCustomersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
