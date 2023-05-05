import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { PhantomAudioComponent } from './components/phantom-audio/phantom-audio.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    MediaPlayerComponent,
    SideBarComponent,
    HeaderComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PhantomAudioComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PhantomAudioComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    TestComponent
  ]
})
export class SharedModule { }
