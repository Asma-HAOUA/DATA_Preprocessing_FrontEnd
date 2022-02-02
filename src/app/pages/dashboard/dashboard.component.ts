import {Component} from '@angular/core';
import {ApiService} from "@services/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import * as FileSaver from 'file-saver';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  basicData: any;
  columns :string[] = new Array();
  values :number[] = new Array();
  icon :string = "pi pi-file-excel";

  constructor(private api: ApiService, private toastr: ToastrService){}

  ngOnInit() {

    this.getColumns();

    this.basicData = {
      labels: this.columns,
      datasets: [
        {
          label: 'class size',
          backgroundColor: '#42A5F5',
          data: this.values
        }
      ]
    };

  }


  // ############## functions ##############
  getColumns(){
    this.api.countClass().subscribe(
      (response:any[])=>{
        for(let col in response){
          this.columns.push(col);
        }
        for(let val in response){
          this.values.push(response[val]);
        }
      },
      (error: HttpErrorResponse)=>{
        this.toastr.error('There is a problem');
      }
    )
  }


  exportExcel() {
    this.icon = "pi pi-spin pi-spinner";
    this.api.latestData().subscribe(
        (response:any[])=>{
          FileSaver.saveAs(
            response,
            "export.csv"
          );
          this.icon = "pi pi-file-excel";
          this.toastr.success('File uploaded successfully');
      },
      (error: HttpErrorResponse)=>{
        this.toastr.error('There is a problem');
      }
    )
  }
}
