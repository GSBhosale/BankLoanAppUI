import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLedgersComponent } from './view-all-ledgers.component';

describe('ViewAllLedgersComponent', () => {
  let component: ViewAllLedgersComponent;
  let fixture: ComponentFixture<ViewAllLedgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLedgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
