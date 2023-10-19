import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import PsychologistGetDTO from 'src/app/interfaces/PsychologistGetDTO';
import { PsychologistService } from 'src/app/services/psychologist.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { DialogService } from 'src/app/services/dialog.service';
import { AddEditPsychologistDialogComponent } from '../add-edit-psychologist-dialog/add-edit-psychologist-dialog.component';

@Component({
  selector: 'app-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.scss']
})
export class PsychologistComponent implements OnInit {
  displayedColumns: string[] = [
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'id',
    'name',
    'email',
    'password',
    'phone',
    'licenseNumber',
    'specializationArea',
    'biography',
    'status',
    'sessions',
    'isDeleted',
  ];
  dataSource!: MatTableDataSource<PsychologistGetDTO>;
  MAX_VISIBLE_STRING_LENGTH = 10;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private dialog: DialogService<PsychologistGetDTO>,
    private psychologistService: PsychologistService,
    private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.listAll();
  }

  openDialog(data?: PsychologistGetDTO): void {
    this.dialog.openDialog(AddEditPsychologistDialogComponent, () => this.listAll(), data);
  }

  listAll() {
    this.psychologistService.listAll().subscribe({
      next: (res: PsychologistGetDTO[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: Error) => {
        this.snackbarService.openSnackBar('Error fetching psychologists', 'done');
        console.log(err);
      },
    });
  }

  delete(id: number): void {
    this.psychologistService.deleteById(id).subscribe({
      next: () => {
        this.snackbarService.openSnackBar('Psychologist deleted successfully', 'done');
        this.listAll();
      },
      error: (err: Error) => {
        this.snackbarService.openSnackBar('Error deletin psychologist', 'done');
        console.log(err);
      },
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
