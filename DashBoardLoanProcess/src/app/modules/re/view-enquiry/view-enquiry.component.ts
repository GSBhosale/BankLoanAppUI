import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {

  constructor(private cs:CommonService,private router:Router){}
enquiry:any;
  getAllEnquiries()
  {
    this.cs.getAllEnquiries().subscribe((e)=>{
this.enquiry=e;
    })
  }
}
