import { Component, OnInit } from '@angular/core';

import { Theater } from '../theater.model';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {
  private theaters:Theater[];
  private selectedTheater:number = 0;
  private shows:Object [];
   

  constructor(private theaterService:TheaterService) { }

  ngOnInit() {
    this.theaters = this.theaterService.getTheaters();    
  }

  onTheaterSelect(theater) {
    this.selectedTheater = theater.id;
    console.log("selected theater : " + (this.selectedTheater-1));
    this.shows = theater.shows;
    console.log("theater id is " + this.shows);
  }  
}
