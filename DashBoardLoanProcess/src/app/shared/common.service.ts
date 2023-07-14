import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  makeEnquiry(enquiry:any)
  {
    alert("service")
    return this.http.post("http://localhost:9090/enquiry/makeEnquiry",enquiry);
  }

  authUser(username:any,password:any)
  {
    return this.http.get("http://localhost:9090/admin/authenticateUser/"+username+"/"+password);
  }
}
