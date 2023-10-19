import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsychologistComponent } from './components/psychologist/psychologist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './core/material-imports/material-imports.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddEditPsychologistDialogComponent } from './components/add-edit-psychologist-dialog/add-edit-psychologist-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PsychologistComponent,
    AddEditPsychologistDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialImportsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
