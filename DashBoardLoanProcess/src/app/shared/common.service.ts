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

  getAllEnquiries()
  {
    return this.http.get("http://localhost:9090/enquiry/viewAllEnquiry");
  }

  getAllEnquiryToOE()
  {
    return this.http.get("http://localhost:9090/enquiry/viewAllEnquiryToOE");
  }

  onForward(eid:any) {
    alert(eid)
    return this.http.get("http://localhost:9090/enquiry/forwardToOE/"+eid);
  }


  oncheckingCIBIL(eid:any)
  {
    return this.http.get("http://localhost:9090/enquiry/checkCIBIL/"+eid);
  }
  submit(apply:any)
  {
    return this.http.post("http://localhost:9090/customer/createCustomer",apply);

  }
}
