import { ActivityModel } from './../../../../core/models/activity-model';
import { ActivitiesService } from './../../../../core/services/activities/activities.service';
import { AfterViewInit, Component, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { EventModel } from '../../../../core/models/event-model';

@Component({
  selector: 'app-event-accordeon',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule],
  templateUrl: './event-accordeon.component.html',
  styleUrl: './event-accordeon.component.scss'
})
export class EventAccordeonComponent implements AfterViewInit{
  @Input() event!: EventModel;
  panelOpenState = false;
  activities: ActivityModel[] = []

  constructor(private activitiesService: ActivitiesService) {}

  ngAfterViewInit(): void {
    this.getActivities()
  }

  getActivities() {
    this.event.activities.forEach(activity => {
      this.activitiesService.getActivity(activity).subscribe(
        {
          next: (activity) => {
            this.activities.push(activity);
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('finished get activity call');
          },
        }
      )
    })
  }
}
