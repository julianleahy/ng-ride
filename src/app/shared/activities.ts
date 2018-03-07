import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    'id': 1,
    'name': 'Makara Peak',
    'date': new Date('01/01/2018'),
    'distance': 7.3,
    'comments': 'Great flowing trails',
    'gpxData': 'assets/gpx/1.gpx'

  },
  {
    'id': 2,
    'name': 'Mt. Kaukau',
    'date': new Date('01/09/2018'),
    'distance': 4.2,
    'comments': 'Tough ride, big climb!',
    'gpxData': 'assets/gpx/2.gpx'

  },
  {
    'id': 3,
    'name': 'Mt. Victoria',
    'date': new Date('01/21/2018'),
    'distance': 5.8,
    'comments': 'Great ride down!',
    'gpxData': 'assets/gpx/3.gpx'

  },
  {
    'id': 4,
    'name': 'Coastal Ride',
    'date': new Date('01/26/2018'),
    'distance': 15.6,
    'comments': 'Beautiful day for the road bike',
    'gpxData': 'assets/gpx/4.gpx'

  },
];
