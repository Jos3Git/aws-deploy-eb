import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track-model';
import { TracksDefaultService } from '@modules/tracks/services/tracks-default.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksRecommend: Array<TrackModel> = []
  tracksRecent: Array<TrackModel> = []
  tracksTrend: Array<TrackModel> = []

  listSubscriptions: Array<Subscription> = []

  constructor(private tracksDefault: TracksDefaultService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    const observer1$ = this.tracksDefault.getTracksTrend()
      .subscribe(data => {
        console.log(data);
        this.tracksTrend = data;
      })

    const observer2$ = this.tracksDefault.getTracksRecommend()
      .subscribe(data => {
        console.log(data);
        this.tracksRecommend = data;
      })

    const observer3$ = this.tracksDefault.getTracksRecent()
      .subscribe(data => {
        console.log(data);
        this.tracksRecent = data;
      })

    this.listSubscriptions = [observer1$, observer2$, observer3$]
  }

  ngOnDestroy(): void {
    this.listSubscriptions.forEach(a => a.unsubscribe())
  }

}
