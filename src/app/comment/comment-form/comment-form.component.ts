import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IComment} from '../comment.interface';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {


  @Output() commentsData = new EventEmitter<IComment> ();
  postId: number | undefined;
  myForm: FormGroup = new FormGroup({
    firstName: new FormControl('Gipsz',
      [
        Validators.required,
        Validators.minLength(4)
      ]
    ),
    lastName: new FormControl('Jakab',
      [Validators.required,
        Validators.minLength(4)
      ]
    ),
    email: new FormControl('gipszjakab@gmail.com',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),
    body: new FormControl('asd',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ),
     });


  constructor() {
  }

  ngOnInit(): void {
    console.log('comment-fom-comp', this.postId);
  }

  onSubmit(): void {
    console.log('myForm' , this.myForm.value);
    this.commentsData.emit(this.myForm.value);

  }

}
