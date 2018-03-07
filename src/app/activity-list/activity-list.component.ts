import { ActivityService } from './../sevices/activity.service';
import { IActivity } from './../shared/activity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities      = this.activityService.getAllActivities();
    this.totalActivities = this.activityService.totalActivities(this.activities);
    this.totalDistance   = this.activityService.totalDistance(this.activities);
    this.firstDate       = this.activityService.getFirstDate(this.activities);
  }

}
