import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StorageService } from '../../../core/services/storage/storage.service';
import { EventModel } from '../../../core/models/event-model';
import { formatDate } from '../../shared/Utils';
import { AddressModel } from '../../../core/models/address-model';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss',
  providers: [provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }]
})
export class NewEventComponent {

  newEventForm = this.formBuilder.group({
    eventName: ['', [Validators.required]],
    eventDay: ['', [Validators.required]],
    street: ['', Validators.required],
    number: ['', Validators.required],
    neighborhood: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    cep: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {}

  createNewEvent() {
    console.log(this.newEventForm)
    const newEvent: EventModel = new EventModel;
    const newEventAddress: AddressModel = new AddressModel;
    newEvent.activities = [];
    newEvent.date = formatDate(this.newEventForm.get('eventDay')?.value as string);
    newEvent.name = this.newEventForm.get('eventName')?.value as string;
    newEventAddress.street = this.newEventForm.get('street')?.value as string;
    newEventAddress.number = +(this.newEventForm.get('number')?.value as string);
    newEventAddress.neighborhood = this.newEventForm.get('neighborhood')?.value as string;
    newEventAddress.city = this.newEventForm.get('city')?.value as string;
    newEventAddress.state = this.newEventForm.get('state')?.value as string;
    newEventAddress.cep = +(this.newEventForm.get('cep')?.value as string);
    newEvent.local = newEventAddress
    console.log(newEvent)
  }


}
