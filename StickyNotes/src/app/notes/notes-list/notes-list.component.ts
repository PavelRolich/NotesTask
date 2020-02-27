import { Component, OnInit, OnDestroy } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/app.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit, OnDestroy {
  notesList: Note[] = [];
  noteSubs: Subscription;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAvailableNotes();
    this.noteSubs = this.noteService.availableNotes.subscribe((notes: Note[]) => {
      this.notesList = notes;
    });
  }

  ngOnDestroy() {
    this.noteSubs.unsubscribe();
  }

}
