import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { MatDialog } from '@angular/material/dialog';
import { AllEmiComponent } from '../all-emi/all-emi.component';

@Component({
  selector: 'app-view-all-ledgers',
  templateUrl: './view-all-ledgers.component.html',
  styleUrls: ['./view-all-ledgers.component.css']
})
export class ViewAllLedgersComponent implements OnInit{

  customer:any
  constructor(private cs:CommonService,private router:Router,private dialog: MatDialog){}
  ngOnInit(): void {

this.cs.getAllLedger().subscribe((c:any)=>{
  this.customer=c;
})
  }
  openPopupForm(c:any) {

    sessionStorage.setItem('emi',JSON.stringify(c));
    this.router.navigateByUrl('/dash/AccountHead/all_emi');
  }


}
