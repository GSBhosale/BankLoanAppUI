import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent{

  emiForm:FormGroup;
  constructor(private fb:FormBuilder){}
 
  rangeVar: string;

  changeRange(value: string, ref: HTMLInputElement) {
    ref.value = value;
  }


}
