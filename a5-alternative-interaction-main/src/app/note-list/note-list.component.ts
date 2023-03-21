import { Component } from '@angular/core';
import { NoteData } from '../data/note-data';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes: NoteData[] = JSON.parse(localStorage.getItem('notes') || '[]', NoteData.reviver);
  newNote: string = '';
  loaded:boolean = false;

  addNote() {
    return;
    if (this.newNote) {
      //this.notes.push(this.newNote);
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.newNote = '';
    }
  }

  deleteNote(note: NoteData) {
    return;
    //const index = this.notes.indexOf(note);
    let index = 1;
    if (index !== -1) {
      this.notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }

  deleteNoteByIndex(index: number) {
    return;
    if(index >= this.notes.length) {
      return;
    }
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  prediction(event: PredictionEvent) {
    return;
    let gesture = event.getPrediction();
    if(gesture === 'Two Open Hands') {
      this.addNote();
    }else if(gesture === 'Two Closed Hands') {
      this.deleteNoteByIndex(0);
    }
  }

  loading(event: boolean) {
    this.loaded = event;
  }
}

