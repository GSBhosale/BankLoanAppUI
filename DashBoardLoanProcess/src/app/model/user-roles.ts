export class UserRoles {

    public static userRoles:Array<any>=[
        {
            RelationshipExecutive:[
                {path:'view_enquiry' , lable:'View Enquiry'},
                {path:'req_cibil' , lable:'Request Cibil'},
                {path:'apply_loan' ,lable:'Apply Loan'},
                {path:'success_mail', lable:'Success Mail'},
                {path:'reject_mail', lable:'Reject Mail'}
            ],

            OperationalExecutive:[
                {path:'check_cibil', lable:'Check Cibile Score'},
                {path:'verify_doc', lable:'Document Verification'}
            ],
            CreditManager:[
                {path:'saction_letter' , lable:'Saction Letter'}
            ],
            AccountHead:[
                {path:'disbus_loan' , lable:'Disbus Loan'},
                {path:'view_leadger' , lable:'View Leadger'}
            ],
            Admin:[
                {path:'newuser' , lable:'New User'},
                {path:'allusers' , lable:'View User'},
                {path:'allproposals' ,lable:'View All Proposals'},
                {path:'allenquiry' , lable:'Enquiry History'},
                {path:'areacustomer' ,lable:'Area Wise Customer'},
            ]
        }
    ]
}
