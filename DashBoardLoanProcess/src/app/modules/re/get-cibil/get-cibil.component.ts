import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-get-cibil',
  templateUrl: './get-cibil.component.html',
  styleUrls: ['./get-cibil.component.css']
})
export class GetCibilComponent {

  constructor(private cs:CommonService,private router:Router){}

  x:any
  cibilscore:any
  enquiry:any;

  ngOnInit(): void {

    this.cs.getCIBIL().subscribe((e:any)=>{
      this.enquiry=e
    })
  }

  onSuccess(eid:any){
    this.x=eid;

    this.cs.successMail(eid).subscribe();
  }

  onReject(eid:any){
    

    this.cs.rejectMail(eid).subscribe();
  }

  onApply(e:any)
  {
    this.cs.apply(e.enquiryId).subscribe();
      this.router.navigateByUrl('/dash/RelationshipExecutive/apply_loan/'+JSON.stringify(e))
  }
  
}
