import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlinkComponent } from './gitlink.component';

describe('GitlinkComponent', () => {
  let component: GitlinkComponent;
  let fixture: ComponentFixture<GitlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
