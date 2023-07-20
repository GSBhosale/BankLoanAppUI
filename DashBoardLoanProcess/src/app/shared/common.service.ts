import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  

  constructor(private http:HttpClient) { }

  makeEnquiry(enquiry:any)
  {
    
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
  getCIBIL()
  {
    return this.http.get("http://localhost:9090/enquiry/getCIBIL");
  }

  createUser(data:any)
  {
    
    return this.http.post("http://localhost:9090/admin/createUser",data);
  }

  getAllUsers()
  {
    return this.http.get("http://localhost:9090/admin/getAllUsers")
  }

  deleteUser(uid:any)
  {
    return this.http.delete("http://localhost:9090/admin/deleteUser/"+uid);
  }

  getAllCustomer()
  {
    return this.http.get("http://localhost:9090/customer/verifyDocuments");
  }

  verifyAllDoc(customerId:any)
  {
    alert("Verify")
    return this.http.get("http://localhost:9090/customer/verifyDocs/"+customerId);
  }

  completeUplodDocs(customerId:any)
  {
    alert("Re Upload")
    return this.http.put("http://localhost:9090/customer/completeUplodDocs/",customerId);
  }
  successMail(eid:any)
  {
    return this.http.get("http://localhost:9090/enquiry/sendSuccessMail/"+eid)
  }
  rejectMail(eid:any)
  {
    return this.http.get("http://localhost:9090/enquiry/sendRejectMail/"+eid)
  }
  apply(eid:number)
  {
    return this.http.get("http://localhost:9090/enquiry/apply/"+eid)
  }
  sendRejectMail(eid:number)
  {
    return this.http.get("http://localhost:9090/enquiry/sendRejectMail/"+eid)
  }
  viewAllEnquiry()
  {
    return this.http.get("http://localhost:9090/admin/getAllEnquiry")
  }

  calculateEMI(calculate:any)
  {
    return this.http.post("http://localhost:9090/emiCalculator/emical",calculate);

  }
}
