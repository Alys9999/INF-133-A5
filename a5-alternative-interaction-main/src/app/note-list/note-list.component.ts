import { Component } from '@angular/core';
import { NoteData } from '../data/note-data';
import { PredictionEvent } from '../prediction-event';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes: NoteData[] = JSON.parse(localStorage.getItem('notes') || '[]', NoteData.reviver);
  recent: NoteData[] = [];
  loaded: boolean = false;

  constructor(private router: Router) { }

  deleteNote(note: NoteData) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.recent.push(this.notes[0]);
      localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    }
  }

  deleteNoteByIndex(index: number) {
    if(index >= this.notes.length) {
      return;
    }
    this.notes.splice(index, 1);
    this.recent.push(this.notes[0]);
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
  }

  prediction(event: PredictionEvent) {
    let gesture = event.getPrediction();
    if(gesture === 'Two Closed Hands') {
      this.deleteNoteByIndex(0);
    }
    if(gesture === 'Hand Pointing') {
      this.toAdd();
    }
    if(gesture === 'one hand closed and one hand open'){
      this.deleteAll();
    }
    if(gesture === 'one hand open and one pointing'){
      this.undoOne();
    }
  }

  toAdd(){
    this.router.navigate(['/add-note']);
  }

  deleteAll()
{
  this.recent=this.recent.concat(this.notes);
  localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
}

undoOne(){
  if(this.recent && this.recent.length){
    let note = this.recent.pop();
    if(typeof note !== "undefined"){
      this.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    }
  }
  
}

loading(event: boolean) {
  this.loaded = event;
}
}

