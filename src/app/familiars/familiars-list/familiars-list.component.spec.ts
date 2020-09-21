import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarsListComponent } from './familiars-list.component';

describe('FamiliarsListComponent', () => {
  let component: FamiliarsListComponent;
  let fixture: ComponentFixture<FamiliarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
