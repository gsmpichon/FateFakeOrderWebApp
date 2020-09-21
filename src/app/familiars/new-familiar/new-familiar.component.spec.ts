import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFamiliarComponent } from './new-familiar.component';

describe('NewFamiliarComponent', () => {
  let component: NewFamiliarComponent;
  let fixture: ComponentFixture<NewFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
