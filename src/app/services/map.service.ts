import { SAVED_ACTIVITIES } from './../shared/activities';
import { IActivity } from './../shared/activity.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


const apiToken = environment.MAPBOX_API_KEY;
// for omnivore and Leaflet packages
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80];
const defaultZoom = 8;

@Injectable()
export class MapService {

  constructor() { }

  getActivity(id: number): IActivity {
    console.log(id);

    return SAVED_ACTIVITIES.slice(0).find(ride => ride.id === id);
  }

  // add custom style
  plotActivity(id: number) {
    const mapStyle = {
      'color': '#3949AB',
      'weight': 5,
      'opacity': 0.95
    };

    const map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      // tslint:disable-next-line:max-line-length
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    // add our styles
    const customLayer = L.geoJson(null, {
      style: mapStyle
    });

    // add our map
    const gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(ride => ride.id === id).gpxData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }

}
