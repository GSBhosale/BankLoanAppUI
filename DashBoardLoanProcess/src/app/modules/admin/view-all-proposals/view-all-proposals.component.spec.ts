import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProposalsComponent } from './view-all-proposals.component';

describe('ViewAllProposalsComponent', () => {
  let component: ViewAllProposalsComponent;
  let fixture: ComponentFixture<ViewAllProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProposalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
