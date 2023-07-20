import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit{

  constructor(private cs:CommonService,private router:Router){}
  enquiry:any;

  ngOnInit(): void {
    this.cs.getAllEnquiries().subscribe((e)=>{
      this.enquiry=e;
          })
  }

  onForward(eid:any)
  {
    this.cs.onForward(eid).subscribe();
  }  

  sendRejectMail(eid:number)
  {
this.cs.sendRejectMail(eid).subscribe();
  }

}
