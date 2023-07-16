import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutUsComponent } from './templets/about-us/about-us.component';
import { ContactComponent } from './templets/contact/contact.component';
import { LocationComponent } from './templets/location/location.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { LoginComponent } from './entry/login/login.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent,
  children:[
    {path:'aboutus' , component:AboutUsComponent},
    {path:'contact' , component:ContactComponent},
    {path:'location' , component:LocationComponent},
    {path:'enquiry' , component:EnquiryComponent},
    {path:'login' , component:LoginComponent}
  ]
},
{
  path:'dash',component:DashBoardComponent,children:[
    {
      path:'RelationshipExecutive' ,loadChildren:()=>import('src/app/modules/re/re.module').then(m=>m.ReModule)
    },
    {
      path:'OperationalExecutive' , loadChildren:()=>import('src/app/modules/oe/oe.module').then(m=>m.OeModule)
    },
    {
      path:'Credit Manager' ,loadChildren:()=>import('src/app/modules/cm/cm.module').then(m=>m.CmModule)
    },
    {
      path:'Account Head' , loadChildren:()=>import('src/app/modules/ah/ah.module').then(m=>m.AhModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }