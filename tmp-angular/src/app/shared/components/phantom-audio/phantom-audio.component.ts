import { PhantomService } from './../../services/phantom.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-phantom-audio',
  templateUrl: './phantom-audio.component.html',
  styleUrls: ['./phantom-audio.component.css']
})
export class PhantomAudioComponent implements OnInit, AfterViewInit {

  constructor(private phantomService: PhantomService) { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

  }

}
