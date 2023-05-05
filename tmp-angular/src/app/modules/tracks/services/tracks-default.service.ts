import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as tracks from "../../../data/tracks.json"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/track-model';
import { tap, map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class TracksDefaultService {

  constructor(private http: HttpClient) { }

  public getTracksTrend(): Observable<any> {
    /**
     * Mock datos! Esto sera la estructura que retorna la API
     *     name: string;
    album: string;
    cover: string;
    artist?: ArtistModel;
    duration?: TrackDuractiontModel
     */

    // const { data } = (tracks as any).default
    // return of(data)

    return this.http.get<any>(`${environment.URL_API}/tracks`)
      .pipe(
        tap((preview: any) => console.log(preview)),
        map((rawData) => rawData.data)
      )
  }

  public getTracksRecent(): Observable<any> {
    /**
     * Mock datos! Esto sera la estructura que retorna la API
     *     name: string;
    album: string;
    cover: string;
    artist?: ArtistModel;
    duration?: TrackDuractiontModel
     */

    const data = [
      {
        _id: '1',
        name: 'Getting Over',
        album: 'One Love',
        cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
        artist: {
          name: 'David Guetta',
          nickname: 'David Guetta',
          nationality: 'FR'
        },
        duration: {
          start: 0,
          end: 333
        },
        url: 'http://localhost:3000/track.mp3'
      }
    ]

    return of(data)
  }

  public getTracksRecommend(): Observable<any> {
    /**
     * Mock datos! Esto sera la estructura que retorna la API
     *     name: string;
    album: string;
    cover: string;
    artist?: ArtistModel;
    duration?: TrackDuractiontModel
     */

    const data = [
      {
        _id: '1',
        name: 'Getting Over',
        album: 'One Love',
        cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
        artist: {
          name: 'David Guetta',
          nickname: 'David Guetta',
          nationality: 'FR'
        },
        duration: {
          start: 0,
          end: 333
        },
        url: 'http://localhost:3000/track.mp3'
      }
    ]

    return of(data)
  }
}
