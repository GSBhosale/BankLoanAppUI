import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{
 
 enquiryform:FormGroup;
 
 constructor(private cs:CommonService,private fb:FormBuilder,private router:Router){}
 

  ngOnInit(): void {

    this.enquiryform=this.fb.group({
      firstName:[],
      middleName:[],
      lastName:[],
      age:[],
      mobileNo:[],
      panNo:[],
      city:[],
      dateOfBirth:[],
      emailId:[],
      gender:[],
      cibilScore:[]
    })
  }

  onEnquirySubmit()
  {
   // alert("submit")
    this.cs.makeEnquiry(this.enquiryform.value).subscribe();
    console.log(this.enquiryform.value)
  }

}
