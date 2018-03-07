// model data associated with an activity
export interface IActivity {
  id: number;
  name: string;
  data: Date;
  comments?: string;
  distance?: number;
  gpxData: string;
}
