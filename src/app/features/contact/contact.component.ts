import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import {faPills} from '@fortawesome/free-solid-svg-icons/faPills';
import {faCheck} from '@fortawesome/free-solid-svg-icons/';
import {ContactService} from './contact.service';
import {ContactFormMessage} from './contactFormMessage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formValues: ContactFormMessage | undefined;

  faCoffee = faCoffee;
  fapills = faPills;
  faCheck = faCheck;


  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Values', form.value);
    this.formValues = form.value;
    console.log(this.formValues);
    this.contactService.sendMessage(this.formValues).subscribe(contact => {
      console.log(contact, 'hello');
      console.log(this.formValues);
    });
  }
}
