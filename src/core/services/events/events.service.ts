import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../models/event-model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  URL = "http://localhost:3000/events"

  constructor(private http: HttpClient) { }

  public getAllEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.URL);
  }

  public getEvent(id: number): Observable<EventModel> {
    const url = `${this.URL}/${id}`;
    return this.http.get<EventModel>(url)
  }

  public createNewEvent(event: Event) {
    return this.http.post(this.URL, event)
  }

  public updateEvent(event: Event) {
    return this.http.put(this.URL, event)
  }

  public deleteEvent(id: number) {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url)
  }
}
