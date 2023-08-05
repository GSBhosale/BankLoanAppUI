import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-disburse-loan',
  templateUrl: './disburse-loan.component.html',
  styleUrls: ['./disburse-loan.component.css']
})
export class DisburseLoanComponent implements OnInit{
x:any=0
y:any=0;
customer:any;
cust:any;

disburseForm:FormGroup
totalam:any

constructor(private cs:CommonService,private router:Router,private fb:FormBuilder){}
  ngOnInit(): void {

    this.disburseForm=this.fb.group({
      totalLoanAmount:['',Validators.required],
      disburseAmount:['',Validators.required],
      paymentStatus:['',Validators.required],
      transferAmount:['',Validators.required]
    })

    this.cs.getForDisbursement().subscribe((l:any)=>
    {
      this.customer=l;
    });
  }

  popUp(c:any)
  {
    this.cust=c;
    console.log(this.cust)
    this.x=2
    this.disburseForm.patchValue({

      totalLoanAmount:this.cust.sanctionLetter.totalLoanAmountWithInterest,
      disburseAmount:this.cust.sanctionLetter.loanAmountSanctioned,
      transferAmount:this.cust.sanctionLetter.loanAmountSanctioned
    })

    this.totalam=this.disburseForm.controls['totalLoanAmount'].value
  }

  submit()
  {
this.cs.disburseLoan(this.disburseForm.value,this.cust.customerId).subscribe();
this.cs.sendDisbursementLetter(this.cust.customerId).subscribe();
this.cs.createLedger(this.cust.customerId).subscribe();
  }

  onClose()
  {
    this.x=0;
  }
}
