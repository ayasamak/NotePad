import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotepadService } from '../notepad.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-edit-notepad',
  templateUrl: './add-edit-notepad.component.html',
  styleUrls: ['./add-edit-notepad.component.scss']
})
export class AddEditNotepadComponent {
  action:string='';
  constructor(public fb:FormBuilder,public NotepadService:NotepadService,public router:Router,private notifier: NotifierService){
    this.NotepadService.DATA$.subscribe(data=>this.noteForm.setValue(data))
    this.NotepadService.ACTION$.subscribe(data=>this.action=data)
  }
  noteForm=this.fb.group({
    title:['',Validators.required],
    date:['',Validators.required],
    des:['',Validators.required]
  })

   get noteFormControls(){
   return this.noteForm.controls
   }
  submit(){    
    debugger
    if(this.action=='add'){
      this.NotepadService.addnotes(this.noteForm.value)
      this.notifier.notify('success', 'Add Sucessfully');
      this.router.navigate(['/add-note'])
    }
    if(this.action=='edit'){
      let index:number=0
      this.NotepadService.EDIT$.subscribe((data:number)=>index=data)
      this.NotepadService.editnotes(index,this.noteForm.value)
      this.notifier.notify('success', 'Edit Sucessfully');
      this.router.navigate(['/add-note'])
    }

  }
  cancel(){
    this.router.navigate(['/add-note'])
  }
}
