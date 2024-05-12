import {Component, inject, OnInit} from '@angular/core';
import Chart, {Color} from 'chart.js/auto';
import {RegisteredDonorService} from "../Donor/registered-donors/RegisteredDonor.service";
import {OrganizationService} from "../Organization/registered-organization/RegisteredOrganization.service";
import {DonorType} from "../Donor/Donor.model";
import _default from "chart.js/dist/core/core.interaction";
import x = _default.modes.x;

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
  public totalRegistered :number = this.pieChartData.reduce(function (a,b){ return a + b; });
  public percentages : number[] = this.pieChartData.map((d)=>{
    return d/this.totalRegistered*100;
  });
  public pieChartColors: Color[];
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
          label: this.pieChartTitle+"%",
          data: this.percentages,
          backgroundColor: this.pieChartColors,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
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



}
