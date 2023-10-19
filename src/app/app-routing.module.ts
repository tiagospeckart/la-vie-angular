import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistComponent } from './components/psychologist/psychologist.component';

const routes: Routes = [
  { path: '', redirectTo: '/psychologist', pathMatch: 'full' },
  { path: 'psychologist', component: PsychologistComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
