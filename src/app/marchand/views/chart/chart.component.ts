import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
    chartData: number[] = [112, 10, 225, 134, 101, 80, 50, 100, 200];
    labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    tooltipContent: string = '';
    tooltipOpen: boolean = false;
    tooltipX: number = 0;
    tooltipY: number = 0;

    showTooltip(e: MouseEvent) {
      console.log(e);
      this.tooltipContent = (e.target as HTMLElement).textContent || '';
      this.tooltipX = (e.target as HTMLElement).offsetLeft - (e.target as HTMLElement).clientWidth;
      this.tooltipY = (e.target as HTMLElement).clientHeight + (e.target as HTMLElement).clientWidth;
      this.tooltipOpen = true;
    }

    hideTooltip() {
      this.tooltipContent = '';
      this.tooltipOpen = false;
      this.tooltipX = 0;
      this.tooltipY = 0;
    }
}
