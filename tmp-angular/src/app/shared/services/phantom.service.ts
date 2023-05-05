import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhantomService {
  public trackInfo!: TrackModel | undefined;
  public audio!: HTMLAudioElement;
  public timeElapsed: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public percentElapsed: BehaviorSubject<number> = new BehaviorSubject(0);
  public percentLoaded: BehaviorSubject<number> = new BehaviorSubject(0);
  public playerStatus: BehaviorSubject<string> = new BehaviorSubject('paused');
  public durationTotal: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.audio = new Audio()
    this.listenAll()
  }

  private listenAll(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('progress', this.calculatePercentLoaded, false);
    this.audio.addEventListener('waiting', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private calculateTime = () => {
    let ct = this.audio.currentTime;
    let d = this.audio.duration;
    console.log(ct, d)
    this.setTimeElapsed(ct);
    this.setPercentElapsed(d, ct);
    this.setTimeRemaining(d, ct);
    this.setDurationTotal(d)
  }

  private setDurationTotal(time: number): void {
    this.durationTotal.next(time)
  }


  private calculatePercentLoaded = (evt: any) => {
    if (this.audio.duration > 0) {
      for (var i = 0; i < this.audio.buffered.length; i++) {
        if (this.audio.buffered.start(this.audio.buffered.length - 1 - i) < this.audio.currentTime) {
          let percent = (this.audio.buffered.end(this.audio.buffered.length - 1 - i) / this.audio.duration) * 100;
          this.setPercentLoaded(percent)
          break;
        }
      }
    }
  }
  private setTimeElapsed(ct: number): void {
    let seconds = Math.floor(ct % 60),
      displaySecs = (seconds < 10) ? '0' + seconds : seconds,
      minutes = Math.floor((ct / 60) % 60),
      displayMins = (minutes < 10) ? '0' + minutes : minutes;

    this.timeElapsed.next(displayMins + ':' + displaySecs);
  }

  private setPercentElapsed(d: number, ct: number): void {
    this.percentElapsed.next((Math.floor((100 / d) * ct)) || 0);
  }

  private setTimeRemaining(d: number, t: number): void {
    let remaining;
    let timeLeft = d - t,
      seconds = Math.floor(timeLeft % 60) || 0,
      remainingSeconds = seconds < 10 ? '0' + seconds : seconds,
      minutes = Math.floor((timeLeft / 60) % 60) || 0,
      remainingMinutes = minutes < 10 ? '0' + minutes : minutes,
      hours = Math.floor(((timeLeft / 60) / 60) % 60) || 0;

    // remaining = (hours === 0)
    if (hours === 0) {
      remaining = '-' + remainingMinutes + ':' + remainingSeconds;
    } else {
      remaining = '-' + hours + ':' + remainingMinutes + ':' + remainingSeconds;
    }
    this.timeRemaining.next(remaining);
  }

  private setPlayerStatus = (evt: any) => {

    switch (evt.type) {
      case 'playing':
        this.playerStatus.next('playing');
        break;
      case 'pause':
        this.playerStatus.next('paused');
        break;
      case 'waiting':
        this.playerStatus.next('loading');
        break;
      case 'ended':
        this.playerStatus.next('ended');
        break;
      default:
        this.playerStatus.next('paused');
        break;
    }
  }

  private setPercentLoaded(p: any): void {
    this.percentLoaded.next(parseInt(p, 10) || 0);
  }

  /**
 * This method returns an Observable whose value is the track's percent loaded
 */
  public getPercentLoaded(): Observable<number> {
    return this.percentLoaded.asObservable();
  }

  /**
   * This method returns an Observable whose value is the track's percent elapsed
   */
  public getPercentElapsed(): Observable<number> {
    return this.percentElapsed.asObservable();
  }

  /**
   * This method returns an Observable whose value is the track's percent loaded
   */
  public getTimeElapsed(): Observable<string> {
    return this.timeElapsed.asObservable();
  }

  /**
   * This method returns an Observable whose value is the track's time remaining
   */
  public getTimeRemaining(): Observable<string> {
    return this.timeRemaining.asObservable();
  }

  /**
   * This method returns an Observable whose value is the current status of the player.
   * This is useful inside your component to key off certain values, for example:
   *   - Show pause button when player status is 'playing'
   *   - Show play button when player status is 'paused'
   *   - Show loading indicator when player status is 'loading'
   * 
   * See the setPlayer method for values.
   */
  public getPlayerStatus(): Observable<string> {
    return this.playerStatus.asObservable();
  }

  /**
   * Convenience method to toggle the audio between playing and paused
   */
  public toggleAudio(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  /**
 * If you need the audio instance in your component for some reason, use this.
 */
  public getAudio(): HTMLAudioElement {
    return this.audio;
  }

  /**
   * This is typically a URL to an MP3 file
   * @param src 
   */
  public setAudio(src: string, trackInfo?: TrackModel): void {
    this.audio.src = src;
    this.trackInfo = trackInfo
    this.playAudio();
  }

  /**
   * The method to play audio
   */
  public playAudio(): void {
    this.audio.play();
  }

  /**
   * The method to pause audio
   */
  public pauseAudio(): void {
    this.audio.pause();
  }

  /**
   * Method to seek to a position on the audio track (in milliseconds, I think), 
   * @param position 
   */
  public seekAudio(position: number): void {
    this.audio.currentTime = position;
  }
  /**
   * Get Duration in milliseconds
   */
  public getDurationMs(): Observable<any> {
    return this.durationTotal.asObservable()
  }
}
