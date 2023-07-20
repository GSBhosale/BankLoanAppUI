import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent {

//   emiForm:FormGroup;
//   constructor(private fb:FormBuilder){}
//   rangeVar: string;

//   changeRange(value: string, ref: HTMLInputElement) {
//     ref.value = value;
//   }

 
//   principalAmount: number;
//   interestRate: number;
//   loanTenure: number;
//   emi: number;
//   totalInterestPayable: number;
//   showResult: boolean = false;
//   chartOptions: any;

//   calculateEMI() 
//   {
//     let monthlyInterestRate = this.interestRate / 1200;
//     let denominator = 1 - Math.pow(1 + monthlyInterestRate, -this.loanTenure);
//     this.emi = this.principalAmount * monthlyInterestRate / denominator;
//     this.totalInterestPayable = this.emi * this.loanTenure - this.principalAmount;
//     this.showResult = true;
//     this.chartOptions.series[0].data = [this.principalAmount, 0, 0];
//     this.chartOptions.series[1].data = [0, this.totalInterestPayable, 0];
//     this.chartOptions.series[2].data = [0, 0, this.emi*this.loanTenure];
//   }

//   reloadcalculator(){
//     window.location.reload();
//   }



}
