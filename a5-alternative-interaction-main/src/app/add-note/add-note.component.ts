import { Component, OnDestroy } from '@angular/core';
import { NoteData } from '../data/note-data';
import { PredictionEvent } from '../prediction-event';
import {Router} from '@angular/router';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  loaded:boolean = false;
  notes:NoteData[] = JSON.parse(localStorage.getItem('notes') || '[]', NoteData.reviver)
  title:string = '';
  tag:string = 'text-bg-light';
  content:string = '';

  constructor(private router: Router, private toastService:ToastService) { }

  loading(event: boolean) {
    this.loaded = event;
  }

  addNote() {
    if(!this.checkValidity()) {
      return;
    }
    let note = new NoteData(this.title, this.tag, this.content);
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    this.resetInput();
  }

  prediction(event: PredictionEvent) {
    let gesture = event.getPrediction();
    if(gesture === 'Two Open Hands') {
      this.addNote();
    }
    if(gesture === 'Two Hands Pointing'){
      this.toHome();
    }
    if(gesture === 'Closed Hand'){
      this.resetInput();
    }
  }

  toHome()
  {
    this.router.navigate([''])
  }

  resetInput(){
    this.title = '';
    this.tag = 'text-bg-light';
    this.content = '';
  }

  checkValidity() {
    if(this.title === '' || this.content === '') {
      this.showWarning();
      return false;
    }
    this.showSucces();
    return true;
  }

  showWarning() {
    this.toastService.show("bg-warning text-light", "Missing Input", "All input fields needs to be filled!", 5000);
  }

  showSucces() {
    this.toastService.show('bg-success text-light','Success', 'Successfully added note!', 3000);
  }

}
