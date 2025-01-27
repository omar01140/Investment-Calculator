import { Injectable } from "@angular/core";

import { type annualData } from "./annualData.model";
import { type data } from "./user-input/data.model";



@Injectable({providedIn: 'root'})
export class InvestService{

  annualData:annualData[] = [];

  calculateInvestmentResults(data:data) {
    let investmentValue = data.initial;
    this.annualData = []

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expected / 100);
      investmentValue += interestEarnedInYear + data.annual;
      const totalInterest =
        investmentValue - data.annual * year - data.initial;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annual,
        totalInterest: totalInterest,
        totalAmountInvested: data.initial + data.annual * year,
      });
    }
    console.log(this.annualData);

  }
}
