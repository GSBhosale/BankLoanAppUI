export class UserRoles {

    public static userRoles:Array<any>=[
        {
            RelationshipExecutive:[
                {path:'view_enquiry' , lable:'View Enquiry'},
                {path:'req_cibil' , lable:'Request Cibil'},
                {path:'apply_loan' ,lable:'Apply Loan'},
                {Path:'success_mail' , lable:'Success Mail'},
                {Path:'reject_mail' , lable:'Reject Mail'}
            ],

            OperationalExecutive:[
                {path:'check_cibil', lable:'Check Cibile Score'},
                {path:'verify_doc', lable:'Document Verification'}
            ],
            cm:[
                {path:'saction_letter' , lable:'Saction Letter'}
            ],
            ah:[
                {path:'disbus_loan' , lable:'Disbus Loan'},
                {path:'view_leadger' , lable:'View Leadger'}
            ]
        }
    ]
}
