import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-see-accounts',
  templateUrl: './see-accounts.component.html',
  styleUrls: ['./see-accounts.component.css']
})
export class SeeAccountsComponent implements OnInit{
 
  constructor(private cs:CommonService){}
 cust:any
customer:any
  ngOnInit(): void {
    let emi=sessionStorage.getItem('authUser');
    this.cust=JSON.parse(emi);
this.cs.getSingleCustomer(this.cust.customerId).subscribe((c:any)=>{
this.customer=c;
})
  }

}
