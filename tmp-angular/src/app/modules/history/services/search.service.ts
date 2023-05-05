import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchTrack(src: string): Observable<any> {
    return this.http.get<any>(`${environment.URL_API}/tracks`)
      .pipe(
        tap((preview: any) => console.log(preview)),
        map((rawData) => rawData.data)
      )
  }
}
