import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import {faPills} from '@fortawesome/free-solid-svg-icons/faPills';
import {faCheck} from '@fortawesome/free-solid-svg-icons/';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faCoffee = faCoffee;
  fapills = faPills;
  faCheck = faCheck;


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Values', form.value);

  }
}
