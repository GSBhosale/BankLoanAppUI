import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAreaWiseCustomersComponent } from './view-area-wise-customers.component';

describe('ViewAreaWiseCustomersComponent', () => {
  let component: ViewAreaWiseCustomersComponent;
  let fixture: ComponentFixture<ViewAreaWiseCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAreaWiseCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAreaWiseCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
