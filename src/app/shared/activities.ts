import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    'id': 1,
    'name': 'Blue Hill Trail',
    'date': new Date('06/01/2018'),
    'distance': 6.3,
    'comments': 'Great easy ride',
    'gpxData': '../../assets/gpx/1.gpx'

  },
  {
    'id': 2,
    'name': 'Rocky Road Trails',
    'date': new Date('12/01/2018'),
    'distance': 10.7,
    'comments': 'Tough ride, Big climbs!',
    'gpxData': '../../assets/gpx/2.gpx'

  },
  {
    'id': 3,
    'name': 'Senty Post',
    'date': new Date('18/01/2018'),
    'distance': 7.0,
    'comments': 'Long winding trails!',
    'gpxData': '../../assets/gpx/3.gpx'

  },
  {
    'id': 4,
    'name': 'Black Cross',
    'date': new Date('29/01/2018'),
    'distance': 12.3,
    'comments': 'Very technical ride',
    'gpxData': '../../assets/gpx/4.gpx'

  },
];
