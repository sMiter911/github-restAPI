import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubUserComponent } from './githubuser.component';

describe('GitHubUserComponent', () => {
  let component: GitHubUserComponent;
  let fixture: ComponentFixture<GitHubUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
