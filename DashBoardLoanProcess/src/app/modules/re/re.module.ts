import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { SuccessEmailComponent } from './success-email/success-email.component';
import { RejectEmailComponent } from './reject-email/reject-email.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewEnquiryComponent,
    GetCibilComponent,
    ApplyLoanComponent,
    SuccessEmailComponent,
    RejectEmailComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
