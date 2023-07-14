import { Component } from '@angular/core';

@Component({
  selector: 'app-dashheader',
  templateUrl: './dashheader.component.html',
  styleUrls: ['./dashheader.component.css']
})
export class DashheaderComponent {

  userRole:string;
  ngOnInit(): void {
   let ut:string= sessionStorage.getItem('userType');
   if(ut=='re')
   {
    this.userRole='Relationship Executive';
   }
  else if(ut=='oe')
   {
    this.userRole='Operational Executive';
   }
   else if(ut=='cm')
   {
    this.userRole='Creadite Manager';
   }
   else if(ut=='ah')
   {
    this.userRole='Account Head';
   }
  }
}
