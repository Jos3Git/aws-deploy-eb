import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const test = new ElementRef<any>('')
    const directive = new ImgBrokenDirective(test);
    expect(directive).toBeTruthy();
  });
});
