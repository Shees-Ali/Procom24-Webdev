import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'chart.js';
import { BasePage } from '../../../base/base';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent extends BasePage implements OnInit {
  @ViewChild('chart') chart?: ChartComponent;
  @ViewChild('chart2') chart2?: ChartComponent;

  public chartOptions?: any;
  public chartOptions2?: any;
  constructor(injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    const res = await this.network.getReporting();
    const pendingCount = res.data.pendingCount;
    const acceptedCount = res.data.acceptedCount;
    const rejectedCount = res.data.rejectedCount;

    const pendingAmount = res.data.pendingAmount;
    const acceptedAmount = res.data.acceptedAmount;
    const rejectedAmount = res.data.rejectedAmount;

    this.chartOptions = {
      series: [pendingCount, acceptedCount, rejectedCount],
      chart: {
        type: 'donut',
      },
      labels: ['Pending Records', 'Accepted Records', 'Rejected Records'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '200px',
              height: '200px',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions2 = {
      series: [pendingAmount, acceptedAmount, rejectedAmount],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Pending Amount', 'Accepted Amount', 'Rejected Amount'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '200px',
              height: '200px',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
