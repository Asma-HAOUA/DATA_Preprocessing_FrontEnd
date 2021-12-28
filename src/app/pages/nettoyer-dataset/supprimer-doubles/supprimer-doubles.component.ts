import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ApiService} from "@services/api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-supprimer-doubles',
  templateUrl: './supprimer-doubles.component.html',
  styleUrls: ['./supprimer-doubles.component.scss']
})
export class SupprimerDoublesComponent implements OnInit {

  first = 0;
  rows = 10;
  nullRows :any[];
  columns :string[] = new Array();

  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getNullValues();
  }

    // ################### API
    getNullValues(){
      this.api.duplValues().subscribe(
        (response:any[])=>{
          this.nullRows=response;
          for (let col in this.nullRows[0]){
            this.columns.push(col);
          }
        },
        (error: HttpErrorResponse)=>{
          this.toastr.error(error.toString());
        }
      );
    }

    deleteNullValues() {
      this.api.deleteduplRows().subscribe(
        (response:any)=>{
          this.getNullValues();
          this.toastr.success(response.totalDupl+' Duplicate Rows are deleted');
        },
        (error: HttpErrorResponse)=>{
          this.toastr.error('There is a problem');
        }
      )
    }

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
