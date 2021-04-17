import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ContactFormMessageInterface} from "./contact-form-message.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  message:ContactFormMessageInterface[]=[];
  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    console.log(form.value)
    this.message=form.value

  }
}
