import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.css']
})
export class PayEMIComponent implements OnInit{

allEmi:any
cust:any
customer:any;
  constructor(private cs:CommonService){}

n:any=1;

  ngOnInit(): void {
let emi=sessionStorage.getItem('authUser');
this.cust=JSON.parse(emi);
this.cs.getAllEmi(this.cust.customerId).subscribe((c:any)=>{
this.customer=c;
this.allEmi=this.customer.ledger.emis;
console.log(this.customer)
})


  }

  payEMI(emiId:any)
  {
alert("paid")
this.cs.payEMI(emiId,this.customer.customerId).subscribe();
window.location.reload();
  }
}
