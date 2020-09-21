import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServantByIdComponent } from './servant-by-id.component';

describe('ServantByIdComponent', () => {
  let component: ServantByIdComponent;
  let fixture: ComponentFixture<ServantByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServantByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServantByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
