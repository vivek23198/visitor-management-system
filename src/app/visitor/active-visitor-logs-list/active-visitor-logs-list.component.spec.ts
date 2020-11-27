import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVisitorLogsListComponent } from './active-visitor-logs-list.component';

describe('ActiveVisitorLogsListComponent', () => {
  let component: ActiveVisitorLogsListComponent;
  let fixture: ComponentFixture<ActiveVisitorLogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveVisitorLogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveVisitorLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
