import { Injectable } from '@angular/core';
import { Note } from './model/note.model.js';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  availableNotes: Subject<Note[]> = new Subject<Note[]>();

  getAvailableNotes() {
    this.availableNotes.next(this.notes);
  }

  addNotes(note: Note) {
    this.notes.push(note);
    console.log(this.notes);
    this.availableNotes.next(this.notes);
  }

  updateNote(note: Note) {
    this.notes.map((localNote) => {
      if (localNote.name === note.name) {
        return note;
      }
    });
  }
}
