import { Component, OnInit } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  chartDataArray = [
    { id: 'chart1', title: 'Users', value: '3,682', trend: '▲ 57.1%' },
    { id: 'chart2', title: 'Subscribers', value: '11,427', trend: '▼ 42.8%' },
    { id: 'chart3', title: 'Comments', value: '8,028', trend: '▲ 8.2%' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeCharts();
  }
  initializeCharts() {
    
    const chartOptions = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
        elements: {
            point: {
                radius: 0
            },
        },
        scales: {
            xAxes: [{
                gridLines: false,
                scaleLabel: false,
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: false,
                scaleLabel: false,
                ticks: {
                    display: false,
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }]
        }
    };

    this.chartDataArray.forEach(chartData => {
        const canvas = document.getElementById(chartData.id) as HTMLCanvasElement;
        if (canvas) {
            const ctx = canvas.getContext('2d')!;
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: [1, 2, 1, 3, 5, 4, 7],
                    datasets: [
                        {
                            backgroundColor: "rgba(101, 116, 205, 0.1)",
                            borderColor: "rgba(101, 116, 205, 0.8)",
                            borderWidth: 2,
                            data: [1, 2, 1, 3, 5, 4, 7],
                        },
                    ],
                },
                options: chartOptions
            });
        }
    });
}

}