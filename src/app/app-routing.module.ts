import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileEditComponent } from './files/edit/file-edit/file-edit.component';
import { FileListComponent } from './files/file-list/file-list.component';

const routes: Routes = [
  { path: '',  component: FileListComponent},
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'file-edit/:id', component: FileEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
