import { Component } from '@angular/core';
import { NoteData } from '../data/note-data';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  loaded:boolean = false;
  notes:NoteData[] = JSON.parse(localStorage.getItem('notes') || '[]', NoteData.reviver)
  title:string = '';
  tag:string = 'Choose tag';
  content:string = '';

  loading(event: boolean) {
    this.loaded = event;
  }

  addNote() {
    let note = new NoteData(this.title, this.tag, this.content);
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    this.title = '';
    this.tag = 'Choose tag';
    this.content = '';
  }

  prediction(event: PredictionEvent) {
    let gesture = event.getPrediction();
    if(gesture === 'Two Open Hands') {
      this.addNote();
    }
  }
}
