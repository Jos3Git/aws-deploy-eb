import { HomeComponent } from './modules/home/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidSessionGuard } from '@core/guards/valid-session.guard';

const routes: Routes = [
  {
    path: 'auth', //TODO http://localhost:4200/auth
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',//TODO: localhost:4200/
    component: HomeComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
    canActivate: [ValidSessionGuard] //TODO -->
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
