import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() cbData: EventEmitter<any> = new EventEmitter()
  src!: any;
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(event: string): void {
    if (event && event.length >= 3) {
      this.cbData.emit(event)
    }
  }

}
