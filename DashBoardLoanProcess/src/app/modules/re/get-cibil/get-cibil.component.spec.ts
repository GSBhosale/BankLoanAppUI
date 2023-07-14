import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCibilComponent } from './get-cibil.component';

describe('GetCibilComponent', () => {
  let component: GetCibilComponent;
  let fixture: ComponentFixture<GetCibilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCibilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
