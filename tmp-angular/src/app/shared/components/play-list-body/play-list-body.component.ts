import { TrackModel } from './../../../core/models/track-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = []
  optionSort: { name: string | null, order: string } = { name: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void {
  }

  changeSort(name: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      name,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
