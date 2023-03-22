import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteData } from '../data/note-data';
import { PredictionEvent } from '../prediction-event';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  noteId:string;
  loaded:boolean = false;
  notes:NoteData[] = JSON.parse(localStorage.getItem('notes') || '[]', NoteData.reviver)
  title:string;
  tag:string;
  content:string;

  constructor(private route:ActivatedRoute, private router:Router, private toastService:ToastService) {}

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('id') || '';
    this.resetInput();
  }

  loading(event: boolean) {
    this.loaded = event;
  }

  editNote() {
    if(!this.checkValidity()) {
      return;
    }
    this.notes.filter(n => n.id != this.noteId)[0].setNewValues(this.title, this.tag, this.content);
    localStorage.setItem('notes', JSON.stringify(this.notes, NoteData.replacer));
    this.resetInput();
  }

  prediction(event: PredictionEvent) {
    let gesture = event.getPrediction();
    if(gesture === 'Two Open Hands') {
      this.editNote();
    }
    if(gesture === 'Two Hands Pointing'){
      this.toHome();
    }
    if(gesture === 'Hand Pinching') {
      this.toAdd();
    }
    if(gesture === 'Closed Hand'){
      this.resetInput();
    }
  }

  toHome()
  {
    this.router.navigate(['']);
  }

  toAdd() {
    this.router.navigate(['add-note']);
  }

  resetInput(){
    let currentNote = this.notes.filter(n => n.id != this.noteId)[0];
    this.title = currentNote.title;
    this.tag = currentNote.tag;
    this.content = currentNote.content;
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
    this.toastService.show('bg-success text-light','Success', 'Successfully edited note!', 3000);
  }
}
