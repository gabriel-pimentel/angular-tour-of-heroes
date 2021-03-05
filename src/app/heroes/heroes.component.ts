import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  /*
     Constructors should do no more than set
     the initial local variables to simple values.
  */
  constructor() {

  }

  // Fetch initial data for this component
  // Angular calls it  shortly after ckecking
  // the input properties for that component or
  // directive for the first time
  ngOnInit() {

  }

}
