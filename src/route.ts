import { Routes } from '@angular/router';
import { MapComponent } from './app/map/map.component';
import { ActivityListComponent } from './app/activity-list/activity-list.component';

export const appRoutes: Routes = [
  { path: 'rides', component: ActivityListComponent },
  { path: 'rides/:id', component: MapComponent },
  { path: '', redirectTo: '/rides', pathMatch: 'full' },

];
