import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit  {
  showMore: boolean = false;
  buttonText: string = 'ver mais';

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.buttonText = this.showMore ? 'ver menos' : 'ver mais';
  }
}
