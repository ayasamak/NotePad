import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from './notepad.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent {
constructor(public router:Router){
}

getStart(){
  this.router.navigate(['/add-note'])
}
}
