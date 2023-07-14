import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { SuccessEmailComponent } from './success-email/success-email.component';
import { RejectEmailComponent } from './reject-email/reject-email.component';

const routes: Routes = [
  {path:'view_enquiry' ,component:ViewEnquiryComponent},
{path:'req_cibil',component:GetCibilComponent},
{path:'apply_loan' , component:ApplyLoanComponent},
{path:'success_mail' , component:SuccessEmailComponent},
{path:'reject_mail' , component:RejectEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
