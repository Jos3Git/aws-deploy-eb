import { PhantomService } from './../../services/phantom.service';
import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  @ViewChild('progressBar') progressBar!: ElementRef
  @HostListener('click', ['$event']) catchHandle($event: any) {
    const className = $event.target.classList.toString() || ''
    if (['time-progress', 'time-progress-live'].includes(className)) {
      this.handlePositionMs($event)
    }
  }
  status: 'playing' | 'paused' = 'paused';
  percentage = 0;
  startTime = ''
  endTime = ''
  durationTotalMs: number = 0;

  constructor(public phantomService: PhantomService) { }

  ngOnInit(): void {
    this.phantomService.playerStatus.subscribe((a: any) => {
      this.status = a;
    })

    this.phantomService.percentElapsed.subscribe((a: any) => {
      this.percentage = a;
    })

    this.phantomService.timeElapsed.subscribe((a: any) => {
      this.startTime = a
    })

    this.phantomService.timeRemaining.subscribe((a: any) => {
      this.endTime = a
    })

    this.phantomService.durationTotal.subscribe((a: any) => {
      this.durationTotalMs = a

    })

  }

  setPosition(percentage: number): void {
    const percentageToSeconds = (percentage * this.durationTotalMs) / 100
    this.phantomService.seekAudio(percentageToSeconds)
  }

  handlePositionMs(event: any): void {
    const elementRef = this.progressBar.nativeElement;
    const { width, x } = elementRef.getBoundingClientRect()
    const clientX = event.clientX - x
    const positionToPercentage = (clientX * 100) / width
    this.setPosition(positionToPercentage)
  }

}
