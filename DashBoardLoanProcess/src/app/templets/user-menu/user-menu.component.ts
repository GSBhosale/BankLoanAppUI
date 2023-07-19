import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/model/user-roles';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
 
  userOptions:Array<any>;
 user:any
  constructor(private router:Router,private cs:CommonService){}
 
 
  ngOnInit(): void {
    this.userOptions=   UserRoles.userRoles;
    
     let userType=  sessionStorage.getItem('authUser');
     this.user=JSON.parse(userType);
     
    }

    navigateTo(path:string)
    {
      alert(path)
        this.router.navigateByUrl('/dash/'+this.user.designation+'/'+path);
    }

   
  
  }
