import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGeneralInfoComponent } from './register-general-info.component';

describe('RegisterGeneralInfoComponent', () => {
  let component: RegisterGeneralInfoComponent;
  let fixture: ComponentFixture<RegisterGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterGeneralInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
