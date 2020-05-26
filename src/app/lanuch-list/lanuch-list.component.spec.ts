import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanuchListComponent } from './lanuch-list.component';

describe('LanuchListComponent', () => {
  let component: LanuchListComponent;
  let fixture: ComponentFixture<LanuchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanuchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanuchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
