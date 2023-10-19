import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPsychologistDialogComponent } from './add-edit-psychologist-dialog.component';

describe('AddEditPsychologistDialogComponent', () => {
  let component: AddEditPsychologistDialogComponent;
  let fixture: ComponentFixture<AddEditPsychologistDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPsychologistDialogComponent]
    });
    fixture = TestBed.createComponent(AddEditPsychologistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
