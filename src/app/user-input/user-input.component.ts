import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type data } from './data.model';
import { InvestService } from '../invest.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  constructor( private InvestService :InvestService ){}

  data: data ={
    initial:0,
    annual:0,
    expected:0,
    duration:0,
  }

  sendData(){
    this.InvestService.calculateInvestmentResults(this.data)
  }

}
