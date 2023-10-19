import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import PsychologistGetDTO from 'src/app/interfaces/PsychologistGetDTO';
import { PsychologistService } from 'src/app/services/psychologist.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-edit-psychologist-dialog',
  templateUrl: './add-edit-psychologist-dialog.component.html',
  styleUrls: ['./add-edit-psychologist-dialog.component.scss'],
})
export class AddEditPsychologistDialogComponent implements OnInit {
  psychologistForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private psychologistService: PsychologistService,
    private dialogRef: MatDialogRef<AddEditPsychologistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PsychologistGetDTO,
    private snackbarService: SnackbarService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.psychologistForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
    });

    this.dateAdapter.setLocale('en-US');
  }

  getErrorMessage(controlName: string): string {
    const control = this.psychologistForm.get(controlName);

    if (control?.hasError('required')) {
      return 'This field is required';
    }

    if (control?.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength}`;
    }

    if (control?.hasError('maxlength')) {
      return `Maximum length is ${control.errors?.['maxlength'].requiredLength}`;
    }

    return '';
  }

  ngOnInit(): void {
    if (!this.data) return;

    this.psychologistForm.patchValue({
      ...this.data,
    });
  }

  onSubmit() {
    if (this.psychologistForm.invalid) return;

    const psychologistObservable = this.data
      ? this.psychologistService.updateById(this.data.id, this.psychologistForm.value)
      : this.psychologistService.create(this.psychologistForm.value);

    psychologistObservable.subscribe({
      next: () => {
        this.snackbarService.openSnackBar(
          this.data
            ? 'Psychologist updated successfully'
            : 'Psychologist added successfully',
          'done'
        );
        this.dialogRef.close(true);
      },
      error: () => {
        this.snackbarService.openSnackBar(
          this.data ? 'Error updating psychologist' : 'Error adding psychologist',
          'done'
        );
      },
    });
  }
}
