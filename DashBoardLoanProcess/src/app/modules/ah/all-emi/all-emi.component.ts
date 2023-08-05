import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
@Component({
  selector: 'app-all-emi',
  templateUrl: './all-emi.component.html',
  styleUrls: ['./all-emi.component.css']
})
export class AllEmiComponent implements OnInit{

  customer:any;
  allEmi:any[];
  constructor(private cs:CommonService,private router:Router,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
   
    let cust=sessionStorage.getItem('emi');
    this.customer=JSON.parse(cust)
this.allEmi=this.customer.ledger.emis;

     }


}
