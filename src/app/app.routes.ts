import { Routes } from '@angular/router';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { ErrorRouteComponent } from './error-route/error-route.component';

export const routes: Routes = [
  { path: 'default-route', component: DefaultRouteComponent },
  { path: 'second-route', component: SecondRouteComponent },
  { path: 'error-404', component: ErrorRouteComponent },
  { path: '', redirectTo: '/default-route', pathMatch: 'full' },
  { path: '**', redirectTo: '/error-404', pathMatch: 'full' },
];
