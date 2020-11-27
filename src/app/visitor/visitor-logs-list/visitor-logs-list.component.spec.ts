import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLogsListComponent } from './visitor-logs-list.component';

describe('VisitorLogsListComponent', () => {
  let component: VisitorLogsListComponent;
  let fixture: ComponentFixture<VisitorLogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorLogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
