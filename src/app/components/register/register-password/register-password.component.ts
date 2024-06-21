import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-register-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './register-password.component.html',
  styleUrl: './register-password.component.scss'
})
export class RegisterPasswordComponent {

  passwordForm = this.formBuilder.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {}

  setUserPassword() {
    this.storageService.registerUser.password = this.passwordForm.get('password')?.value as string;
  }

  showUserInfo() {
    this.setUserPassword()
    console.log(this.storageService.registerUser)
  }

}
