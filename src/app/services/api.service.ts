import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  // communicate with upload API (POST) return 10 rows of dataset
  public uploadDataset(files):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/upload`,files);
  }

  // communicate with null values API (GET) return all rows with null values
  public nullValues() : Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/null_values`);
  }

  // communicate with delete null values API (DELETE) return number of all null values deleted
  public deleteNullRows():Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/delete_null`);
  }
}
