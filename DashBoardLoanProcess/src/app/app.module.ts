import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entry/home/home.component';
import { LoginComponent } from './entry/login/login.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';
import { HomeHeaderComponent } from './templets/home-header/home-header.component';
import { AboutUsComponent } from './templets/about-us/about-us.component';
import { ContactComponent } from './templets/contact/contact.component';
import { LocationComponent } from './templets/location/location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashheaderComponent } from './templets/dashheader/dashheader.component';
import { UserMenuComponent } from './templets/user-menu/user-menu.component';
import { FooterComponent } from './templets/footer/footer.component';
import { EMICalculatorComponent } from './templets/emicalculator/emicalculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EnquiryComponent,
    DashBoardComponent,
    HomeHeaderComponent,
    AboutUsComponent,
    ContactComponent,
    LocationComponent,
    DashheaderComponent,
    UserMenuComponent,

    FooterComponent,
    EMICalculatorComponent
  ],

  

  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,RouterModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
