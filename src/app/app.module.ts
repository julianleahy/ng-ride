import { MapService } from './services/map.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from './services/activity.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../route';
import { GitlinkComponent } from './gitlink/gitlink.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent,
    GitlinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
