import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb:FormBuilder,private cs:CommonService)
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

    
}
submit()
{
  this.cs.sanctionloan(this.sanction).subscribe();
}
}

