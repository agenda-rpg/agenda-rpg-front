import { Component, OnInit, inject } from '@angular/core';
import { EventAccordeonComponent } from './event-accordeon/event-accordeon.component';
import { EventsService } from '../../../core/services/events/events.service';
import { EventModel } from '../../../core/models/event-model';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventAccordeonComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  providers: [provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }]
})
export class EventsComponent implements OnInit{

  events!: EventModel[]
  userType!: string;

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.getEvents();
    this.userType = sessionStorage.getItem('typeUser') as string;
  }

  getEvents() {
    this.eventsService.getAllEvents().subscribe(
      {
        next: events => {
          this.events = events
        },
        error: e => {
          console.error(e);
        },
        complete: () => {
          console.table(this.events)
        }
      }
    )
  }
}
