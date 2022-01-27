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

  //communicate api, willreturn all rows which have infinit values
  public getInfinitRows():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/infinit_values`);
  }

  // communicate with delete null values API (DELETE) return number of all null values deleted
  public deletetRows_InfinitValues():Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/delete_infinit`);
  }
  // communicate with duplicate values API (GET) return all rows duplicated
  public duplValues() : Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/duplicate_values`);
  }

  // communicate with delete null values API (DELETE) return number of all null values deleted
  public deleteduplRows():Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/delete_duplicate`);
  }


  //########################## Dashboard api ################################
  // count different class rows
  public countClass():Observable<any>{
    return this.http.get(`${this.apiServerUrl}/count_class`);
  }

  //########################## Data to export ################################
  public latestData():Observable<any>{
    return this.http.get<Blob>(`${this.apiServerUrl}/latestData`,{ observe: 'body', responseType: 'blob' as 'json' });
  }

}
