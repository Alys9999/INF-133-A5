import { Component } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes: string[] = JSON.parse(localStorage.getItem('notes') || '[]');
  newNote: string = '';

  addNote() {
    if (this.newNote) {
      this.notes.push(this.newNote);
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.newNote = '';
    }
  }

  deleteNote(note: string) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
}

