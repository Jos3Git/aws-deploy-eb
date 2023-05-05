import { PhantomService } from './../../services/phantom.service';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track-model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() track!: TrackModel;
  @Input() mode: 'small' | 'big' = 'small'
  status: 'playing' | 'paused' = 'paused';

  constructor(public phantomService: PhantomService) { }

  ngOnInit(): void {
    this.phantomService.playerStatus.subscribe((a: any) => {

      this.status = a;
    })
  }

  play(): void {
    this.phantomService.setAudio(this.track.url, this.track)
  }
}
