import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarDetailComponent } from './familiar-detail.component';


describe('FamiliarDetailComponent', () => {
  let component: FamiliarDetailComponent;
  let fixture: ComponentFixture<FamiliarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
