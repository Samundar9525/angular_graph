import { Component, OnInit } from '@angular/core';
declare function mymethod():any;

@Component({
  selector: 'app-mygraph',
  templateUrl: './mygraph.component.html',
  styleUrls: ['./mygraph.component.css']
})
export class MygraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  mymethod();

  }


}
