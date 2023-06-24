import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-trend-chart',
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.css']
})
export class TrendChartComponent {





  public chart: any;






  createChart() {




    this.chart = new Chart("MyChart", {

      type: 'doughnut', //this denotes tha type of chart




      data: {// values on X-Axis

        labels: ['Novel', 'Sci-fi', 'Comedy', 'Techinals', 'History', 'General', 'Magazine'],

        datasets: [{

          label: 'First',

          data: [20, 10, 15, 25, 5, 10, 15],

          backgroundColor: [

            'violet',

            'indigo',

            'blue',

            'green',

            'yellow',

            'orange',

            'red',

          ],

          hoverOffset: 4

        }],

      },

      options: {

        aspectRatio: 2.5

      }




    });

  }





  ngOnInit(): void {

    this.createChart();

  }




}
