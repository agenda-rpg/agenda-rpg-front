import { Component } from '@angular/core';
import { RegisterGeneralInfoComponent } from './register-general-info/register-general-info.component';
import { RegisterPasswordComponent } from './register-password/register-password.component';
import { StorageService } from '../../../core/services/storage/storage.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterGeneralInfoComponent, RegisterPasswordComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  showGeneralInfoPage = true;
  showPasswordPage = false;

  constructor(private storageService: StorageService) {}

  changePage(pageToShow: string) {
    switch (pageToShow) {
      case 'generalInfo':
        this.showGeneralInfoPage = true;
        this.showPasswordPage = false;
        break;
      case 'passwordPage':
        this.showGeneralInfoPage = false;
        this.showPasswordPage = true;
    }
  }
}
