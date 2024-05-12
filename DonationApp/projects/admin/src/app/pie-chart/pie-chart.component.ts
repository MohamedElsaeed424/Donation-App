import {Component, inject, OnInit} from '@angular/core';
import Chart, {Color} from 'chart.js/auto';
import {RegisteredDonorService} from "../Donor/registered-donors/RegisteredDonor.service";
import {OrganizationService} from "../Organization/registered-organization/RegisteredOrganization.service";
import {DonorType} from "../Donor/Donor.model";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{
  // constructor(title: string, labels: string[], data: number[], colors: Color[]) {
  //   this.pieChartLabels = labels;
  //   this.pieChartData = data;
  //   this.pieChartTitle = title;
  //   this.pieColors = colors;
  // }
  private donorService: RegisteredDonorService = inject(RegisteredDonorService);
  private orgService: OrganizationService = inject(OrganizationService);
  public chart: any;
  public pieChartTitle: string = 'Different StakeHolders';
  public pieChartLabels: string[] = ['Doctor','Teacher', 'Donors', 'Organization']; //
  public pieChartData: number[] = [
    this.donorService.getDonorsByType(DonorType.doctor).length,
    this.donorService.getDonorsByType(DonorType.teacher).length,
    this.donorService.getDonorsByType(DonorType.donor).length,
    this.orgService.getOrganizations().length
  ];
  public pieColors: Color[];

  public pieChartBorderWidth: number[] = [1, 1, 1];
  public pieChartBorderColor: string[] = ['#ffffff', '#ffffff', '#ffffff'];
  constructor() {
  }
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      // type: 'doughnut',
      data: {
        labels: this.pieChartLabels,
        datasets: [{
          label: this.pieChartTitle,
          data: this.pieChartData,
          backgroundColor: this.pieColors,
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 3,
        plugins: {
          title: {
            display: true,
            text: this.pieChartTitle,
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          }
        }
      }
    });
  }
  // Events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public onChartHover(event: any): void {
    if (event.active && event.active.length > 0) {
      // Get the index of the hovered slice
      const hoveredIndex = event.active[0]._index;

      // Create a copy of the default borderWidth and borderColor arrays to modify only the hovered slice
      const borderWidthCopy = [...this.pieChartBorderWidth];
      const borderColorCopy = [...this.pieChartBorderColor];

      // Increase the borderWidth and change borderColor for the hovered slice
      borderWidthCopy[hoveredIndex] = 5; // Example: Increase the borderWidth
      borderColorCopy[hoveredIndex] = 'rgba(0, 0, 0, 0.5)'; // Example: Change the borderColor to a darker color

      // Update the borderWidth and borderColor for the hovered slice
      this.pieChartBorderWidth = borderWidthCopy;
      this.pieChartBorderColor = borderColorCopy;
    }
  }



}
