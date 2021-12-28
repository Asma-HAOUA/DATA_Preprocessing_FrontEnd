import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-import-dataset',
  templateUrl: './import-dataset.component.html',
  styleUrls: ['./import-dataset.component.scss']
})
export class ImportDatasetComponent implements OnInit {

  uploadedFiles: any[] = [];
  selectedFile: any = null;
  fileList : any = null ;


  constructor(private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onFilesSelected(event:any){

    for(let i = 0; i < event.target.files.length; i++){
      this.uploadedFiles.push(event.target.files[i]);
    }

    if(this.uploadedFiles.length>0)
    {
      (<HTMLInputElement>document.getElementById("upload")).style.display = "flex";
    }
    console.log(this.uploadedFiles.length);
  }


  onUpload(){
    const file=new FormData();
    for(let i = 0; i < this.uploadedFiles.length; i++){
      file.append("fileName", this.uploadedFiles[i]);
      
      console.log(file);
    }
    this.http.post<any>('http://127.0.0.1:5000/upload',file)
    .subscribe(res=>{
      console.log(res );
    })
    this.toastr.success('fichiers importés avec succès ');

  
  }
}
