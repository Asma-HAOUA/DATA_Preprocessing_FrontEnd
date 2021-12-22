import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ApiService} from "@services/api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-supprimer-nulles',
  templateUrl: './supprimer-nulles.component.html',
  styleUrls: ['./supprimer-nulles.component.scss']
})
export class SupprimerNullesComponent implements OnInit {

  first = 0;
  rows = 10;
  nullRows :any[];
  columns :string[] = new Array();

  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(){
    this.getNullValues();
  }

  // ################### API
  getNullValues(){
    this.api.nullValues().subscribe(
      (response:any[])=>{
        this.nullRows=response;
        for (let col in this.nullRows[0]){
          this.columns.push(col);
        }
      },
      (error: HttpErrorResponse)=>{
        this.toastr.error('There is a problem');
      }
    );
  }

  deleteNullValues() {
    this.api.deleteNullRows().subscribe(
      (response:any)=>{
        this.getNullValues();
        this.toastr.success(response.total+' Rows with null values are deleted');
      },
      (error: HttpErrorResponse)=>{
        this.toastr.error('There is a problem');
      }
    )
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
    return this.nullRows ? this.first === (this.nullRows.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.nullRows ? this.first === 0 : true;
  }
}
