import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';


@Injectable()
export class ActivityService {

  constructor() { }

  getAllActivities(): IActivity[] {
    return [...SAVED_ACTIVITIES];
  }

  totalActivities(activity: IActivity[]): number {
    return activity.length;
  }

  totalDistance(activity: IActivity[]): number {
    let currentDistance = 0;
    for (let index = 0; index < activity.length; index++) {
      currentDistance += activity[index].distance;
    }
    return currentDistance;
  }

  getFirstDate(activity: IActivity[]): Date {
    let currentDate = new Date('01/01/9999');
    for (let index = 0; index < activity.length; index++) {
      if (activity[index].date < currentDate) {
        currentDate = activity[index].date;
      }
    }
    return currentDate;
  }



}
