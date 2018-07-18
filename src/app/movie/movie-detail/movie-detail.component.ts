import { Component, OnInit } from '@angular/core';
import { Theater } from '../../theater/theater.model';
import { TheaterService } from '../../theater/theater.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  private theaters:Theater[];
  private id:number;
  constructor(private theaterService:TheaterService, private route: ActivatedRoute) { } 
  
  ngOnInit() {
    //const id = this.route.snapshot.params['id'];

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
    );

    this.theaters = this.theaterService.getTheaters();
    //console.log("this.theaters" + this.theaters);
  }

}
