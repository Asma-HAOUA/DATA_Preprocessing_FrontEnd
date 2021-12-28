import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ApiService} from "@services/api.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-supprimer-infinies',
  templateUrl: './supprimer-infinies.component.html',
  styleUrls: ['./supprimer-infinies.component.scss']
})
export class SupprimerInfiniesComponent implements OnInit {

  first = 0;
  rows = 10;
  columns :string[] = new Array();
  RowsHaveInfinitValues :any[];

  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getInfinitValues();
  }

  getInfinitValues(){
    this.api.getInfinitRows().subscribe(
      (response:any[])=>{
        this.RowsHaveInfinitValues=response;
        for (let col in this.RowsHaveInfinitValues[0]){
          this.columns.push(col);
        }
      },
      (error: HttpErrorResponse)=>{
        this.toastr.error('There is a problem');
      }
    );
    console.log(this.RowsHaveInfinitValues);
  }

  // ################### pagination
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.RowsHaveInfinitValues ? this.first === (this.RowsHaveInfinitValues.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.RowsHaveInfinitValues ? this.first === 0 : true;
  }

  deleteInfinitValues(){
      this.api.deletetRows_InfinitValues().subscribe(
        (response:any)=>{
          this.getInfinitValues();
          this.toastr.success(response.total+' Rows deleted successfully');
        },
        (error: HttpErrorResponse)=>{
          this.toastr.error('There is a problem, try again');
        }
      )
  }

}
