import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-doc-verification',
  templateUrl: './doc-verification.component.html',
  styleUrls: ['./doc-verification.component.css']
})
export class DocVerificationComponent {

  doc:any
  x:any=0;
  v:any=0;
  r:any=0;
  n:number=0;
  g:number=0;
  customer:any
  file:string;
  constructor(private cs:CommonService){}
  ngOnInit(): void {
    this.cs.getAllCustomer().subscribe((c:any)=>{
      this.customer=c;
    })
  }

  onVerify(c:any)
  {
    console.log(c)
    this.x=5
    this.doc=c;
  }
  verify()
  {
    this.v++
    console.log("Verify Documents "+this.v);
  }
  reject()
  {
    this.r++
      console.log("Reject Documents "+this.r);
  }

  next()
  {
    this.n++
    if(this.n==7)
    {
      this.g++
    }
  }

  verifyAllDoc(customerId:number)
  {
    if(this.v==8)
    {
      this.cs.verifyAllDoc(customerId).subscribe();
    }
    else{
        this.cs.completeUplodDocs(customerId).subscribe();
    }
  }

  
}
