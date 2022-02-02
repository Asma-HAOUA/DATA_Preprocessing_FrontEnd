import { Component, OnInit } from '@angular/core';
import {ApiService} from "@services/api.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-balancing',
  templateUrl: './balancing.component.html',
  styleUrls: ['./balancing.component.scss']
})
export class BalancingComponent implements OnInit {

  icon :string = "pi pi-sliders-h";

  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  balancing() {
    this.icon = "pi pi-spin pi-spinner";
    this.api.balancingData().subscribe(
      ()=>{
        this.icon = "pi pi-sliders-h";
        this.toastr.success("dataset is balanced successfully");
      },
      (error: HttpErrorResponse)=>{
        this.icon = "pi pi-sliders-h";
        this.toastr.error('There is a problem, probably you should firstly clean your dataset');
    }
    )
  }
}
