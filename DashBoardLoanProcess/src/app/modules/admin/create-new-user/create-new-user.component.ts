import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit{

  userForm:FormGroup;
  selectphoto:any;
  selectsignature:any;

  constructor(private fb:FormBuilder,private cs:CommonService){}
 
  ngOnInit(): void {

    this.userForm=this.fb.group({
      firstName:[],
      lastName:[],
      designation:[],
      mobileNumber:[],
      emailId:[],
      salary:[]
    })

  }

  onselectphoto(event:any)
  {
    this.selectphoto=event.target.files[0];
  }

  onselectsignature(event:any)
  {
    this.selectsignature=event.target.files[0];
  }

  onSubmit()
  {
    const json=JSON.stringify(this.userForm.value)

    const data=new FormData();

    data.append("photo",this.selectphoto);
    data.append("signature",this.selectsignature);
    
    data.append("user",json)

    this.cs.createUser(data).subscribe();

  window.location.reload();

  }

}
