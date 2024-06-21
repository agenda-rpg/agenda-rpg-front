import { StorageService } from './../../../../core/services/storage/storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate } from '../../../shared/Utils';

@Component({
  selector: 'app-register-general-info',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  templateUrl: './register-general-info.component.html',
  styleUrl: './register-general-info.component.scss',
  providers: [provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }]
})
export class RegisterGeneralInfoComponent {
  @Output() goToPasswordEmitter = new EventEmitter<string>()

  generalInfoForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    birthday: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.min(10), Validators.max(11)]],
    userType: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {}

  setValuesToStorage() {
    this.storageService.registerUser.name = this.generalInfoForm.get('name')?.value as string;
    this.storageService.registerUser.email = this.generalInfoForm.get('email')?.value as string;
    this.storageService.registerUser.birthday = formatDate(this.generalInfoForm.get('birthday')?.value as string);
    this.storageService.registerUser.phone = this.generalInfoForm.get('phone')?.value as string;
    this.storageService.registerUser.userType = this.generalInfoForm.get('userType')?.value as string;
  }

  goToPassword() {
    this.setValuesToStorage();
    this.goToPasswordEmitter.emit('passwordPage');
  }
}
