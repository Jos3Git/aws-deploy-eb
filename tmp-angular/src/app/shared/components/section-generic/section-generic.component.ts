import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/track-model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = 'Mi titulo'
  @Input() mode: 'small' | 'big' = 'small'
  @Input() dataTracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
