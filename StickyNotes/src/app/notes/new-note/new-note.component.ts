import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/app.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  hashtag = /#[0-9A-Za-zА-Яа-яё]+/g;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  addNewNote(form: NgForm) {
    const note: Note = {
      name: form.value.noteName,
      content: form.value.noteContent,
      hashtags: null
    };
    this.noteService.addNotes(note);
    form.resetForm();
  }

}
