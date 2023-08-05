import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent {

  customerDetails:FormGroup;
  // personal_step = false;
  // address_step = false;
  // doc_step = false;

  addressProof:any;
  panCard:any;
  adharCard:any;
  incomeProof:any;
  bankPassbook:any;
  photo:any;
  signature:any;
  thumb:any;
  bankCheque:any;

enquiry:any

  step = 1;
  constructor(private formBuilder: FormBuilder,private c:CommonService,private activatedroute:ActivatedRoute) { }
  ngOnInit() {
  let e:any=sessionStorage.getItem('enquiry');
this.enquiry=e;

    this.customerDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      panNo:['',Validators.required],
      age: ['', Validators.required],
      emailId: ['', Validators.required],
      education: ['', Validators.required],
      occupation: ['', Validators.required],

      address:this.formBuilder.group({

        localAddress:this.formBuilder.group({
          landmark: ['', Validators.required],
          areaName: ['', Validators.required],
          cityName: ['', Validators.required],
          pincode: ['', Validators.required],
        }),
        permanentAddress:this.formBuilder.group({
          landmark: ['', Validators.required],
          areaName: ['', Validators.required],
          cityName: ['', Validators.required],
          pincode: ['', Validators.required],
        })
      }),
      allPersonalDocuments: this.formBuilder.group({
        addressProof: ['', Validators.required],
        panCard: ['', Validators.required],
        adharCard: ['', Validators.required],
        incomeProof: ['', Validators.required],
        bankPassbook: ['', Validators.required],
        passportPhoto: ['', Validators.required],
        signature: ['', Validators.required],
        thumb: ['', Validators.required],
        bankCheque: ['', Validators.required]
      }),
      accountDetails:this.formBuilder.group({
        accountType: ['', Validators.required],
        accoubntHoldersName: ['', Validators.required],
        accountNumbber: ['', Validators.required],
        requiredLoanAmount: ['', Validators.required],
        tenureInYear: ['', Validators.required],
        bankdetails:this.formBuilder.group({
            bankName: ['', Validators.required],
            bankAddress : ['', Validators.required],
            bankIFSC: ['', Validators.required],
          })
      }),
      cibil:this.formBuilder.group({
        cibilScore:[]
      })

    });
    this.getParamData();
  }
  getParamData()
  {
    this.activatedroute.paramMap.subscribe(param=>{
    this.enquiry=JSON.parse(param.get('data'));
    })
    this.customerDetails.patchValue({
      firstName:this.enquiry.firstName,
      middleName:this.enquiry.middleName,
      lastName:this.enquiry.lastName,
      age:this.enquiry.age,
      mobileNo:this.enquiry.mobileNo,
      dateOfBirth:this.enquiry.dateOfBirth,
      emailId:this.enquiry.emailId,
      panNo:this.enquiry.panNo,
      cibil:{
        cibilScore:this.enquiry.cibilScore
      }
    })
  //  alert(this.customerDetails.controls['cibil'].get('cibilScore').value);
  }

// getpersonal(){ return this.customerDetails.controls; }

// geteducation() { return this.educationalDetails.controls; }

next(){
  
  if (this.step == 1) {
    // this.personal_step = true;
    // if (this.customerDetails.invalid) { return }
    this.step++
   
  }
}
next1()
{
  if (this.step == 2) {
    // this.doc_step = true;
    // if (this.personalDocuments.invalid) { return }
    this.step++;
  }
}
previous(){
  this.step--
  if (this.step == 1) {
    // this.personal_step = false;
  }
  // if(this.step==2){
  //   this.education_step = false;
  // }
}
  // submit(){
  //   if(this.step==3){
  //     this.education_step = true;
  //     if (this.educationalDetails.invalid) { return }
  //   }
  // }

  onaddressProof(event:any)
  {
   
      this.addressProof=event.target.files[0];
  }
  onpanCard(event:any)
  {
      this.panCard=event.target.files[0];
  }
  onadharCard(event:any)
  {
      this.adharCard=event.target.files[0];
  }
  onincomeProof(event:any)
  {
      this.incomeProof=event.target.files[0];
  }
  onbankPassbook(event:any)
  {
      this.bankPassbook=event.target.files[0];
  }
  onpassportPhoto(event:any)
  {
      this.photo=event.target.files[0];
  }
  onsignature(event:any)
  {
      this.signature=event.target.files[0];
  }
  onthumb(event:any)
  {
      this.thumb=event.target.files[0];
  }
  onbankCheque(event:any)
  {
      this.bankCheque=event.target.files[0];
  }

  submit()
  {
    const json=JSON.stringify(this.customerDetails.value);

    const data=new FormData();
    data.append("addressProof",this.addressProof);
    data.append("panCard",this.panCard);
    data.append("adharCard",this.adharCard);
    data.append("incomeProof",this.incomeProof);
    data.append("bankPassbook",this.bankPassbook);
    data.append("passportPhoto",this.photo);
    data.append("signature",this.signature);
    data.append("thumb",this.thumb);
    data.append("bankCheque",this.bankCheque);
    data.append("data",json);

    this.c.submit(data).subscribe();
    // window.location.reload();
  }
}

