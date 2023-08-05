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
  sanctionloan(sanction:any,cid:any)
  {
    return this.http.put("http://localhost:9090/sanction/sanctionLoan/"+cid,sanction);
  }

  getSanction()
  {
    return this.http.get("http://localhost:9090/sanction/getSanction");
  }
  sendPdf(cid:any)
  {
    return this.http.get("http://localhost:9090/sanction/mailPdf/"+cid);

  }

  getForDisbursement()
  {
    return this.http.get("http://localhost:9090/disbursement/loanDisbursement");
  }

  disburseLoan(dl:any,cid:number)
  {
    return this.http.post('http://localhost:9090/disbursement/createLoanDisbursement/'+cid,dl);
  }

  sendDisbursementLetter(cid:any)
  {
    
    return this.http.get("http://localhost:9090/disbursement/mailPdf/"+cid);
  }

  createLedger(cid:any)
  {
    return this.http.get("http://localhost:9090/ledger/createEMI/"+cid);
  }

  getAllLedger()
  {
    return this.http.get("http://localhost:9090/ledger/getAllLedgers");
  }

  authCustomer(username:any,password:any)
  {
    return this.http.get("http://localhost:9090/customer/authCustomer/"+username+"/"+password);
  }

  payEMI(emiId:any,cid:any)
  {
    return this.http.get("http://localhost:9090/emi/payEmi/"+emiId+"/"+cid);
  }

  getAllEmi(cid:any)
  {
    return this.http.get("http://localhost:9090/emi/getAllEmi/"+cid);
  }

  getSingleCustomer(cid:any)
  {
    return this.http.get("http://localhost:9090/customer/getSingleCustomer/"+cid);
  }

  getAllCustomers()
  {
    return this.http.get("http://localhost:9090/customer/getAllCustomers");
  }

  getAreaWise(city:any)
  {
    return this.http.get("http://localhost:9090/customer/areaWiseCustomers/"+city);
  }
}
