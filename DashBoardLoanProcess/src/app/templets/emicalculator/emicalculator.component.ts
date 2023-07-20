import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent implements OnInit{

  emiForm:FormGroup;
  x:any;
  emi:any
  constructor(private fb:FormBuilder,private cs:CommonService){}
  ngOnInit(): void {
   
    this.emiForm=this.fb.group({
      requriedAmount:[],
      rateOIintreast: [],
      tenour: []
    })
  }
 
  calculateEMI()
  { this.x=5
    console.log(this.emiForm.value)
      return this.cs.calculateEMI(this.emiForm.value).subscribe((e:any)=>
      {
     
        this.emi=e;
        console.log(this.emi)
      });
  }

}
