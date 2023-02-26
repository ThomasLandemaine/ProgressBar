import { Component, Input, OnChanges } from '@angular/core';



@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {
  @Input() percentage: Number = 0;

  progressBarClassName: String = "default";

  ngOnChanges() {
    this.progressBarClassName = this.setBarSizeAndColor();
  }

  setBarSizeAndColor(): String {
    if (this.percentage <= 25) {
      return ("low")
    } else if (this.percentage > 25 && this.percentage <= 50) {
      return ("middle-low")
    } else if (this.percentage > 50 && this.percentage <= 75) {
      return ("middle-high")
    } else {
      return ("high")
    }
  };
}
