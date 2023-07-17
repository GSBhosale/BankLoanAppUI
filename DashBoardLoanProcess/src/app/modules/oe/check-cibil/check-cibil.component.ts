import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent implements OnInit{
  
  constructor(private cs:CommonService){}

  cibilscore:any
  enquiry:any;

  ngOnInit(): void {

    this.cs.getAllEnquiryToOE().subscribe((e:any)=>{
      this.enquiry=e
    })
  }

  oncheckingCIBIL()
  {
    alert(this.cibilscore)
  }
}
