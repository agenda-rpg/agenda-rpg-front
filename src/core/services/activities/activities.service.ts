import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../../models/activity-model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  URL = "http://localhost:3000/activities"

  constructor(private http: HttpClient) { }

  public getAllActivities(): Observable<ActivityModel[]> {
    return this.http.get<ActivityModel[]>(this.URL);
  }

  public getActivity(id: number): Observable<ActivityModel> {
    const url = `${this.URL}/${id}`;
    return this.http.get<ActivityModel>(url)
  }

  public createNewActivity(activity: ActivityModel) {
    return this.http.post(this.URL, activity)
  }

  public updateActivity(activity: ActivityModel) {
    return this.http.put(this.URL, activity)
  }

  public deleteActivity(id: number) {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url)
  }
}
