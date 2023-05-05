import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import * as dataValue from '../../../data/tracks.json'
import { of } from 'rxjs'
import { TracksDefaultService } from './tracks-default.service';

describe('TracksDefaultService', () => {
  let service: TracksDefaultService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new TracksDefaultService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it(`🆗🆗 Testing get tracks`, (done: DoneFn) => {

    const mockResponse: any = (dataValue as any).default;

    httpClientSpy.get.and.returnValue(of(mockResponse))

    service.getTracksTrend()
      .subscribe(response => {
        expect(response).toEqual(mockResponse.data)
        done()
      })
  })
});
