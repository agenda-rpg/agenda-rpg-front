import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAccordeonComponent } from './event-accordeon.component';

describe('EventAccordeonComponent', () => {
  let component: EventAccordeonComponent;
  let fixture: ComponentFixture<EventAccordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAccordeonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
