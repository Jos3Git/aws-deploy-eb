import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { CardPlayerComponent } from './card-player.component';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPlayerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    component.track = {
      "_id": "1",
      "name": "Getting Over",
      "album": "One Love",
      "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
      "artist": {
        "name": "David Guetta",
        "nickname": "David Guetta",
        "nationality": "FR"
      },
      "duration": 100,
      "url": "http://localhost:3000/track.mp3"
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
