import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-get-cibil',
  templateUrl: './get-cibil.component.html',
  styleUrls: ['./get-cibil.component.css']
})
export class GetCibilComponent {

  constructor(private cs:CommonService){}

  cibilscore:any
  enquiry:any;

  ngOnInit(): void {

    this.cs.getAllEnquiryToOE().subscribe((e:any)=>{
      this.enquiry=e
    })
  }

  oncheckingCIBIL(eid:any)
  {
    this.cs.oncheckingCIBIL(eid).subscribe();
    window.location.reload();
  }
}
