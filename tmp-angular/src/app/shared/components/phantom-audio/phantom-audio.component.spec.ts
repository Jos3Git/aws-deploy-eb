import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomAudioComponent } from './phantom-audio.component';

describe('PhantomAudioComponent', () => {
  let component: PhantomAudioComponent;
  let fixture: ComponentFixture<PhantomAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhantomAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
