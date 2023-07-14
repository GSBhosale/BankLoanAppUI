import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectEmailComponent } from './reject-email.component';

describe('RejectEmailComponent', () => {
  let component: RejectEmailComponent;
  let fixture: ComponentFixture<RejectEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
