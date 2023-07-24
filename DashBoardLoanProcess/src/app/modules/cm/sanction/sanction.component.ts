import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionComponent implements OnInit 
{
  sactionDetails:FormGroup
 sanction:any;
x:any=0;
y:any;
customer:any


  constructor(private fb:FormBuilder,private cs:CommonService,private router:Router)
  {
    
  }
  ngOnInit()
   {
    this.sactionDetails = this.fb.group
    ({
      applicantName: ['', Validators.required],
      contactDetails: ['', Validators.required],
      loanAmountSanctioned: ['', Validators.required],
      loanTenure: ['', Validators.required],
      rateOfInterest:['', Validators.required],


    })

    this.cs.getSanction().subscribe((s:any)=>{
      this.sanction=s;
    })
    
}

popUp(c:any)
{
  this.customer=c;
  this.x=2
  this.sactionDetails.patchValue({
    applicantName:this.customer.firstName+" "+this.customer.lastName,
    contactDetails:this.customer.mobileNo,
    

  })
}

submit()
{
  this.y=2
  this.cs.sanctionloan(this.sactionDetails.value,this.customer.customerId).subscribe();
  this.cs.sendPdf(this.customer.customerId).subscribe();
}

onClose()
{
  this.x=0
}


}

