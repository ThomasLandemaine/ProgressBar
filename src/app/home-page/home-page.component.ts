import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  firstBarValue = 25;
  secondBarValue = 50;

  resetToZero() {
    this.firstBarValue = 0;
    this.secondBarValue = 0;
  }

  addFivePercent() {
    this.firstBarValue = this.firstBarValue + 5 >= 100 ? 100 : this.firstBarValue + 5;
    this.secondBarValue = this.secondBarValue + 5 >= 100 ? 100 : this.secondBarValue + 5;
    console.log(this.firstBarValue)
  }

  addTenPercent() {
    this.firstBarValue = this.firstBarValue + 10 >= 100 ? 100 : this.firstBarValue + 10;
    this.secondBarValue = this.secondBarValue + 10 >= 100 ? 100 : this.secondBarValue + 10;
  }
}
