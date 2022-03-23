import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RFormComponent } from './r-form/r-form.component';
import { RDialogComponent } from './r-dialog/r-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    RFormComponent,
    RDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RFormComponent,
    RDialogComponent
  ]
})
export class RComponentModule { }
