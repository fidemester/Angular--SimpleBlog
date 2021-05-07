import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ContactService} from './contact.service';



@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
