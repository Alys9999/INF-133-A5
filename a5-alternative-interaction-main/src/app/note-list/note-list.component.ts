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
  loaded:boolean = false;

  deleteNote(note: NoteData) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    }
  }

  deleteNoteByIndex(index: number) {
    if(index >= this.notes.length) {
      return;
    }
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
  }

  prediction(event: PredictionEvent) {
    let gesture = event.getPrediction();
    if(gesture === 'Two Closed Hands') {
      this.deleteNoteByIndex(0);
    }
  }

  loading(event: boolean) {
    this.loaded = event;
  }
}

