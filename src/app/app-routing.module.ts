import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditNotepadComponent } from './notelist/add-edit-notepad/add-edit-notepad.component';
import { AddNoteComponent } from './notelist/add-note/add-note.component';
import { NotelistComponent } from './notelist/notelist.component';

const routes: Routes = [
  {
    path:'',
    component:NotelistComponent
  },
  {
    path:'add-note',
    component:AddNoteComponent
  },
  {
    path:'add-edit-note',
    component:AddEditNotepadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
