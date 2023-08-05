import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-all-proposals',
  templateUrl: './view-all-proposals.component.html',
  styleUrls: ['./view-all-proposals.component.css']
})
export class ViewAllProposalsComponent implements OnInit{

customer:any

  constructor(private cs:CommonService){}
  ngOnInit(): void {
this.cs.getAllCustomers().subscribe((c:any)=>{
  this.customer=c;
})
  }
}
