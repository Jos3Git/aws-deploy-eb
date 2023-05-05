import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleErrorImg(): void {
    console.log('Esta imagen esta rota -> ', this.el.nativeElement.src);
    this.el.nativeElement.src = 'https://i.imgur.com/2higpRq.png'


  }
  constructor(private el: ElementRef) {

  }

}
