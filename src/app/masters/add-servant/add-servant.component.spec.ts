import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServantComponent } from './add-servant.component';

describe('AddServantComponent', () => {
  let component: AddServantComponent;
  let fixture: ComponentFixture<AddServantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
