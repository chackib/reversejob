import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperienceDialogComponent } from './profile-experience-dialog.component';

describe('ProfileExperienceDialogComponent', () => {
  let component: ProfileExperienceDialogComponent;
  let fixture: ComponentFixture<ProfileExperienceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExperienceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperienceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
