import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-get-cibil',
  templateUrl: './get-cibil.component.html',
  styleUrls: ['./get-cibil.component.css']
})
export class GetCibilComponent {

  constructor(private cs:CommonService){}

  x:any
  cibilscore:any
  enquiry:any;

  ngOnInit(): void {

    this.cs.getCIBIL().subscribe((e:any)=>{
      this.enquiry=e
    })
  }

  onSuccess(){
    this.x=5;
  }
  
}
