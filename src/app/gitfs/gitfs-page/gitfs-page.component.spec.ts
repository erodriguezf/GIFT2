import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitfsPageComponent } from './gitfs-page.component';

describe('GitfsPageComponent', () => {
  let component: GitfsPageComponent;
  let fixture: ComponentFixture<GitfsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitfsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitfsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
