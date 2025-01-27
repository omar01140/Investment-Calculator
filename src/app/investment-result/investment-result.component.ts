import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestService } from '../invest.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private InvestService = inject(InvestService)
  get allData() {
    return this.InvestService.annualData
  }
}
