import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClipComponent } from './project-clip.component';

describe('ProjectClipComponent', () => {
  let component: ProjectClipComponent;
  let fixture: ComponentFixture<ProjectClipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectClipComponent]
    });
    fixture = TestBed.createComponent(ProjectClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
