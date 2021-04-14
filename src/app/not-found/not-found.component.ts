import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }
link="http://www.localhost:4200" // // @todo: ez itt nem szép helyen van, osztaly mezők a constrctor előtt szerepelnejenek
  ngOnInit(): void {
  }

}
