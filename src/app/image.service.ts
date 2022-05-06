import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl = environment.url;
  
  constructor(private http: HttpClient) { }
  
  getImage(val:String){
    
    const options = {
      responseType: 'application/json' as const,
    };
    return this.http.get<String>(this.baseUrl + "/index?search=" + val);
  }

}
