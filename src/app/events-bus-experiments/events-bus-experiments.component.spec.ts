import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBusExperimentsComponent } from './events-bus-experiments.component';

describe('EventsBusExperimentsComponent', () => {
  let component: EventsBusExperimentsComponent;
  let fixture: ComponentFixture<EventsBusExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsBusExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBusExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
