import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit{

  user:any;
  constructor(private cs:CommonService){}
  ngOnInit(): void {

    this.cs.getAllUsers().subscribe((u:any)=>{
      this.user=u;
    })
  }

  onDelete(uid:any)
  {
    this.cs.deleteUser(uid).subscribe();
  }
}
