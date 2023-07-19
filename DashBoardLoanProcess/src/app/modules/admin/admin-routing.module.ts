import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';
import { ViewAllProposalsComponent } from './view-all-proposals/view-all-proposals.component';
import { ViewAllEnquiriesComponent } from './view-all-enquiries/view-all-enquiries.component';
import { ViewAreaWiseCustomersComponent } from './view-area-wise-customers/view-area-wise-customers.component';

const routes: Routes = [
  {path:"newuser", component:CreateNewUserComponent},
  {path:"allusers" , component:ViewAllUserComponent},
  {path:"allproposals" , component:ViewAllProposalsComponent},
  {path:"allenquiry" , component:ViewAllEnquiriesComponent},
  {path:"areacustomer" , component:ViewAreaWiseCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
