import { Component } from '@angular/core';
import { NoteData } from '../data/note-data';
import { PredictionEvent } from '../prediction-event';
import {Router} from '@angular/router';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes: NoteData[] = JSON.parse(localStorage.getItem('notes') || '[]', NoteData.reviver);
  recent: NoteData[] = [];
  loaded: boolean = false;

  constructor(private router: Router, private toastService:ToastService) { }

  deleteNote(note: NoteData) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.showSuccess('Successfully deleted note!');
      this.recent.push(note)
      this.notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    }
  }

  deleteNoteByIndex(index: number) {
    if(index >= this.notes.length) {
      return;
    }
    this.showSuccess('Successfully deleted note in positon' + (index+1).toString() + "!");
    this.recent.push(this.notes[index]);
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
  }

  prediction(event: PredictionEvent) {
    let gesture = event.getPrediction();
    if(gesture === 'Two Closed Hands') {
      this.deleteNoteByIndex(0);
    }
    if(gesture === 'Hand Pinching') {
      this.toAdd();
    }
    if(gesture === 'One Closed Hand and One Open Hand'){
      this.deleteAll();
    }
    if(gesture === 'One Open Hand and One Hand Pointing'){
      this.undoOne();
    }
  }

  toAdd(){
    this.router.navigate(['/add-note']);
  }

  toEditNote(id:string) {
    this.router.navigate(['/edit-note/'+id]);
  }

  deleteAll() {
    if(this.notes.length === 0) {
      this.showWarning('Missing Notes to Delete', 'No notes remaining to Delete All!');
      return;
    }
    this.showSuccess('Successfully deleted all notes!');
    this.recent=this.recent.concat(this.notes);
    this.notes = [];
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
}

undoOne(){
  if(this.recent && this.recent.length){
    this.showSuccess('Successfully undid one delete!');
    let note = this.recent.pop();
    if(typeof note !== "undefined"){
      this.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    }
  } else {
    this.showWarning('Missing Previous Deleted Note', 'No recent deletes to undo!');
  }
  
}

showWarning(header:string, body:string) {
  this.toastService.show('bg-warning text-light', header, body);
}

showSuccess(body:string) {
  this.toastService.show('bg-success text-light', 'Success', body, 3000);
}

loading(event: boolean) {
  this.loaded = event;
}
}

