import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginform:FormGroup
user:any
 constructor(private fb:FormBuilder , private router:Router ,private cs:CommonService){}
  ngOnInit(): void {

    this.loginform=this.fb.group({
      username:[],
      password:[]
    })
  }

  authUser()
  {
    this.cs.authUser(this.loginform.controls['username'].value,this.loginform.controls['password'].value).subscribe((responce:any)=>{

      console.log(responce)
      if(responce!=null)
      {

        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Log in Successfull ...',
          showConfirmButton: false,
          timer: 2000
        })
        sessionStorage.setItem("authUser",JSON.stringify(responce));
        this.router.navigateByUrl('/dash/'+responce.designation)
      }
      else{
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Ohhh...',
          text:'enter valid credentials..! or register First'
          
         
        })
        
      
      }
    })
  }

  onlogin()
  {
    if(this.loginform.controls['username'].value=='re'
       &&this.loginform.controls['password'].value=='re@123')
       {                          //KEY       VALUE
           sessionStorage.setItem('userType','re');

          this.router.navigateByUrl('/dash/re')
       }
       else if(this.loginform.controls['username'].value=='oe'
       &&this.loginform.controls['password'].value=='oe@123')
       {
        sessionStorage.setItem('userType','oe')
        this.router.navigateByUrl('/dash/oe');
       }
       else if(this.loginform.controls['username'].value=='cm'
       &&this.loginform.controls['password'].value=='cm@123')
       {
        sessionStorage.setItem('userType','cm')
        this.router.navigateByUrl('/dash/cm');
       }
       else if(this.loginform.controls['username'].value=='ah'
       &&this.loginform.controls['password'].value=='ah@123')
       {
        sessionStorage.setItem('userType','ah')
        this.router.navigateByUrl('/dash/ah');
       }
       else{
        alert("Enter valid username or password..!")
       }
  }

}
