import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-all-enquiries',
  templateUrl: './view-all-enquiries.component.html',
  styleUrls: ['./view-all-enquiries.component.css']
})
export class ViewAllEnquiriesComponent implements OnInit{

  constructor(private cs:CommonService){}
  enquiry:any;
  ngOnInit(): void {

    this.cs.viewAllEnquiry().subscribe((e:any)=>{
      this.enquiry=e;
    })
  }

  
}
