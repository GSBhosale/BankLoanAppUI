export class UserRoles {

    public static userRoles:Array<any>=[
        {
            RelationshipExecutive:[
                {path:'view_enquiry' , lable:'View Enquiry'},
                {path:'req_cibil' , lable:'Request Cibil'},
              
            ],

            OperationalExecutive:[
                {path:'check_cibil', lable:'Check Cibile Score'},
                {path:'verify_doc', lable:'Document Verification'}
            ],
            CreditManager:[
                {path:'saction_letter' , lable:'Sanction Letter'}
            ],
            AccountHead:[
                {path:'disbus_loan' , lable:'Disburse Loan'},
                {path:'view_leadger' , lable:'View Leadger'}
            ],
            Admin:[
                {path:'newuser' , lable:'New User'},
                {path:'allusers' , lable:'View User'},
                {path:'allproposals' ,lable:'View All Proposals'},
                {path:'allenquiry' , lable:'Enquiry History'},
                {path:'areacustomer' ,lable:'Area Wise Customer'},
            ],
            Customer:[
                {path:'pay_emi' , lable:'Pay EMI'},
                {path:'see_Account' , lable:'My Account'}
            ]
        }
    ]
}
