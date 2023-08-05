import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmiComponent } from './all-emi.component';

describe('AllEmiComponent', () => {
  let component: AllEmiComponent;
  let fixture: ComponentFixture<AllEmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
