import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track-model';
import { FavoriteService } from '@modules/favorites/services/favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  dataTracks: Array<TrackModel> = []
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.laodData()
  }

  laodData(): void {
    this.favoriteService.getFavorites()
      .subscribe(res => this.dataTracks = res)
  }

}
