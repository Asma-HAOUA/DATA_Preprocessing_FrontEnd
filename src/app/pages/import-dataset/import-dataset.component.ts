import { HttpClient } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '@services/file-upload.service';
import {ToastrService} from "ngx-toastr";
declare const uploadFilesJS : any ;

@Component({
  selector: 'app-import-dataset',
  templateUrl: './import-dataset.component.html',
  styleUrls: ['./import-dataset.component.scss']
})
export class ImportDatasetComponent implements OnInit {

  /*uploadedFiles: any[] = [];
  //selectedFile: any = null;
  fileList : any = null ;*/
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

  constructor(private http: HttpClient,private toastr: ToastrService, private uploadService: FileUploadService) { }

  ngOnInit(): void {

    this.fileInfos = this.uploadService.getFiles();
    console.log("from ngOnInit ");
    console.log(this.fileInfos);
    let fileInput = <HTMLInputElement>document.getElementById("file-input");
    (<HTMLInputElement>document.getElementById("spanUpload")).addEventListener("click", () =>{
      fileInput.click();
    });
    
  }


  onFilesSelected(event:any){
    /*for(let i = 0; i < event.target.files.length; i++){
      this.uploadedFiles.push(event.target.files[i]);
    }
    this.file = event.target.files[0];
    console.log("hello from ts");
    if(this.file)
    {
      (<HTMLInputElement>document.getElementById("btn-Upload")).style.display = "block";
    }
    console.log(this.uploadedFiles.length);*/
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    if(this.selectedFiles)
    {
      (<HTMLInputElement>document.getElementById("btn-Upload")).style.display = "block";
    }
    console.log(this.selectedFiles);
    
  }

  calculSize(size:number):number{
    let file_Size : any ;
    if(size< 1024)
      file_Size = size + "KB";
    else
      file_Size = (size / (1024*1024)).toFixed(2) + " MB";
    return file_Size;
  }

  reduceFileName(fileName:String):String{
    if(fileName.length >= 20){
      let splitName = fileName.split('.');
      //fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
      fileName = splitName[0].substring(0, 21) + "..."+".csv";
    }
    return fileName;
  }
  
  uploadFiles(): void {
    this.message = [];
    let elements = document.querySelectorAll('.progress-bar');
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
      (<HTMLDivElement>elements[i]).style.display = "block";
    }
    
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
    (<HTMLInputElement>document.getElementById("btn-Upload")).style.display = "none";

    
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            console.log("ana f response");
            const msg = ' the  : ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
            this.toastr.success('files Uploaded successfully');
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        }
      });
    }
  }

  //http request sending list of files 
  /*upload() {
    
    const formData: FormData = new FormData();
    /*for(let i = 0; i < this.uploadedFiles.length; i++){
      formData.append("fileName", this.uploadedFiles[i]);
    }
    if(this.file)
    {
      formData.append('fileName', this.file);
      console.log(formData);

    this.http.post<any>('http://127.0.0.1:5000/upload',formData,{
      reportProgress: true,
      responseType: 'json'
    }).subscribe(
      (event: any) => {
        console.log("this is event "+event);
        console.log(event);
        console.log(event.type === HttpEventType.UploadProgress);
        if (event.type === HttpEventType.UploadProgress) {
          console.log("hello from subscribe");
          this.progressInfos.value = Math.round(100 * event.loaded / event.total);
          console.log(this.progressInfos.value);
        } else if (event instanceof HttpResponse) {
          const msg = 'files uploaded successfully';
          this.message.push(msg);
          //this.fileInfos = this.uploadService.getFiles();
          console.log("hello from subscribe");
          console.log(this.progressInfos);
        }
      },
      (err: any) => {
        this.progressInfos.value = 0;
        const msg = 'Could not upload the files';
        this.message.push(msg);
        //this.fileInfos = this.uploadService.getFiles();
      }
    );
    }
    
  }*/



/*
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
  }*/
}
