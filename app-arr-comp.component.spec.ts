import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArrCompComponent } from './app-arr-comp.component';

describe('AppArrCompComponent', () => {
  let component: AppArrCompComponent;
  let fixture: ComponentFixture<AppArrCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppArrCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppArrCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
