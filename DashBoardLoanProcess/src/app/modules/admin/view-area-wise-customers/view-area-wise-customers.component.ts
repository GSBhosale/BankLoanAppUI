import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-area-wise-customers',
  templateUrl: './view-area-wise-customers.component.html',
  styleUrls: ['./view-area-wise-customers.component.css']
})
export class ViewAreaWiseCustomersComponent {

  city:any
  constructor(private cs:CommonService, privaterouter:Router){}

  onsearch(city:any)
  {
    alert(city);
    //this.cs.getAreaWiseCustomer().subscribe();
  }
}
