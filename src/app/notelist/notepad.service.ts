import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  DATA$=new BehaviorSubject<{title:string,date:any,des:string}>({title:"",date:'',des:""})
  ACTION$=new BehaviorSubject<string>("")
  EDIT$=new BehaviorSubject<number>(0)
  notelist:{title:string,date:any,des:string}[]=[
    {
      title:"My First ToDo list",
      date:'2023-03-28',
      des:"this my note"
    },
    {
      title:"Ux Design Fundamental",
      date:'2023-03-28',
      des:"Ux Design Fundamental"
    },
    {
      title:"Important Design Priniciple",
      date:'2023-03-28',
      des:"Important Design Priniciple"
    },
    {
      title:"Important FrontEnd Priniciple",
      date:'2023-03-28',
      des:"as"
    }
  ]
  constructor() { }

  getnotes(){
    return this.notelist
  }

  addnotes(data:any){
    this.notelist.push(data)
  }
  editnotes(index:number,data:any){
  this.notelist[index]=data
  }
  deleteNote(i:number){
   this.notelist.splice(i,1)
   return this.notelist.slice()
  }
}
