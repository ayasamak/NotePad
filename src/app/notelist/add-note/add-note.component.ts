import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from '../notepad.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  providers:[DatePipe]
})
export class AddNoteComponent {
  notelist:{title:string,date:any,des:string}[]=[]
  day= new Date()
  search:string='';
  constructor(public router:Router,public NotepadService:NotepadService,public DatePipe:DatePipe){
  this.notelist=this.NotepadService.getnotes()
}
editNote(note:any,i:number){  
  this.NotepadService.ACTION$.next('edit')
  this.NotepadService.DATA$.next(note)
  this.NotepadService.EDIT$.next(i)
  this.router.navigate(['/add-edit-note'])
  }
  deleteNote(i:number){
    this.notelist=this.NotepadService.deleteNote(i)
  }
  shownote(note:any){
  this.NotepadService.ACTION$.next('show')
  this.NotepadService.DATA$.next(note)
  this.router.navigate(['/add-edit-note'])
  }
  addNote(){
    this.NotepadService.ACTION$.next('add')
    this.NotepadService.DATA$.next({title:'',date:this.DatePipe.transform(new Date(),'MMM d, y'),des:''})
    this.router.navigate(['/add-edit-note'])
    }

    searchfun(){
      if(this.search.length>0){
        this.notelist=this.notelist.filter(note=>{
          return note.title.toUpperCase().includes(this.search.toUpperCase())
        })
      }
      else{
        this.notelist=this.NotepadService.getnotes()
      }
    }
}
