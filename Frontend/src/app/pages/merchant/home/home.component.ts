import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { BasePage } from '../../../base/base';
import { ChartComponent, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends BasePage implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: any;
  constructor(injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    const res = await this.network.getReporting();
    const pendingCount = res.data.pendingCount;
    const acceptedCount = res.data.acceptedCount;
    const rejectedCount = res.data.rejectedCount;

    this.chartOptions = {
      series: [pendingCount, acceptedCount, rejectedCount],
      chart: {
        type: "donut",
        width: 480,
      },
      labels: ["Pending Records", "Accepted Records", "Rejected Records"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "200px",
              height: "200px"
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
