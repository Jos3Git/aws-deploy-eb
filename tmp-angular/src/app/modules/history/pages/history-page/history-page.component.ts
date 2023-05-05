import { Subscription, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { TrackModel } from '@core/models/track-model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  data$: Observable<any> = new Observable()
  data: TrackModel[] = []
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  catchData($event: any): void {
    console.log('Estoy en PADRE', $event);
    this.data$ = this.searchService.searchTrack($event)
    // this.searchService.searchTrack($event)
    //   .subscribe(response => {
    //     this.data = response;

    //   })

  }
}
