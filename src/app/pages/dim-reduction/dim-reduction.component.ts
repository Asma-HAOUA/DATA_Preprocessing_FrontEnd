import { Component, OnInit } from '@angular/core';
import {ApiService} from "@services/api.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dim-reduction',
  templateUrl: './dim-reduction.component.html',
  styleUrls: ['./dim-reduction.component.scss']
})
export class DimReductionComponent implements OnInit {
  icon :string = "pi pi-sort-amount-down";
  first = 0;
  rows = 10;
  nullRows :any[];
  columns :string[] = new Array();
  status : boolean = false;

  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  reducing() {
    this.icon = "pi pi-spin pi-spinner";
    this.api.reduceDimension().subscribe(
      (response:any[])=>{
        this.status=true;
        this.nullRows=response;
          for (let col in this.nullRows[0]){
            this.columns.push(col);
          }
        this.icon = "pi pi-sort-amount-down";
        this.toastr.success("dimension is reduced successfully");
      },
      (error: HttpErrorResponse)=>{
        this.icon = "pi pi-sort-amount-down";
        this.toastr.error('There is a problem, probably you should firstly clean your dataset');
    }
    )
  }

}
