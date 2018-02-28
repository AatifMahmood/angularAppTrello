import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllboardsComponentComponent } from './allboards-component.component';

describe('AllboardsComponentComponent', () => {
  let component: AllboardsComponentComponent;
  let fixture: ComponentFixture<AllboardsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllboardsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllboardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
